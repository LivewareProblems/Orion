defmodule Orion.Tracer do
  use GenServer

  def start_link(init \\ []) do
    GenServer.start_link(__MODULE__, init)
  end

  @impl true
  def init(initial_state) do
    {:ok, initial_state}
  end

  @impl true
  def handle_call(:get_events, _from, state) do
    {:reply, state, []}
  end

  # Dump everything received from tracing into the internal buffer
  @impl true
  def handle_info(msg, state) do
    {:noreply, state ++ msg}
  end
end
