defmodule OrionWeb.PageLive do
  use OrionWeb, :live_view

  alias Orion.MatchSpec

  @moduledoc """
  This is the central LiveView for the Orion UI.

  It handles the form to pass a matchspec, store then in the Orion.MatchSpecDB,
  then start the chart as needed by passing the ref to that line to the chart liveview
  in the sessions.

  It also handles pause/start

  TODO: change this, to allow multiple users at once

  """

  @impl true
  def mount(_params, _session, socket) do
    session_id = :crypto.strong_rand_bytes(20) |> Base.encode64()

    socket =
      socket
      |> assign_new(:chart_list, fn -> [] end)
      |> assign_new(:pause_state, fn -> :waiting end)
      |> assign_new(:form_value, fn ->
        %{
          module: "",
          function: "",
          arity: 0,
          fake: "false",
          self: "false"
        }
      end)
      |> assign_new(:current_key, fn -> 1 end)
      |> assign_new(:session_id, fn -> session_id end)

    {:ok, socket}
  end

  @impl true
  def handle_event("query_validate", %{"match_spec" => query}, socket) do
    socket =
      assign(socket, %{
        form_value: %{
          module: query["module_name"],
          function: query["function_name"],
          arity: query["arity"],
          fake: query["fake_data"],
          self: query["self_profile"]
        }
      })

    {:noreply, socket}
  end

  @impl true
  def handle_event("query_submit", %{"match_spec" => query}, socket) do
    new_match_spec = %MatchSpec{
      module_name: query["module_name"],
      function_name: query["function_name"],
      arity: query["arity"]
    }

    new_pause_state =
      case socket.assigns.pause_state do
        :waiting -> :running
        status -> status
      end

    session =
      Orion.MatchSpecStore.new(socket.assigns.current_key, new_match_spec, %{
        self_profile: query["self_profile"] == "true",
        fake_data: query["fake_data"] == "true",
        start_pause_status: new_pause_state,
        id: socket.assigns.session_id
      })

    data = %{
      match_spec: new_match_spec,
      chart_list: [
        %{
          name:
            "#{new_match_spec.module_name}-#{new_match_spec.function_name}-#{new_match_spec.arity}",
          key: socket.assigns.current_key,
          session: session
        }
        | socket.assigns.chart_list
      ],
      form_value: %{
        module: "",
        function: "",
        arity: 0,
        fake: "false",
        self: "false"
      },
      current_key: socket.assigns.current_key + 1,
      pause_state: new_pause_state
    }

    socket = assign(socket, data)

    {:noreply, socket}
  end

  @impl true
  def handle_event("start_pause_submit", _, socket) do
    # we use a Map get because there may be _no_ :pause_state state, as we initialise it lazily.
    socket =
      case socket.assigns.pause_state do
        :paused ->
          Orion.SessionPubsub.dispatch(socket.assigns.session_id, :start)

          assign(socket, :pause_state, :running)

        :running ->
          Orion.SessionPubsub.dispatch(socket.assigns.session_id, :pause)
          assign(socket, :pause_state, :paused)

        _ ->
          socket
      end

    {:noreply, socket}
  end

  @impl true
  def handle_info({:remove, key}, socket) do
    chart_list = Enum.reject(socket.assigns.chart_list, fn map -> map.key == key end)

    {:noreply, assign(socket, :chart_list, chart_list)}
  end

  def pause_state_text(atom) do
    case atom do
      :paused ->
        "Start"

      :running ->
        "Pause"

      _ ->
        "Start/Pause"
    end
  end
end
