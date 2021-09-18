{ pkgs ? import <nixpkgs> { } }:

with pkgs;
let
  elixir = beam.packages.erlangR24.elixir_1_12;
  node = nodejs-slim-16_x;

in mkShell {
  buildInputs = [ elixir node yarn ] ++ lib.optionals stdenv.isDarwin
    (with darwin.apple_sdk.frameworks; [
      # For file_system on macO.S
      CoreFoundation
      CoreServices
      clang_8
    ]);

  # Fix GLIBC Locale
  LOCALE_ARCHIVE = lib.optionalString stdenv.isLinux
    "${pkgs.glibcLocales}/lib/locale/locale-archive";
  LANG = "en_US.UTF-8";

  ERL_INCLUDE_PATH = "${erlangR23}/lib/erlang/usr/include";
}
