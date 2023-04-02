import Config

# Configures the endpoint
config :orion, OrionWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "/AlsXZICxnL/Lp3Qo4Z74blNgAB2WCkqwpwrg9pW9kMeAOJ/Efdqi4BB3cuoh4vo",
  pubsub_server: Orion.PubSub,
  live_view: [signing_salt: "CuaBSTgW"]

# Configures Elixir's Logger
config :logger, level: :warning
config :logger, :console, format: "[$level] $message\n"

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason
# Set a higher stacktrace during development. Avoid configuring such
# in production as building large stacktraces may be expensive.
config :phoenix, :stacktrace_depth, 20

if config_env() == :dev do
  config :esbuild,
    version: "0.17.5",
    default: [
      args:
        ~w(js/app.js --bundle --minify --sourcemap=external --target=es2020 --outdir=../dist/js),
      cd: Path.expand("../assets", __DIR__),
      env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
    ]
end
