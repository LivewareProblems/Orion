defmodule Orion.MatchSpecTest do

  alias Orion.MatchSpec
  use ExUnit.Case

  describe "mfa" do
    test "works with simple module, function, and arity" do
      ms = %MatchSpec{arity: "4", function_name: "my_func", module_name: "SomeModuleName"}
      assert { SomeModuleName, :my_func, 4 } == MatchSpec.mfa(ms)
    end

    test "works with lowercase module" do
      ms = %MatchSpec{arity: "4", function_name: "my_func", module_name: "some_module"}
      assert { :some_module, :my_func, 4 } == MatchSpec.mfa(ms)
    end

    test "accepts integer arity" do
      ms = %MatchSpec{arity: 4, function_name: "my_func", module_name: "some_module"}
      assert { :some_module, :my_func, 4 } == MatchSpec.mfa(ms)
    end

    test "returns nil with empty input" do
      assert nil == MatchSpec.mfa(%MatchSpec{})
    end

  end

end