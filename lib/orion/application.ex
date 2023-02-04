defmodule Orion.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      # OrionWeb.Telemetry,
      # # Start the PubSub system
      # {Phoenix.PubSub, name: Orion.PubSub},
      {Registry, keys: :duplicate, name: Orion.SessionPubsub}
      # # Start the Endpoint (http/https)
      # OrionWeb.Endpoint
      # Start a worker by calling: Orion.Worker.start_link(arg)
      # {Orion.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Orion.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
