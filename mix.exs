defmodule Orion.MixProject do
  use Mix.Project

  @version "1.0.5"

  def project do
    [
      app: :orion,
      version: @version,
      elixir: "~> 1.14",
      elixirc_paths: elixirc_paths(Mix.env()),
      deps: deps(),
      start_permanent: Mix.env() == :prod,
      aliases: aliases(),
      name: "Orion",
      description: "Dynamic Distributed Performance tracing for the BEAM",
      package: package(),
      docs: docs()
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
      {:phoenix_live_view, "~> 1.0"},
      {:phoenix_html_helpers, "~> 1.0"},
      {:dog_sketch, "~> 0.1.2"},
      {:orion_collector, "~> 1.2.0"},
      {:jason, "~> 1.0"},

      # dev and test
      {:floki, ">= 0.30.0", only: :test},
      {:phoenix_live_reload, "~> 1.2", only: :dev},
      {:plug_cowboy, "~> 2.0", only: :dev},
      {:esbuild, "~> 0.9.0", only: [:dev, :assets]},
      {:ex_doc, ">= 0.0.0", only: :dev, runtime: false}
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
      setup: ["deps.get", "cmd  --cd assets npm install"],
      dev: "run --no-halt dev.exs",
      "assets.build": [
        "cmd  --cd assets npx postcss css/app.css --env=production -m --output=../dist/css/app.css",
        "esbuild default --minify"
      ]
    ]
  end

  defp docs do
    [
      main: "Orion",
      source_ref: "v#{@version}",
      source_url: "https://github.com/LivewareProblems/Orion"
    ]
  end

  defp package do
    [
      maintainers: ["Thomas Depierre"],
      licenses: ["MIT"],
      links: %{github: "https://github.com/LivewareProblems/Orion"},
      files: ~w(dist lib CHANGELOG.md LICENSE.md mix.exs README.md)
    ]
  end
end
