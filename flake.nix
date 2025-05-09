{
  description = "Jekyll development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        pythonEnv = pkgs.python3.withPackages (ps: with ps; [
          jupyter
          numpy
          matplotlib
          pandas
          ipykernel
        ]);
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            ruby
            bundler
            jekyll
            pythonEnv
            git
            # Add any other dependencies you might need
          ];

          shellHook = ''
            echo "Jekyll development environment loaded"
            echo "Run 'bundle install' to install project dependencies"
            echo "Then run 'bundle exec jekyll serve' to start your site"
          '';
        };
      }
    );
}