defmodule Orion.Tracer do
  use GenServer

  def start_link(init \\ []) do
    GenServer.start_link(__MODULE__, init)
  end

  @impl true
  def init(initial_state) do
    # :erlang.trace(:all, true, [:call, :arity, :timestamp])
    {:ok, initial_state}
  end

  @impl true
  def handle_call(:get_events, _from, state) do
    {:reply, state, []}
  end

  @impl true
  def handle_info(
        {:trace_ts, trace_pid, :call, _mfa, _TraceTerm, start_time},
        state = %{call_depth: cd_map, time_stored: time_stored_map}
      ) do
    cd = Map.get(cd_map, trace_pid, 0)
    new_cd_map = Map.put(cd_map, trace_pid, cd + 1)

    new_ts_map =
      if cd == 0 do
        Map.put(time_stored_map, {trace_pid, cd + 1}, start_time)
      else
        time_stored_map
      end

    new_state =
      state
      |> Map.put(:call_depth, new_cd_map)
      |> Map.put(:time_stored, new_ts_map)

    {:noreply, new_state}
  end

  @accepted_return_tags [:return_from, :exception_from]

  @impl true
  def handle_info(
        {:trace_ts, trace_pid, return_tag, _mfa, _TraceTerm, end_time},
        state = %{call_depth: cd_map, time_stored: time_stored_map, ddsketch: ddsketch}
      )
      when return_tag in @accepted_return_tags do
    case Map.get(cd_map, trace_pid, 0) do
      0 ->
        {:noreply, state}

      1 ->
        new_cd_map = Map.delete(cd_map, trace_pid)
        {start_time, new_ts_map} = Map.pop(time_stored_map, {trace_pid, 1})

        call_time_micro = :timer.now_diff(end_time, start_time)
        call_time = System.convert_time_unit(call_time_micro, :microsecond, :millisecond)

        new_sketch = DogSketch.SimpleDog.insert(ddsketch, call_time)

        new_state =
          state
          |> Map.put(:call_depth, new_cd_map)
          |> Map.put(:time_stored, new_ts_map)
          |> Map.put(:ddsketch, new_sketch)

        {:noreply, new_state}

      cd when cd > 1 ->
        new_cd_map = Map.put(cd_map, trace_pid, cd - 1)

        {:noreply, Map.put(state, :call_depth, new_cd_map)}
    end
  end
end
