defmodule OrionWeb.PageLive do
  use OrionWeb, :live_view

  alias Orion.MatchSpec

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, match_spec: %MatchSpec{})}
  end

  @impl true
  def handle_event("match_spec", %{"query" => ms}, socket) do
    socket =
      assign(socket, %{
        match_spec: %MatchSpec{
          module_name: ms[:module_name],
          function_name: ms[:function_name],
          arity: ms[:arity]
        }
      })

    {:noreplay, socket}
  end
end
