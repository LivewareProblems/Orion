defmodule Orion.Tracer do
  use GenServer
  import Ex2ms

  def start_all_node_tracers(mfa, self) do
    if self do
      Orion.Tracer.start_tracer(mfa, self())
    end

    :erpc.multicall(list_nodes(), Orion.Tracer, :start_tracer, [mfa, self()], 5_000)
    :ok
  end

  def pause_trace(nil, _self) do
    :ok
  end

  def pause_trace(mfa, self) do
    if self do
      :erlang.trace_pattern(mfa, false, [])
    end

    :erpc.multicall(list_nodes(), :erlang, :trace_pattern, [mfa, false, []], 5_000)
  end

  def restart_trace(mfa, self) do
    if self do
      :erlang.trace_pattern(mfa, [match_spec()], [:local])
    end

    :erpc.multicall(
      list_nodes(),
      :erlang,
      :trace_pattern,
      [mfa, [match_spec()], [:local]],
      5_000
    )
  end

  def start_tracer(mfa, pid) do
    spec = {Orion.Tracer, [mfa, pid]}
    DynamicSupervisor.start_child(Orion.TracerSupervisor, spec)
  end

  def stop(pid) do
    GenServer.stop(pid, :normal, 5_000)
  end

  def start_link(init \\ []) do
    GenServer.start_link(__MODULE__, init)
  end

  def child_spec(args) do
    %{
      id: {Orion.Tracer, args},
      start: {Orion.Tracer, :start_link, [args]},
      restart: :transient
    }
  end

  @impl true
  def init([mfa, pid]) do
    :pg.join({Orion, mfa}, self())

    mon_ref = Process.monitor(pid)

    :erlang.trace_pattern(mfa, match_spec(), [:local])
    :erlang.trace(:all, true, [:call, :arity, :timestamp])
    Process.send_after(self(), :send_data, 500)

    initial_state = %{
      mfa: mfa,
      liveview_pid: pid,
      call_depth: %{},
      time_stored: %{},
      ddsketch: DogSketch.SimpleDog.new(),
      ref_mon: mon_ref
    }

    {:ok, initial_state}
  end

  @impl true
  def handle_info(
        {:trace_ts, trace_pid, :call, _mfa, start_time},
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

  @impl true
  def handle_info(:send_data, %{ddsketch: ddsketch, liveview_pid: liveview_pid} = state) do
    send(liveview_pid, {:ddsketch, ddsketch})
    Process.send_after(self(), :send_data, 500)

    {:noreply, Map.put(state, :ddsketch, DogSketch.SimpleDog.new())}
  end

  @impl true
  def handle_info({:DOWN, ref, :process, _object, _reason}, %{ref_mon: ref, mfa: mfa} = state) do
    :erlang.trace_pattern(mfa, false, [])
    {:stop, :normal, state}
  end

  defp match_spec() do
    fun do
      _ ->
        :return_trace
        :exception_trace
    end
  end

  defp list_nodes() do
    Node.list()
  end
end
