#### Generates Clients from Open API JSON Spec 

# Re-generate the Swagger Documentation
yarn swagger-autogen

## Re-generate the Clients 
#typescript-node
openapi-generator generate -i ./src/endpoints/swagger/swagger_output.json -g typescript-node -o ./src/clients/typescript
chmod +x ./src/clients/typescript/git_push.sh
./src/clients/typescript/git_push.sh proxima-one proximadb-client-js "Client Update" "github.com"

#go
openapi-generator generate -i ./src/endpoints/swagger/swagger_output.json -g go -o ./src/clients/go
chmod +x ./src/clients/go/git_push.sh
./src/clients/go/git_push.sh proxima-one proximadb-client-go "Client Update" "github.com"