defmodule Orion.MatchSpecDB do
  alias Orion.MatchSpec

  @type key :: integer()
  @type ms_options :: %{
          self_profile: boolean(),
          fake_data: boolean(),
          pause_state: :running | :paused
        }

  def init() do
    :ets.new(__MODULE__, [:named_table])
  end

  @spec new(key(), MatchSpec.t()) :: boolean()
  def new(
        key,
        match_spec,
        ms_options \\ %{self_profile: false, fake_data: false, pause_state: :running}
      ) do
    :ets.insert(__MODULE__, {key, match_spec, ms_options})
  end

  @spec get(key()) :: %{match_spec: MatchSpec.t(), ms_options: ms_options()}
  def get(key) do
    [{^key, match_spec, ms_options}] = :ets.lookup(__MODULE__, key)
    %{match_spec: match_spec, ms_options: ms_options}
  end
end
