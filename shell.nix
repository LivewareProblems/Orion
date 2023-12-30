{ pkgs ? import <nixpkgs> { } }:

with pkgs;
let
  elixir = beam.packages.erlangR26.elixir_1_15;
  node = nodejs_21;

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
