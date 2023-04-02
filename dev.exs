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
  code_reloading: true,
  watchers: [
    esbuild: {Esbuild, :install_and_run, [:default, ~w(--watch)]},
    npx: [
      "postcss",
      "css/app.css",
      "--env=development",
      "--output=../dist/css/app.css",
      "--watch",
      cd: Path.expand("assets", __DIR__)
    ]
  ],
  live_reload: [
    patterns: [
      ~r"dist/.*(js|css|png|jpeg|jpg|gif|svg)$",
      ~r"lib/orion_web/.*(ex)$",
      ~r"lib/orion_web/layouts/.*(ex)$"
    ]
  ]
)

defmodule OrionDemoWeb.Router do
  use Phoenix.Router
  import OrionWeb.Router

  @live_orion_prefix ""

  pipeline :browser do
    plug :fetch_session
    plug :protect_from_forgery
    plug :put_csp
  end

  scope "/" do
    pipe_through :browser

    live_orion("/",
      csp_nonce_assign_key: %{
        img: :img_csp_nonce,
        style: :style_csp_nonce,
        script: :script_csp_nonce
      }
      # ,fake_data: true
    )
  end

  def put_csp(conn, _opts) do
    [img_nonce, style_nonce, script_nonce] =
      for _i <- 1..3, do: 16 |> :crypto.strong_rand_bytes() |> Base.url_encode64(padding: false)

    conn
    |> assign(:img_csp_nonce, img_nonce)
    |> assign(:style_csp_nonce, style_nonce)
    |> assign(:script_csp_nonce, script_nonce)
    |> put_resp_header(
      "content-security-policy",
      "default-src; script-src 'nonce-#{script_nonce}'; style-src-elem 'nonce-#{style_nonce}'; " <>
        "img-src 'nonce-#{img_nonce}' data: ; font-src data: ; connect-src 'self'; frame-src 'self' ;"
    )
  end
end

defmodule OrionWeb.Endpoint do
  use Phoenix.Endpoint, otp_app: :orion

  # The session will be stored in the cookie and signed,
  # this means its contents can be read but not tampered with.
  # Set :encryption_salt if you would also like to encrypt it.
  @session_options [
    store: :cookie,
    key: "_orion_key",
    signing_salt: "YLC5E6bd"
  ]

  socket "/live", Phoenix.LiveView.Socket, websocket: [connect_info: [session: @session_options]]

  # Code reloading can be explicitly enabled under the
  # :code_reloader configuration of your endpoint.
  if code_reloading? do
    socket "/phoenix/live_reload/socket", Phoenix.LiveReloader.Socket
    plug Phoenix.LiveReloader
    plug Phoenix.CodeReloader
  end

  plug Plug.Session, @session_options

  plug Plug.RequestId
  plug Plug.Telemetry, event_prefix: [:phoenix, :endpoint]

  plug OrionDemoWeb.Router
end

Application.ensure_all_started(:orion_collector)
Application.put_env(:phoenix, :serve_endpoints, true)

Task.start(fn ->
  children = []

  children =
    children ++
      [
        {Phoenix.PubSub, [name: Orion.PubSub, adapter: Phoenix.PubSub.PG2]},
        # {Registry, keys: :duplicate, name: Orion.SessionPubsub},
        OrionWeb.Endpoint
      ]

  {:ok, _} = Supervisor.start_link(children, strategy: :one_for_one)
  Process.sleep(:infinity)
end)
