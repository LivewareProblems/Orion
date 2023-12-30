defmodule OrionWeb.MeasurementLive do
  use OrionWeb, :live_view

  alias DogSketch.SimpleDog

  @impl true
  def render(assigns) do
    ~H"""
    <article class="w-full px-4 mx-auto flex flex-col justify-center gap-5">
      <div class="">
        <.form for={%{}} as={:remove} phx-submit="remove" class="float-left">
          <%= submit("Remove trace",
            class:
              "w-30 rounded py-2 px-2 my-3 bg-red-30 text-black focus:bg-red-80 focus:text-white hover:bg-red-80 hover:text-white"
          ) %>
        </.form>
        <h3 class="mt-4 text-center font-bold">
          <%= "#{@match_spec.module_name}.#{@match_spec.function_name}/#{@match_spec.arity}" %>
        </h3>
      </div>
      <div
        id={@chart_id}
        class="chart mx-auto h-full w-full text-black"
        data-quantile={@quantile_data}
        data-scale={@scale}
        phx-hook="ChartData"
        phx-update="ignore"
      >
      </div>
      <.slowest_block_form form={@slowest_form} />
      <.slowest_block_table id={@slowest_id} data_stream={@streams.slow_calls} />
    </article>
    """
  end

  @doc """
  Form to configure slowest values
  """
  attr :form, :any, required: true, doc: "form datastructure"

  def slowest_block_form(assigns) do
    ~H"""
    <div class="flex flex-col items-center">
      <.form
        for={@form}
        as={:slowest_start}
        phx-submit="slowest_start"
        phx-validate="slowest_validate"
        class="flex flex-row gap-2 items-baseline"
      >
        Tracing the next
        <.input field={@form[:limit]} classes="shrink basis-12 grow-0" />calls slower than
        <.input field={@form[:threshold]} classes="shrink basis-12 grow-0" />
        ms <%= PhoenixHTMLHelpers.Form.submit("Start Tracing",
          class: "rounded px-4 py-3 ml-4 bg-dusk-60 text-white hover:bg-dusk-50 hover:text-black"
        ) %>
      </.form>
    </div>
    """
  end

  @doc """
  Table to show slowest traces
  """
  attr :data_stream, :any, required: true, doc: "stream of function to table"
  attr :id, :string, required: true, doc: "the dom id of the stream"

  def slowest_block_table(assigns) do
    ~H"""
    <table>
      <thead>
        <tr>
          <th>Time in ms</th>
          <th>Arguments list</th>
          <th>Returns</th>
        </tr>
      </thead>
      <tbody id={@id} phx-update="stream">
        <tr :for={{dom_id, trace} <- @data_stream} id={dom_id}>
          <td><%= trace.time %></td>
          <td><%= inspect(trace.args) %></td>
          <td><%= inspect(trace.result) %></td>
        </tr>
      </tbody>
    </table>
    """
  end

  @impl true
  def mount(_params, %{"key" => session}, socket) do
    empty_dd = SimpleDog.new()
    scale = "Linear"

    quantile_data = formatted_time_series([], empty_dd, scale)

    %{
      match_spec: match_spec,
      ms_options: %{
        self_profile: self_profile,
        fake_data: fake,
        start_pause_status: pause_state,
        id: pubsub_id
      }
    } = Orion.MatchSpecStore.get(session)

    Orion.SessionPubsub.register(pubsub_id)

    socket =
      socket
      |> assign(%{
        quantile_data: Jason.encode!(quantile_data),
        quantile_data_raw: quantile_data,
        scale: Jason.encode!(scale),
        pause_state: pause_state,
        ddsketch: empty_dd,
        fake_data: fake,
        match_spec: match_spec,
        chart_id: "livechart-#{socket.id}",
        self_profile: self_profile,
        slowest_form: %Orion.Schemas.SlowestForm{} |> Ecto.Changeset.change() |> to_form(),
        slowest_data: %Orion.Schemas.SlowestForm{},
        slowest_id: "slowest-table-#{socket.id}"
      })
      |> stream(:slow_calls, [], reset: true)
      |> assign(:count_slower, 0)

    Process.send_after(self(), :update_data, 1_000)

    unless fake do
      OrionCollector.start_all_node_tracers(
        Orion.MatchSpec.mfa(match_spec),
        self_profile,
        pause_state
      )
    end

    {:ok, socket, layout: false}
  end

  @impl true
  def handle_event("slowest_validate", %{"slowest_form" => slowest_form_params}, socket) do
    changeset =
      socket.assigns.slowest_data
      |> Orion.Schemas.SlowestForm.changeset(slowest_form_params)
      |> Map.put(:action, :validate)
      |> to_form()

    assign(socket, :slowest_form, changeset)
  end

  @impl true
  def handle_event(
        "slowest_start",
        %{"slowest_form" => slowest_form_params},
        socket
      ) do
    changeset =
      socket.assigns.slowest_data
      |> Orion.Schemas.SlowestForm.changeset(slowest_form_params)

    with {:ok, data} <-
           Ecto.Changeset.apply_action(changeset, :update) do
      unless socket.assigns.fake_data do
        OrionCollector.capture_all_nodes_slowest_calls(
          Orion.MatchSpec.mfa(socket.assigns.match_spec),
          socket.assigns.self_profile,
          System.convert_time_unit(data.threshold, :millisecond, :microsecond)
        )
      end

      slowest_data = %Orion.Schemas.SlowestForm{threshold: data.threshold, limit: data.limit}

      socket =
        socket
        |> stream(:slow_calls, [], reset: true)
        |> assign(:count_slower, 0)
        |> assign(:slowest_form, to_form(Orion.Schemas.SlowestForm.changeset(slowest_data, %{})))
        |> assign(:slowest_data, slowest_data)

      {:noreply, socket}
    else
      {:error, changeset} ->
        assign(socket, :slowest_form, to_form(changeset))
    end
  end

  @impl true
  def handle_event("remove", _, socket) do
    send(socket.parent_pid, {:remove, socket.id})
    {:noreply, socket}
  end

  # Every tick, restart the timer, format the data in the ddsketch and push it
  # to the client. Then reset the ddsketch.
  # If fake data is wanted, it is generated now
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
      quantile_data_raw: quantile_data,
      ddsketch: DogSketch.SimpleDog.new()
    }

    socket = assign(socket, data)
    {:noreply, socket}
  end

  # Receive a ddsketch from a tracer, merge it in the current state
  @impl true
  def handle_info({:ddsketch, data}, socket) do
    new_ddsketch = DogSketch.SimpleDog.merge(data, socket.assigns.ddsketch)

    {:noreply, assign(socket, :ddsketch, new_ddsketch)}
  end

  # Receive a start message
  @impl true
  def handle_info({:broadcast, :start}, socket) do
    Process.send_after(self(), :update_data, 1_000)

    {:noreply, assign(socket, :pause_state, :running)}
  end

  # Receive a pause message
  @impl true
  def handle_info({:broadcast, :pause}, socket) do
    {:noreply, assign(socket, :pause_state, :paused)}
  end

  def handle_info(%OrionCollector.TimingMessage{} = msg, socket) do
    socket =
      if msg.slowest_than == socket.assigns.slowest_data.threshold do
        new_count = socket.assigns.count_slower + 1

        if new_count == socket.assigns.slowest_data.limit do
          OrionCollector.stop_all_nodes_slowest_calls(
            Orion.MatchSpec.mfa(socket.assigns.match_spec),
            socket.assigns.self_profile
          )
        end

        if new_count <= socket.assigns.slowest_data.limit do
          socket
          |> assign(:count_slower, new_count)
          |> stream_insert(:slow_calls, %{
            id: "#{socket.id}-#{socket.assigns.count_slower}",
            args: msg.args,
            time: msg.time / 1_000,
            result: msg.result
          })
        else
          socket
        end
      end

    {:noreply, socket}
  end

  # -- UTILS --
  @one_minute_in_sec 60

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
