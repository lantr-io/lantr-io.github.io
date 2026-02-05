{
  description = "lantr-io.github.io";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.11";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    { self
    , flake-utils
    , nixpkgs
    , ...
    } @ inputs:
    (flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      rec {
        devShell = pkgs.mkShell {
          buildInputs = [ pkgs.bashInteractive ];
          packages = with pkgs; [
            git
            nodejs
            gh
          ];
        };
      })
    );
}
