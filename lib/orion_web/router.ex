defmodule OrionWeb.Router do
  @moduledoc """
  Provides LiveView routing for Orion.
  """

  @doc """
  Define an Orion route.

  It expects the `path` Orion will be mounted at and a set of options

  All the Orion Pages will be under a live_session.

    ## Options
    * `:live_socket_path` - Configures the socket path. it must match the
      `socket "/live", Phoenix.LiveView.Socket` in your endpoint.

    * `:csp_nonce_assign_key` - an assign key to find the CSP nonce value used
      for assets. Supports either `atom()` or a map of type `%{optional(:img) =>
      atom(), optional(:script) => atom(), optional(:style) => atom()}`

    * `:on_mount` - Pass a list of `on_mount` hooks to live_session, like if you
      want to validate authentication with `:on_mount`. See [the
      phoenix_liveview
      docs](https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.Router.html#live_session/3)

    * `:live` - Configure options to inject into the Orion route

    * `:self_profile` - Configure if the tracing is applied to the node running Orion itself, default to true

    * `:fake_data` - Configure if the tracing form allow you to run with fake data, default to false

  ## Examples
      defmodule MyAppWeb.Router do
        use Phoenix.Router
        import OrionWeb.Router
        scope "/", MyAppWeb do
          pipe_through [:browser]
          live_orion "/orion",
            on_mount: {MyAppWeb.SomeHook, :admin}
        end
      end
  """

  defmacro live_orion(path, opts \\ []) do
    opts =
      if Macro.quoted_literal?(opts) do
        Macro.prewalk(opts, &expand_alias(&1, __CALLER__))
      else
        opts
      end

    scope =
      quote bind_quoted: binding() do
        scope path, alias: false, as: false do
          {session_name, session_opts, route_opts} = OrionWeb.Router.__options__(opts)

          import Phoenix.Router, only: [get: 4]
          import Phoenix.LiveView.Router, only: [live: 4, live_session: 3]

          # OrionWeb assets
          get "/css-:md5", OrionWeb.Assets, :css, as: :live_orion_asset
          get "/js-:md5", OrionWeb.Assets, :js, as: :live_orion_asset

          live_session session_name, session_opts do
            # All helpers are public contracts and cannot be changed
            live "/", OrionWeb.PageLive, :home, route_opts
          end
        end
      end

    # TODO: Remove check once we require Phoenix v1.7
    if Code.ensure_loaded?(Phoenix.VerifiedRoutes) do
      quote do
        unquote(scope)

        unless Module.get_attribute(__MODULE__, :live_orion_prefix) do
          @live_orion_prefix Phoenix.Router.scoped_path(__MODULE__, path)
          def __live_orion_prefix__, do: @live_orion_prefix
        else
          def __live_orion_prefix__, do: @live_orion_prefix
        end
      end
    else
      scope
    end
  end

  defp expand_alias({:__aliases__, _, _} = alias, env),
    do: Macro.expand(alias, %{env | function: {:live_orion, 2}})

  defp expand_alias(other, _env), do: other

  @doc false
  def __options__(options) do
    live_socket_path = Keyword.get(options, :live_socket_path, "/live")
    on_mount = Keyword.get(options, :on_mount, [])

    csp_nonce_assign_key =
      case options[:csp_nonce_assign_key] do
        nil -> nil
        key when is_atom(key) -> %{img: key, style: key, script: key}
        %{} = keys -> Map.take(keys, [:img, :style, :script])
      end

    self_profile = Keyword.get(options, :self_profile, true)
    fake_data = Keyword.get(options, :fake_data, false)

    session_args = [
      csp_nonce_assign_key,
      self_profile,
      fake_data
    ]

    {
      options[:live_session_name] || :orion,
      [
        session: {__MODULE__, :__session__, session_args},
        root_layout: {OrionWeb.LayoutView, :home},
        on_mount: on_mount
      ],
      [
        private: %{live_socket_path: live_socket_path, csp_nonce_assign_key: csp_nonce_assign_key},
        as: :orion
      ]
    }
  end

  @doc false
  def __session__(conn, csp_nonce_assign_key, self_profile, fake_data) do
    %{
      "self_profile" => self_profile,
      "fake_data" => fake_data,
      "csp_nonces" => %{
        img: conn.assigns[csp_nonce_assign_key[:img]],
        style: conn.assigns[csp_nonce_assign_key[:style]],
        script: conn.assigns[csp_nonce_assign_key[:script]]
      }
    }
  end
end
