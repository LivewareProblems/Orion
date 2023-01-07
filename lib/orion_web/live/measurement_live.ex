defmodule OrionWeb.ChartLive do
  use OrionWeb, :live_view

  alias Orion.MatchSpec
  alias DogSketch.SimpleDog

  @impl true
  def render(assigns) do
    ~H"""
    <div class="w-full pt-4 px-4 mx-auto pb-4 flex flex-col justify-center">
      <h3 class="text-center">
        <%= "#{@match_spec.module_name}.#{@match_spec.function_name}/#{@match_spec.arity}" %>
      </h3>
      <div
        id={"livechart-#{@key}"}
        class="chart mx-auto h-full w-full text-black px-20 py-2"
        data-quantile={@quantile_data}
        data-scale={@scale}
        phx-hook="ChartData"
        phx-update="ignore"
      >
      </div>
    </div>
    """
  end

  @impl true
  def mount(_params, %{"key" => key}, socket) do
    empty_dd = SimpleDog.new()
    scale = "Linear"

    quantile_data = formatted_time_series([], empty_dd, scale)

    %{match_spec: match_spec, ms_options: %{self_profile: self_profile, fake_data: fake}} =
      Orion.MatchSpecDB.get(key)

    socket =
      socket
      |> assign(%{
        quantile_data: Jason.encode!(quantile_data),
        quantile_data_raw: quantile_data,
        scale: Jason.encode!(scale),
        pause_state: nil,
        ddsketch: empty_dd,
        fake_data: fake,
        self_profile: self_profile,
        match_spec: match_spec,
        key: key
      })

    if connected?(socket) do
      Process.send_after(self(), :update_data, 1_000)

      unless fake do
        OrionCollector.Tracer.start_all_node_tracers(
          Orion.MatchSpec.mfa(match_spec),
          self_profile
        )
      end
    end

    {:ok, socket}
  end

  @impl true
  def handle_info(:update_data, socket) do
    Process.send_after(self(), :update_data, 1_000)

    sketch =
      if socket.assigns.fake_data do
        get_fake_data()
      else
        socket.assigns.ddsketch
      end

    quantile_data = formatted_time_series(socket.assigns.quantile_data_raw, sketch, "Linear")

    data = %{
      quantile_data: Jason.encode!(quantile_data),
      quantile_data_raw: quantile_data,
      ddsketch: DogSketch.SimpleDog.new()
    }

    socket = assign(socket, data)
    {:noreply, socket}
  end

  @impl true
  def handle_info({:ddsketch, data}, socket) do
    new_ddsketch = DogSketch.SimpleDog.merge(data, socket.assigns.ddsketch)
    {:noreply, assign(socket, :ddsketch, new_ddsketch)}
  end

  @one_minute_in_sec 60

  defp get_fake_data() do
    Enum.reduce(1..100, SimpleDog.new(), fn _x, acc ->
      SimpleDog.insert(acc, :rand.uniform(1_000))
    end)
  end

  defp formatted_time_series([], _sketch, "Linear") do
    end_ts = System.os_time(:second)

    start_ts =
      DateTime.utc_now()
      |> DateTime.add(-@one_minute_in_sec, :second)
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
    case SimpleDog.quantile(data, quantile) do
      nil -> 0
      x -> x
    end
  end
end
