defmodule Orion.MatchSpecStore do
  alias Orion.MatchSpec

  @type key :: integer()
  @type ms_options :: %{
          self_profile: boolean(),
          fake_data: boolean(),
          start_pause_status: :running | :paused,
          id: String.t()
        }
  @type session :: map()

  @spec new(key(), MatchSpec.t()) :: boolean()
  def new(
        key,
        match_spec,
        ms_options \\ %{
          self_profile: false,
          fake_data: false,
          start_pause_status: :running,
          id: "default"
        }
      ) do
    %{
      "ms" => MatchSpec.to_phxlv_session(match_spec),
      "key" => key,
      "options" => ms_options_to_phxlv_session(ms_options)
    }
  end

  @spec get(session()) :: %{match_spec: MatchSpec.t(), ms_options: ms_options(), key: key}
  def get(%{
        "ms" => match_spec,
        "key" => key,
        "options" => ms_options
      }) do
    %{
      match_spec: MatchSpec.from_phxlv_session(match_spec),
      ms_options: from_phxlv_to_ms_options(ms_options),
      key: key
    }
  end

  def ms_options_to_phxlv_session(%{
        self_profile: self,
        fake_data: fake,
        start_pause_status: state,
        id: id
      }) do
    %{
      "self_profile" => self,
      "fake_data" => fake,
      "pause_state" => state,
      "id" => id
    }
  end

  def from_phxlv_to_ms_options(%{
        "self_profile" => self,
        "fake_data" => fake,
        "pause_state" => state,
        "id" => id
      }) do
    %{
      self_profile: self,
      fake_data: fake,
      start_pause_status: state,
      id: id
    }
  end

  def string_to_boolean("true"), do: true
  def string_to_boolean("false"), do: false
  def string_to_boolean(_), do: "false"

  def string_to_state("running"), do: :running
  def string_to_state("paused"), do: :paused
  def string_to_state(_), do: :paused
end
