# Orion

Orion is a Dynamic Distributed Profiler. It allows you to profile any function
in an erlang cluster and get back an histogram representing the profile of the
function calls across the whole cluster.

It is meant to be used as a library in part of your existing application.

## Roadmap

- [x] Can show a graph of fake or real data
- [x] Can change the function traced to a new one
- [x] Can get trace data in a distributed way
- [x] Can trace multiple MFA
- [x] Can trace the same match_spec on multipel graph
- [ ] Can use arguments match_specs
- [ ] More to come !

## Non Goals

- Be useable in any BEAM language. This may happen in the future but for now we
  depend on dog_sketch which is in elixir
- Making it easy to run the UI locally and connect remotely to a cluster. This may come in the future or in a paid extension. If you are interested, [contact me on the Elixir Forum](https://elixirforum.com/u/dianaolympos/summary)
- Session handling, in particular personal auth, and more. This may come in the future or in a paid extension. If you are interested, [contact me on the Elixir Forum](https://elixirforum.com/u/dianaolympos/summary)

## TODO add how to add it to your app

## Hacking

You need elixir 1.12+ and OTP 24+.

Orion is a phoenix liveview application for the frontend.

To start your Phoenix server:

- Install dependencies with `mix deps.get`

Test can be run with `mix test`.

If you want to see it in action

- Install Node.js dependencies with `npm install --cwd assets` inside the `assets` directory
- Start the development endpoint with `mix dev`

Now you can visit [`localhost:4001`](http://localhost:4001) from your browser.
