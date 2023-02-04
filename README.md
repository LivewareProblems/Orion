# Orion

Orion is a Dynamic Distributed Profiler. It allows you to profile any function
in a beam cluster and get back an histogram representing the profile of the
function calls across the whole cluster. Live, with low overhead, making it
suitable to run in production. It uses Erlang dynamic tracing under the hood.

It is meant to be used as a library in part of your existing application.

If you run your application non clustered, you will be able to trace the node
you connect to.

If your applications are connected via Distributed Erlang, then you will get
a histogram of every call on every node, aggregated.

![screenshot](https://github.com/DianaOlympos/orion/raw/master/screenshot.png)

## Non Goals

- Be useable in any BEAM language. This may happen in the future but for now we
  depend on dog_sketch which is in elixir
- Making it easy to run the UI locally and connect remotely to a cluster. This
  may come in the future or in a paid extension. If you are interested, [contact
  me on the Elixir Forum](https://elixirforum.com/u/dianaolympos/summary)
- Session handling, in particular personal auth, and more. This may come in the
  future or in a paid extension. If you are interested, [contact me on the
  Elixir Forum](https://elixirforum.com/u/dianaolympos/summary)

## TODO add how to add it to your app

## Hacking

You need elixir 1.12+ and OTP 24+.

Orion is a phoenix liveview application for the frontend.

To start your Phoenix server:

- Install dependencies with `mix setup`

If you want to see it in action

- Start the development endpoint with `mix dev`

Now you can visit [`localhost:4001`](http://localhost:4001) from your browser.
