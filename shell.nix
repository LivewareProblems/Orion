{ pkgs ? import <nixpkgs> { } }:

with pkgs;
let
  elixir = beam.packages.erlangR25.elixir_1_14;
  node = nodejs_20;

in mkShell {
  buildInputs = [ elixir node ] ++ lib.optionals stdenv.isDarwin
    (with darwin.apple_sdk.frameworks; [
      # For file_system on macO.S
      CoreFoundation
      CoreServices
      clang_9
    ]);

  LANG = "en_US.UTF-8";
}
