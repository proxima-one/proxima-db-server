#!/bin/sh


echo "Installing Dependencies..."
# Remove and install dependencies
rm -rf ./node_modules && rm yarn.lock && yarn install

## Update versioning of the server

## Check breaking changes 