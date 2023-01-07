defmodule Orion.MatchSpecDB do
  alias Orion.MatchSpec

  @type key :: integer()

  def init() do
    :ets.new(__MODULE__, [:named_table])
  end

  @spec new(key(), MatchSpec.t()) :: boolean()
  def new(key, match_spec) do
    :ets.insert(__MODULE__, {key, match_spec})
  end

  @spec get(key()) :: MatchSpec.t()
  def get(key) do
    [{^key, match_spec}] = :ets.lookup(__MODULE__, key)
    match_spec
  end
end
