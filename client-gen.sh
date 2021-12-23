#### Generates Clients from Open API JSON Spec 

# Re-generate the Swagger Documentation
yarn swagger-autogen

## Re-generate the Clients 
#typescript-node
openapi-generator generate -i ./src/endpoints/swagger/swagger_output.json -g typescript-node -o ./src/clients/typescript
#go
openapi-generator generate -i ./src/endpoints/swagger/swagger_output.json -g go -o ./src/clients/go
