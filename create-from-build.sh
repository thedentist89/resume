#!env bash

# Run npm build on another branch, then run this to copy new files
rm -rf precache-*.js $(ls build)
mv build/* .
rmdir build
