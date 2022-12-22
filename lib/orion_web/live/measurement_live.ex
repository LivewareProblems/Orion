defmodule OrionWeb.ChartLive do
  use OrionWeb, :live_view

  alias Orion.MatchSpec
  alias DogSketch.SimpleDog

  @impl true
  def render(assigns) do
    ~H"""
    <div class="w-full pt-4 px-4 mx-auto pb-4 flex flex-col justify-center">
      <h3 class="text-center"><%= "#{@match_spec.module_name}.#{@match_spec.function_name}/#{@match_spec.arity}" %> </h3>
      <div id="chart" class="mx-auto h-full w-full text-black px-20 py-2" data-quantile={@quantile_data} data-scale={@scale}
        phx-hook="ChartData" phx-update="ignore"></div>
    </div>
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    empty_dd = SimpleDog.new()
    scale = "Linear"

    quantile_data = formatted_time_series([], empty_dd, scale)

    data = %{
      match_spec: %MatchSpec{},
      fake_data: false,
      quantile_data: Jason.encode!(quantile_data),
      quantile_data_raw: quantile_data,
      scale: Jason.encode!(scale),
      pause_state: nil,
      ddsketch: empty_dd,
      self_profile: false
    }

    {:ok, assign(socket, data)}
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
