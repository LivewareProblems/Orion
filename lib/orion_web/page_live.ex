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
  def render(assigns) do
    ~H"""
    <header class="m-8 max-2-screen-xl w-11/12 mx-auto text-4xl text-center font-bold">
      <a href="https://github.com/LivewareProblems/Orion" target="_blank"> Orion </a>
    </header>
    <section class="mx-auto m-4 rounded-lg max-w-screen-xl min-w-sm w-11/12" id="trace-form">
      <div class="flex flex-row justify-evenly">
        <.form
          for={%{}}
          as={:start_pause}
          phx-submit="start_pause_submit"
          class="self-stretch flex flex-row"
        >
          <%= submit(pause_state_text(@pause_state),
            class:
              "self-end w-30 rounded py-2 px-3 mr-3 mb-4 bg-teal-60 text-white hover:bg-dusk-50 hover:text-black"
          ) %>
        </.form>

        <.form
          for={@match_spec_form}
          phx-submit="query_submit"
          phx-change="query_validate"
          class="flex flex-row justify-between flex-wrap grow gap-3"
        >
          <.input type="text" field={@match_spec_form[:module]} label="Module" />
          <.input type="text" field={@match_spec_form[:function]} label="Function" />
          <.input type="text" field={@match_spec_form[:arity]} label="Arity" />

          <div :if={@fake_data} class="flex flex-col flex-grow">
            <.input type="checkbox" field={@match_spec_form[:fake]} label="Fake?" />
          </div>

          <%= submit("Run",
            "phx-disable-with": "Setting up Trace...",
            class:
              "self-end rounded py-3 px-4 mt-3 mb-4 bg-dusk-60 text-white hover:bg-dusk-50 hover:text-black"
          ) %>
        </.form>
      </div>
    </section>

    <section
      id="chart-list"
      class="mx-auto m-4 rounded-lg max-w-screen-xl min-w-sm w-11/12 p-2"
      phx-update="stream"
    >
      <%= for {id, %{session: session}} <- @streams.charts do %>
        <%= live_render(@socket, OrionWeb.MeasurementLive,
          id: id,
          session: %{"key" => session}
        ) %>
      <% end %>
    </section>
    """
  end

  @impl true
  def mount(_params, session, socket) do
    session_id = :crypto.strong_rand_bytes(20) |> Base.encode64()

    socket =
      socket
      |> stream(:charts, [])
      |> assign_new(:pause_state, fn -> :waiting end)
      |> assign_new(:match_spec_form, fn ->
        to_form(
          %{
            "module" => "",
            "function" => "",
            "arity" => 0,
            "fake" => "false"
          },
          as: :match_spec
        )
      end)
      |> assign_new(:current_key, fn -> 1 end)
      |> assign_new(:session_id, fn -> session_id end)
      |> assign(:self_profile, Map.get(session, "self_profile", true))
      |> assign(:fake_data, Map.get(session, "fake_data", false))

    {:ok, socket}
  end

  @impl true
  def handle_event("query_validate", %{"match_spec" => query}, socket) do
    socket = assign(socket, match_spec_form: to_form(query, as: :match_spec))

    {:noreply, socket}
  end

  @impl true
  def handle_event("query_submit", %{"match_spec" => query}, socket) do
    new_match_spec = %MatchSpec{
      module_name: query["module"],
      function_name: query["function"],
      arity: query["arity"]
    }

    new_pause_state =
      case socket.assigns.pause_state do
        :waiting -> :running
        status -> status
      end

    session =
      Orion.MatchSpecStore.new(socket.assigns.current_key, new_match_spec, %{
        self_profile: socket.assigns.self_profile,
        fake_data: query["fake_data"] == "true",
        start_pause_status: new_pause_state,
        id: socket.assigns.session_id
      })

    data = %{
      match_spec: new_match_spec,
      match_spec_form:
        to_form(
          %{
            "module" => "",
            "function" => "",
            "arity" => 0,
            "fake" => "false"
          },
          as: :match_spec
        ),
      current_key: socket.assigns.current_key + 1,
      pause_state: new_pause_state
    }

    socket =
      socket
      |> assign(data)
      |> stream_insert(
        :charts,
        %{
          id:
            chart_id(
              "#{new_match_spec.module_name}-#{new_match_spec.function_name}-#{new_match_spec.arity}",
              socket.assigns.current_key
            ),
          session: session
        },
        at: 0
      )

    {:noreply, socket}
  end

  @impl true
  def handle_event("start_pause_submit", _, socket) do
    # we use a Map get because there may be _no_ :pause_state state, as we initialise it lazily.
    socket =
      case socket.assigns.pause_state do
        :paused ->
          OrionCollector.restart_all_node_tracers(socket.assigns.self_profile)
          Orion.SessionPubsub.dispatch(socket.assigns.session_id, :start)

          assign(socket, :pause_state, :running)

        :running ->
          OrionCollector.pause_all_node_tracers(socket.assigns.self_profile)
          Orion.SessionPubsub.dispatch(socket.assigns.session_id, :pause)
          assign(socket, :pause_state, :paused)

        _ ->
          socket
      end

    {:noreply, socket}
  end

  @impl true
  def handle_info({:remove, id}, socket) do
    socket = stream_delete_by_dom_id(socket, :charts, id)
    {:noreply, socket}
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

  defp chart_id(name, key) do
    "measurement-#{name}-#{key}"
  end
end
