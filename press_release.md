# Fighting latency Scorpions with Orion

[“It’s slow” is the hardest problem you’ll ever debug.](https://www.somethingsimilar.com/2013/01/14/notes-on-distributed-systems-for-young-bloods/) was written for distributed system, but it is nearly as true for single machine system. It is what i call the Scorpions of latency. While they may not be bugs, as the system may behaving exactly as specified, the tail end of latency problems can be excessively problematic for all kind of systems. (See The Tail at Scale). The tail is dangerous... hence Scorpions instead of bugs.

Experienced engineers will fear this kind of niche performance edge cases that can destroy a whole system. I know i do. I lost multiple weeks of engineering chasing these pesky scorpions hiding in my systems. That is why we build Orion.

But to explain what Orion is and why we did it, let see what are the tools we have to handle this kind of inquiry on the BEAM.

## Tracers, Profilers and investigation

"When Nadia try to discombobulate the calcificator, it is slow". Well that is a precise bug reports. You are lucky though. Your SRE and your team have spent the past few months installing OpenTelemetry, so you can quickly look at the request done to discombobulate, filter for the calcificator and the request done with Nadia user_id. Indeed these request seems far slower than others, and you can see that it seems specific to this request. Good news, you now have a good input set to reproduce the problem.

As it is a performance problems, you get the tools that you know is meant to help you find this. A profiler.

You are lucky, erlang come with a bunch of them, and Mix helpfully give you a nice interface to them. But how do they work ?

Profilers work by _instrumenting_ every function call in a system. You then call your system with your input and the profiler return you at the end of the run information about every single function call, how many time it was called and sometimes how much time was spent in each call. That is great and profilers are really helpful.

But profilers have also massive drawbacks.

1. Profilers are "blind". They cannot get a clue about which part of the query
   call stack you suspect. That means that they have to instrument everything.
   That can generate massive impact, making the code running under the profiler
   run totally differently from production
2. Profilers need to instrument the whole system. This tend to have massive impact on performance, and as such cannot be run in production.
3. Profilers usually need a restart to be able to instrument the system. This usually means you cannot easily run it in production "as is", making some elusive performance problems really hard to catch
4. Combining these three, profiling in production would generate a lot of "noise", as every time spent working on other request, which tend to be happening a lot in modern massively concurrent system, would pollute the whole results.
5. If you are running a distributed system, you are doomed.

All in all, profilers are great when you have to treat problems that are isolated, easily reproducible, with fixed runtime. This is sadly not characteristics most of our current systems share on the BEAM.

## Enter Dynamic Tracing

It is ok you say. I am on the BEAM. I can just use dynamic tracing. I can hook into any function, even limit it to the one that take the inputs relevant to discombobulate the calcificator, and i will get the input and output of the function. And i am sure i can get the time taken to run the function too. I could only instrument the part i am interested in, that will reduce the impact. And i can do it dynamically without redeploying, so I can do it in production. Nice! Let's check my tools!

So. Recon can't do it. Redbug neither. dbg does not offer an easy one. uh. That is problematic. Seems i need a dynamic profiler. Also it would be nice to get a histogram, because most call are ok and just sometimes it seems to be slower. I need to see that information to pinpoint the call i need.

## Professor X enter the scene

You are lucky, there is a tool for you. Xprof allows you to connect to the machine and dynamically trace any function and get its call latency in an histogram, live. This means that you can start from the top of the call stack and implement while following your code, dynamically exploring the runtime profile of every function. Rapidly pinpointing the source of the slowdown through feedback become easy.

Wait, it sounds amazing, but my request is randomly sent to one of five machine by my load balancer. Can we make this histogram show the calls from every node combined ? So i do not have to pray it hit the one i am tracing ?

Also why is xprof so hard to run and seems stuck in RC for years now ? Well mostly because opensource is hard. And you should not have too much expectations from maintainers. They give their time for free and we are really happy Appliscale gave us Xprof. It is a great tool and i use it regularly.

## Orion

But what if we could give you all the power of dynamic tracing, all the nice graph of Xprof. And at the same time make it distributed and easier to run ?

Enter Orion. Orion is a Dynamic Distributed Profiler for the BEAM. It uses Dynamic Tracing to extract runtime latency of function calls. Targeted with Match Specs. It store the data in DD-sketch, allowing to combine it safely with a limited error, even in a distributed ways. It present all this information in a nice GUI running on liveview or in an IEX or erlang shell directly, so that you always can ask performance questions to your runtime and get answers. Finally, it is made of two libraries, a client and a server, that communicate through a well defined protocol. The server is purely in erlang, allowing you to run it easily for any BEAM language. While the client is in elixir, but can run on its own machine locally, simply connected to your cluster as a hidden node.
