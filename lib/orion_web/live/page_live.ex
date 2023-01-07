defmodule OrionWeb.PageLive do
  use OrionWeb, :live_view

  alias Orion.MatchSpec

  @impl true
  def mount(_params, _session, socket) do
    if connected?(socket) do
      Orion.MatchSpecDB.init()
    end

    data = %{
      chart_list: [],
      pause_state: nil,
      form_value: %{
        module: "",
        function: "",
        arity: 0,
        fake: "false",
        self: "false"
      },
      current_key: 1
    }

    {:ok, assign(socket, data)}
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
    # old_mfa = Orion.MatchSpec.mfa(socket.assigns.match_spec)
    # OrionCollector.Tracer.pause_trace(old_mfa, socket.assigns.self_profile)

    # :pg.get_members({Orion, old_mfa})
    # |> Enum.map(fn pid -> OrionCollector.Tracer.stop(pid) end)

    new_match_spec = %MatchSpec{
      module_name: query["module_name"],
      function_name: query["function_name"],
      arity: query["arity"]
    }

    Orion.MatchSpecDB.new(socket.assigns.current_key, new_match_spec, %{
      self_profile: query["self_profile"] == "true",
      fake_data: query["fake_data"] == "true"
    })

    data = %{
      match_spec: new_match_spec,
      chart_list: [
        %{
          name:
            "#{new_match_spec.module_name}-#{new_match_spec.function_name}-#{new_match_spec.arity}",
          key: socket.assigns.current_key
        }
        | socket.assigns.chart_list
      ],
      pause_state: :running,
      form_value: %{
        module: "",
        function: "",
        arity: 0,
        fake: "false",
        self: "false"
      },
      current_key: socket.assigns.current_key + 1
    }

    socket = assign(socket, data)

    {:noreply, socket}
  end

  @impl true
  def handle_event("start_pause_submit", _, socket) do
    # TODO move this into the chart lv
    # socket =
    #   case socket.assigns.pause_state do
    #     :paused ->
    #       :running
    #       empty_dd = DogSketch.SimpleDog.new()

    #       quantile_data = formatted_time_series([], empty_dd, "Linear")

    #       data = %{
    #         quantile_data: Jason.encode!(quantile_data),
    #         quantile_data_raw: quantile_data,
    #         pause_state: :running,
    #         ddsketch: empty_dd
    #       }

    #       OrionCollector.Tracer.restart_trace(
    #         Orion.MatchSpec.mfa(socket.assigns.match_spec),
    #         socket.assigns.self_profile
    #       )

    #       Process.send_after(self(), :update_data, 1_000)

    #       assign(socket, data)

    #     :running ->
    #       OrionCollector.Tracer.pause_trace(
    #         Orion.MatchSpec.mfa(socket.assigns.match_spec),
    #         socket.assigns.self_profile
    #       )

    #       assign(socket, :pause_state, :paused)

    #     _ ->
    #       socket
    #   end

    {:noreply, socket}
  end

  @one_minute_in_sec 60

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
