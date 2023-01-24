defmodule Orion.MatchSpec do
  defstruct [:module_name, :function_name, :arity]
  @type t :: %__MODULE__{module_name: atom(), function_name: atom, arity: integer()}

  def mfa(%Orion.MatchSpec{module_name: mod, function_name: fun, arity: arity})
      when is_binary(mod) and is_binary(fun) and is_binary(arity) do
    first = String.first(mod)

    if String.upcase(first) == first do
      {Module.concat([mod]), String.to_atom(fun), String.to_integer(arity)}
    else
      {String.to_atom(mod), String.to_atom(fun), String.to_integer(arity)}
    end
  end

  def mfa(%Orion.MatchSpec{}) do
    nil
  end

  def to_phxlv_session(%__MODULE__{} = ms) do
    %{
      "module_name" => ms.module_name,
      "function_name" => ms.function_name,
      "arity" => ms.arity
    }
  end

  def from_phxlv_session(session_ms) do
    mfa(%Orion.MatchSpec{
      module_name: session_ms["module_name"],
      function_name: session_ms["function_name"],
      arity: session_ms["arity"]
    })
  end
end
