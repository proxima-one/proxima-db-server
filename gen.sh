#!/bin/sh

# Remove and install dependencies
rm -rf ./node_modules && rm yarn.lock && yarn install

## Update versioning of the server?

## Check breaking changes?

# Install and Generates swagger openapi docs for the client
yarn run swagger-autogen

## Client build
### Rest
chmod +x ./bin/clients/rest/gen.sh && ./bin/clients/rest/gen.sh #need new version 

### gRPC 
chmod +x ./bin/clients/grpc/gen.sh && ./bin/clients/grpc/gen.sh #need new version 