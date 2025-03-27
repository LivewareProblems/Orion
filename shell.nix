{
  pkgs ? import <nixpkgs> { },
}:

with pkgs;
let
  elixir = beam.packages.erlang_27.elixir_1_17;
  node = nodejs_22;

in
mkShell {
  buildInputs = [
    elixir
    node
  ];

  LANG = "en_US.UTF-8";
}
