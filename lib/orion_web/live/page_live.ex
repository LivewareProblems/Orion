defmodule OrionWeb.PageLive do
  use OrionWeb, :live_view

  alias Orion.MatchSpec
  alias DogSketch.SimpleDog

  @impl true
  def mount(_params, _session, socket) do
    data = %{
      match_spec: %MatchSpec{},
      fake_data: false,
      quantile_data: "",
      scale: ""
    }

    {:ok, assign(socket, data)}
  end

  @impl true
  def handle_event("query_submit", %{"match_spec" => query}, socket) do
    fake_data = query["fake_data"] == "true"
    # need to deal with this better?
    quantile_data = formatted_time_series("Linear")

    scale = "Linear"

    data = %{
      match_spec: %MatchSpec{
        module_name: query["module_name"],
        function_name: query["function_name"],
        arity: query["arity"]
      },
      fake_data: fake_data,
      quantile_data: Jason.encode!(quantile_data),
      scale: Jason.encode!(scale)
    }

    socket = assign(socket, data)

    {:noreply, socket}
  end

  defp get_fake_data() do
    # fake some data
  end

  # thx derek <3
  # https://github.com/spawnfest/beamwork

  defp formatted_time_series("Linear") do
    data = get_fake_data()
    keys = Enum.map(data, fn {ts, _} -> ts end)
    min_ts = Enum.min(keys, fn -> 0 end)
    max_ts = Enum.max(keys, fn -> 0 end)

    keys = Enum.map(min_ts..max_ts, fn x -> x end)

    [
      keys,
      Enum.map(keys, fn ts ->
        get_quantile(data, ts, 0.99)
      end),
      Enum.map(keys, fn ts ->
        get_quantile(data, ts, 0.90)
      end),
      Enum.map(keys, fn ts ->
        get_quantile(data, ts, 0.50)
      end),
      Enum.map(keys, fn ts ->
        Map.get(data, ts, SimpleDog.new()) |> SimpleDog.count() |> ceil()
      end)
    ]
  end

  defp get_quantile(data, ts, quantile) do
    Map.get(data, ts, nil)
    |> case do
      nil ->
        nil

      sd ->
        val = SimpleDog.quantile(sd, quantile) |> ceil()
        val / 1000
    end
  end
end
