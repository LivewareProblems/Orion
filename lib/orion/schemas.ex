defmodule Orion.Schemas do
  defmodule SlowestForm do
    use Ecto.Schema

    schema "slowest_form" do
      field(:threshold, :integer, default: 500)
      field(:limit, :integer, default: 5)
    end
  end
end
