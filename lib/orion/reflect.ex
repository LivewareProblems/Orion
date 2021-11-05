defmodule Orion.Reflect do

  def defined_modules(partial)
      when partial == "" do
    all_defined_modules()
  end

  def defined_modules(partial) do
    all_defined_modules()
    |> Enum.filter(fn m -> String.downcase(to_string(m)) =~ String.downcase(partial) end)
  end

  def all_defined_modules() do
    :code.all_loaded()
    |> Enum.map(fn {module_name, _} -> module_name end)
    |> Enum.sort
  end

  def defined_functions(module_name)
      when module_name == nil or module_name == "" do
    []
  end

  def defined_functions(module_name) do
    module_name.__info__(:functions)
    |> Enum.map( fn{ func, arity } -> "#{func}/#{arity}" end)
  end

  def string_to_module(m)
      when binary_part(m,0, 7) == "Elixir."
    do
    get_module(m)
  end

  def string_to_module(m)
      when binary_part(m, 0, 1) == ":" do
    m
    |> String.slice(1..-1)
    |> get_module
  end

  def string_to_module(m) do
    get_module("Elixir.#{m}")
  end

  def get_module(s) do
    String.to_existing_atom(s)
  rescue
    ArgumentError -> nil
  end

end