defmodule Orion.Schemas do
  defmodule SlowestForm do
    use Ecto.Schema
    import Ecto.Changeset

    schema "slowest_form" do
      field(:threshold, :integer, default: 500)
      field(:limit, :integer, default: 5)
    end

    def changeset(slowest_form, attr) do
      slowest_form
      |> cast(attr, [:threshold, :limit])
    end
  end
end
