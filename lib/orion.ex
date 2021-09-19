defmodule Orion do
  @moduledoc """
  Orion keeps the contexts that define your domain
  and business logic.

  Contexts are also responsible for managing your data, regardless
  if it comes from the database, an external API or others.
  """

  def trace(spec) do
    t = Orion.Tracer.start_link()
    :erlang.trace(:processes, true, [:send, :timestamp, {:tracer, t}])
    {:ok, t}
  end
end
