defmodule OrionWeb.LayoutView do
  @moduledoc false
  use OrionWeb, :html

  embed_templates("layouts/*")

  def render("home.html", assigns), do: home(assigns)

  defp csp_nonce(conn, type) when type in [:script, :style, :img] do
    csp_nonce_assign_key = conn.private.csp_nonce_assign_key[type]
    conn.assigns[csp_nonce_assign_key]
  end

  def live_socket_path(conn) do
    [Enum.map(conn.script_name, &["/" | &1]) | conn.private.live_socket_path]
  end

  # TODO: Remove this and the conditional on Phoenix v1.7+
  @compile {:no_warn_undefined, Phoenix.VerifiedRoutes}

  defp asset_path(conn, asset) when asset in [:css, :js] do
    hash = OrionWeb.Assets.current_hash(asset)

    if function_exported?(conn.private.phoenix_router, :__live_orion_prefix__, 0) do
      prefix = conn.private.phoenix_router.__live_orion_prefix__()

      Phoenix.VerifiedRoutes.unverified_path(
        conn,
        conn.private.phoenix_router,
        "#{prefix}/#{asset}-#{hash}"
      )
    else
      apply(
        conn.private.phoenix_router.__helpers__(),
        :live_orion_asset_path,
        [conn, asset, hash]
      )
    end
  end
end
