#######################################
# Development Server for Orion
#
# Options:
#
# Usage:
#
# $ iex -S mix dev [flags]
#######################################

Logger.configure(level: :debug)

argv = System.argv()
{opts, _, _} = OptionParser.parse(argv, strict: [port: :integer])
options = Map.new(opts)

Application.put_env(:orion, OrionWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "/AlsXZICxnL/Lp3Qo4Z74blNgAB2WCkqwpwrg9pW9kMeAOJ/Efdqi4BB3cuoh4vo",
  live_view: [signing_salt: "CuaBSTgW"],
  http: [port: System.get_env("PORT") || options["port"] || 4001],
  debug_errors: true,
  check_origin: false,
  pubsub_server: Orion.PubSub,
  watchers: [
    node: [
      "node_modules/webpack/bin/webpack.js",
      "--mode",
      "development",
      "--watch",
      "--watch-options-stdin",
      cd: Path.expand("assets", __DIR__),
      env: [{"NODE_ENV", "development"}]
    ]
  ],
  live_reload: [
    patterns: [
      ~r"priv/static/.*(js|css|png|jpeg|jpg|gif|svg)$",
      ~r"lib/orion_web/(live|views)/.*(ex)$",
      ~r"lib/orion_web/templates/.*(eex)$"
    ]
  ]
)

Application.put_env(:phoenix, :serve_endpoints, true)

Task.async(fn ->
  children = []

  children =
    children ++
      [
        {Phoenix.PubSub, [name: Orion.PubSub, adapter: Phoenix.PubSub.PG2]},
        {Registry, keys: :duplicate, name: Orion.SessionPubsub},
        OrionWeb.Endpoint
      ]

  {:ok, _} = Supervisor.start_link(children, strategy: :one_for_one)
  Process.sleep(:infinity)
end)
|> Task.await(:infinity)
