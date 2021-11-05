defmodule Orion.MatchSpec do
  defstruct [:module_name, :function_name, :arity]
  alias __MODULE__

  def mfa(%MatchSpec{module_name: mod, function_name: fun, arity: arity})
      when is_binary(mod) and mod != "" and is_binary(fun) and is_integer(arity) do
    first = String.first(mod)
    if String.upcase(first) == first do
      {Module.concat([mod]), String.to_atom(fun), arity}
    else
      {String.to_atom(mod), String.to_atom(fun), arity}
    end
  end

  def mfa(ms = %MatchSpec{module_name: mod, function_name: fun, arity: arity})
      when is_binary(mod) and is_binary(fun) and is_binary(arity) do
    mfa(Map.merge(ms, %{arity: String.to_integer(arity)}))
  end

  def mfa(%MatchSpec{}) do
    nil
  end
end
