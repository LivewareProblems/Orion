defmodule Orion.MixProject do
  use Mix.Project

  def project do
    [
      app: :orion,
      version: "0.1.0",
      elixir: "~> 1.12",
      elixirc_paths: elixirc_paths(Mix.env()),
      compilers: Mix.compilers(),
      start_permanent: Mix.env() == :prod,
      aliases: aliases(),
      deps: deps()
    ]
  end

  # Configuration for the OTP application.
  #
  # Type `mix help compile.app` for more information.
  def application do
    [
      mod: {Orion.Application, []},
      extra_applications: [:logger, :runtime_tools]
    ]
  end

  # Specifies which paths to compile per environment.
  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_), do: ["lib"]

  # Specifies your project dependencies.
  #
  # Type `mix help deps` for examples and options.
  defp deps do
    [
      # Actual deps
      {:phoenix_live_view, "~> 0.18.0"},
      {:dog_sketch, "~> 0.1.2"},
      {:orion_collector, git: "git@github.com:DianaOlympos/orion_collector.git", ref: "main"},

      # dev and test
      {:floki, ">= 0.30.0", only: :test},
      {:phoenix_live_reload, "~> 1.2", only: :dev},
      {:jason, "~> 1.0", only: [:dev, :test, :docs]},
      {:plug_cowboy, "~> 2.0", only: :dev}
    ]
  end

  # Aliases are shortcuts or tasks specific to the current project.
  # For example, to install project dependencies and perform other setup tasks, run:
  #
  #     $ mix setup
  #
  # See the documentation for `Mix` for more info on aliases.
  defp aliases do
    [
      setup: ["deps.get", "cmd npm install --cwd assets"],
      dev: "run --no-halt dev.exs"
    ]
  end
end
