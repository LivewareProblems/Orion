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

![screenshot](https://github.com/LivewareProblems/Orion/raw/main/screenshot.png)

## Non Goals

- Be useable in any BEAM language. This may happen in the future but for now we
  depend on dog_sketch which is in elixir
- Making it easy to run the UI locally and connect remotely to a cluster. This
  may come in the future or in a paid extension. If you are interested, [contact
  me on the Elixir Forum](https://elixirforum.com/u/DianaOlympos/summary). In
  the meantime, you can use the `mix dev` local development setup as a starting
  point to do your own. Orion totally work remotely connected with erlang
  distribution, so as long as you can connect to your cluster (and deactivate
  the `:self_profile` option in your endpont), it should just work.
- Session handling, in particular personal auth, and more. This may come in the
  future or in a paid extension. If you are interested, [contact me on the
  Elixir Forum](https://elixirforum.com/u/DianaOlympos/summary). Refreshes clean
  up the UI.

## Installation

To start using Orion, you will need three steps:

1. Add the `orion` dependency
2. Configure LiveView
3. Add UI access

### 1. Add the `orion` dependency

Add the following to your `mix.exs` and run `mix deps.get`:

```elixir
def deps do
  [
    {:orion, "~> 1.0"}
  ]
end
```

### 2. Configure LiveView

The Orion UI is built on top of LiveView. If LiveView is already installed in
your app, feel free to skip this section.

If you plan to use LiveView in your application in the future, we recommend you
to follow [the official installation
instructions](https://hexdocs.pm/phoenix_live_view/installation.html). This
guide only covers the minimum steps necessary for the Orion UI itself to run.

First, update your endpoint's configuration to include a signing salt. You can
generate a signing salt by running `mix phx.gen.secret 32` (note Phoenix v1.5+
apps already have this configuration):

```elixir
# config/config.exs
config :my_app, MyAppWeb.Endpoint,
  live_view: [signing_salt: "SECRET_SALT"]
```

Then add the `Phoenix.LiveView.Socket` declaration to your endpoint:

```elixir
socket "/live", Phoenix.LiveView.Socket
```

And you are good to go!

### 3. Add Orion UI access for development-only usage

Once installed, update your router's configuration to forward requests to an
OrionWeb with a unique `name` of your choosing:

```elixir
# lib/my_app_web/router.ex
use MyAppWeb, :router
import OrionWeb.Router
...
if Mix.env() == :dev do
  scope "/" do
    pipe_through [:browser]
    live_orion "/orion"
  end
end
```

This is all. Run `mix phx.server` and access the "/orion" to start profiling.

### Extra: Add Orion access on all environments (including production)

If you want to use the Orion UI in production, you should put it behind some
authentication and allow only admins to access it.

If you have an authentication layer already for admins, `live_orion` accept an
`:on_mount` option, to specify the hooks to validate your authentication, as
described in the [official phoenix guide about
security](https://hexdocs.pm/phoenix_live_view/security-model.html#mounting-considerations)

If your application does not have an admins-only section yet, you can use
`Plug.BasicAuth` to set up some basic authentication as long as you are also
using SSL (which you should anyway):

```elixir
# lib/my_app_web/router.ex
use MyAppWeb, :router
import OrionWeb.Router
...
pipeline :admins_only do
  plug :admin_basic_auth
end
scope "/" do
  pipe_through [:browser, :admins_only]
    live_orion "/orion"
end
defp admin_basic_auth(conn, _opts) do
  username = System.fetch_env!("AUTH_USERNAME")
  password = System.fetch_env!("AUTH_PASSWORD")
  Plug.BasicAuth.basic_auth(conn, username: username, password: password)
end
```

If you are running your application behind a proxy or a webserver, you also have
to make sure they are configured for allowing WebSocket upgrades. For example,
[here is an
article](https://web.archive.org/web/20171104012240/https://dennisreimann.de/articles/phoenix-nginx-config.html)
on how to configure Nginx with Phoenix and WebSockets.

Finally, you will also want to configure your `config/prod.exs` and use your
domain name under the `check_origin` configuration:

```elixir
    check_origin: ["//myapp.com"]
```

Then you should be good to go!

<!-- MDOC !-->

## Contributing

You need elixir 1.12+ and OTP 24+.

Orion is a phoenix liveview application for the frontend.

To start your Phoenix server:

- Install dependencies with `mix setup`

If you want to see it in action

- Start the development endpoint with `mix dev`

Now you can visit [`localhost:4001`](http://localhost:4001) from your browser.

## License

MIT License. Copyright (c) 2023 Thomas Depierre.
