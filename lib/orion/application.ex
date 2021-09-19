defmodule Orion.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      OrionWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: Orion.PubSub},
      # Start the Endpoint (http/https)
      OrionWeb.Endpoint,
      # Start a worker by calling: Orion.Worker.start_link(arg)
      # {Orion.Worker, arg}
      {DynamicSupervisor, strategy: :one_for_one, name: Orion.TracerSupervisor}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Orion.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    OrionWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
