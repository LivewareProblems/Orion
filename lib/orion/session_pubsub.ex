defmodule Orion.SessionPubsub do
  @moduledoc """
  A Registry based pubsub that works per session. Allows all the LV of a session to talk together.
  """

  def init() do
    Registry.start_link(keys: :duplicate, name: __MODULE__)
  end

  def register(session, value \\ {}) do
    Registry.register(__MODULE__, session, value)
  end

  def dispatch(session, message) do
    Registry.dispatch(__MODULE__, session, fn charts ->
      for {pid, _} <- charts do
        send(pid, {:broadcast, message})
      end
    end)
  end
end
