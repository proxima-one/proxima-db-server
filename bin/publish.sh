#!/bin/sh

version="$1"

./build.sh $version
docker tag proximaone/proxima-db:$version us-west4-docker.pkg.dev/wired-framework-311403/proximaone/proxima-db:$version
docker push us-west4-docker.pkg.dev/wired-framework-311403/proximaone/proxima-db:$version

docker tag proximaone/proxima-db:$version chasesmith95/proxima-db-server:$version
docker push chasesmith95/proxima-db-server:$version

./bin/git_push.sh proxima-one proximadb-client-grpc-js "Client Update" "github.com" "./src/gen" && git push -f origin master