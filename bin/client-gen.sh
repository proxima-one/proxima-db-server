#!/bin/sh
#### Generates Clients from Open API JSON Spec 

# Re-generate the Swagger Documentation
yarn swagger-autogen

# remove Client Libs 
rm -rf ./src/clients

## Re-generate the Clients for REST

#javascript 
# openapi-generator generate -i ./src/endpoints/swagger/swagger_output.json -g javascript -o ./src/clients/javascript
# chmod +x ./src/clients/javascript/git_push.sh
# cd src/clients/javascript
#./git_push.sh proxima-one proximadb-client-js "Client Update" "github.com" && git push -f origin master && yarn publish
# cd ../../..
#typescript
openapi-generator generate -i ./src/endpoints/swagger/swagger_output.json -g typescript -o ./src/clients/typescript
chmod +x ./src/clients/typescript/git_push.sh
cd src/clients/typescript
#./git_push.sh proxima-one proximadb-client-ts "Client Update" "github.com" && git push -f origin master && yarn publish
cd ../../..
#go
openapi-generator generate -i ./src/endpoints/swagger/swagger_output.json -g go -o ./src/clients/go
chmod +x ./src/clients/go/git_push.sh
cd src/clients/go
#./git_push.sh proxima-one proximadb-client-go "Client Update" "github.com" && git push -f origin master
cd ../../..
#rust
openapi-generator generate -i ./src/endpoints/swagger/swagger_output.json -g rust -o ./src/clients/rust
chmod +x ./src/clients/rust/git_push.sh
cd src/clients/rust
#./git_push.sh proxima-one proximadb-client-rust "Client Update" "github.com" && git push -f origin master
cd ../../..

# remove Client Libs 
# rm -rf ./src/clients
