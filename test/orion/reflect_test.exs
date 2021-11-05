defmodule Orion.ReflectTest do

  alias Orion.Reflect
  use ExUnit.Case

  defmodule MyTestModule do
    def my_single_function() do
      "nothing"
    end
  end

  describe "reflect" do
    test "lists defined modules" do
      modules = Reflect.all_defined_modules()
      assert length(modules) > 0
    end

    test "filters defined modules by partial name" do
      assert length(Reflect.defined_modules("MyTestModule")) == 1
    end

    test "converts string to module without prefix" do
      assert Enum == Reflect.string_to_module("Enum")
    end

    test "converts string to module with Elixir prefix" do
      assert Stream == Reflect.string_to_module("Elixir.Stream")
    end

    test "converts string to module with colon" do
      assert :erlang == Reflect.string_to_module(":erlang")
    end

    test "lists all functions" do
      assert ["my_single_function/0"] == Reflect.defined_functions(Orion.ReflectTest.MyTestModule)
    end

  end

end
