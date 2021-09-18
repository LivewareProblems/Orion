# Orion

Orion is a Dynamic Distributed Profiler. It allows you to profile any function
in an erlang cluster and get back an histogram representing the profile of the
function calls across the whole cluster.

It is meant to be used as a library in part of your existing application.

## Goals

- [ ] Can show a graph of fake or real data
- [ ] Can change the function traced to a new one
- [ ] Can get trace data in a distributed way
- [ ] More to come !

## TODO add how to add it to your app

## Hacking

Orion is a phoenix liveview application for the frontend.

To start your Phoenix server:

* Install dependencies with `mix deps.get`
* Install Node.js dependencies with `yarn install --cwd assets` inside the `assets` directory
* Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.
