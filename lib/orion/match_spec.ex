defmodule Orion.MatchSpec do
  defstruct [:module_name, :function_name, :arity]

  def mfa(%Orion.MatchSpec{module_name: mod, function_name: fun, arity: arity}) do
    {String.to_atom(mod), String.to_atom(fun), arity}
  end
end
