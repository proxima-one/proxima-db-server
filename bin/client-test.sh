#!/bin/bash

# Test clients 
## Check for membership of client files
if ! [ -d "./src/clients" ]; then
    echo "Generating Client Files..."
    chmod +x ./bin/client-gen.sh && ./bin/client-gen.sh 
    echo "Done Generating Files"
fi

## Check breaking changes in buf generate
buf breaking --against '.git#branch=master' --path src/proto/proxima.proto



# if [-d "./src/version"]; then 

# fi 


#echo "Running javascript tests" && cd ./src/clients/javascript && yarn install && yarn test && cd ../../..

#echo "Running typescript tests" && cd ./clients/typescript && yarn install && yarn test && cd ../..