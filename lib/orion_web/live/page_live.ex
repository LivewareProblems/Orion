defmodule OrionWeb.PageLive do
  use OrionWeb, :live_view

  alias Orion.MatchSpec
  alias DogSketch.SimpleDog

  @impl true
  def mount(_params, _session, socket) do
    empty_dd = DogSketch.SimpleDog.new()
    scale = "Linear"

    quantile_data = formatted_time_series([], empty_dd, scale)

    data = %{
      match_spec: %MatchSpec{},
      fake_data: false,
      quantile_data: Jason.encode!(quantile_data),
      quantile_data_raw: quantile_data,
      scale: Jason.encode!(scale),
      pause_state: nil,
      ddsketch: empty_dd
    }

    {:ok, assign(socket, data)}
  end

  @impl true
  def handle_event("query_submit", %{"match_spec" => query}, socket) do
    fake_data = query["fake_data"] == "true"
    scale = "Linear"

    # need to deal with this better?
    quantile_data = formatted_time_series([], DogSketch.SimpleDog.new(), scale)

    data = %{
      match_spec: %MatchSpec{
        module_name: query["module_name"],
        function_name: query["function_name"],
        arity: query["arity"]
      },
      fake_data: fake_data,
      quantile_data: Jason.encode!(quantile_data),
      quantile_data_raw: quantile_data,
      scale: Jason.encode!(scale),
      pause_state: :running,
      ddsketch: DogSketch.SimpleDog.new()
    }

    Process.send_after(self(), :update_data, 1_000)
    socket = assign(socket, data)

    {:noreply, socket}
  end

  @impl true
  def handle_event("start_pause_submit", _, socket) do
    socket =
      case socket.assigns.pause_state do
        :paused ->
          :running
          empty_dd = DogSketch.SimpleDog.new()

          quantile_data = formatted_time_series([], empty_dd, "Linear")

          data = %{
            quantile_data: Jason.encode!(quantile_data),
            quantile_data_raw: quantile_data,
            pause_state: :running,
            ddsketch: empty_dd
          }

          Process.send_after(self(), :update_data, 1_000)

          assign(socket, data)

        :running ->
          assign(socket, :pause_state, :paused)

        _ ->
          socket
      end

    {:noreply, socket}
  end

  @five_minute_in_sec 5 * 60

  @impl true
  def handle_info(:update_data, socket) do
    if socket.assigns.pause_state == :running do
      Process.send_after(self(), :update_data, 1_000)
    end

    sketch =
      if socket.assigns.fake_data do
        get_fake_data()
      else
        socket.assigns.ddsketch
      end

    quantile_data = formatted_time_series(socket.assigns.quantile_data_raw, sketch, "Linear")

    data = %{
      quantile_data: Jason.encode!(quantile_data),
      quantile_data_raw: quantile_data
    }

    socket = assign(socket, data)
    {:noreply, socket}
  end

  @impl true
  def handle_info({:ddsketch, data}, socket) do
    new_ddsketch = DogSketch.SimpleDog.merge(data, socket.assigns.ddksetch)
    {:noreply, assign(socket, :ddsketch, new_ddsketch)}
  end

  defp get_fake_data() do
    Enum.reduce(1..100, SimpleDog.new(), fn _x, acc ->
      SimpleDog.insert(acc, :rand.uniform(1_000))
    end)
  end

  # thx derek <3
  # https://github.com/spawnfest/beamwork

  defp formatted_time_series([], _sketch, "Linear") do
    end_ts = System.os_time(:second)

    start_ts =
      DateTime.utc_now()
      |> DateTime.add(-@five_minute_in_sec, :second)
      |> DateTime.to_unix(:second)

    keys = start_ts..end_ts

    [
      Enum.map(keys, fn x -> x end),
      Enum.map(keys, fn _x -> 0 end),
      Enum.map(keys, fn _x -> 0 end),
      Enum.map(keys, fn _x -> 0 end),
      Enum.map(keys, fn _x -> 0 end)
    ]
  end

  defp formatted_time_series(old_data, data, "Linear") do
    [timestamps, quantile99, quantile90, quantile50, count] = old_data

    [
      tl(timestamps) ++ [System.os_time(:second)],
      tl(quantile99) ++ [get_quantile(data, 0.99)],
      tl(quantile90) ++ [get_quantile(data, 0.90)],
      tl(quantile50) ++ [get_quantile(data, 0.50)],
      tl(count) ++ [data |> SimpleDog.count() |> ceil()]
    ]
  end

  defp get_quantile(data, quantile) do
    SimpleDog.quantile(data, quantile) |> ceil()
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
