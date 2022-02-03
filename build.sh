#!/bin/sh

# Builds the docker containers for the database, and the clients given generation of swagger (server), clients, and new version

## Re-generate Clients, Containers, and Server with new Version, and new helm updates 
chmod +x ./gen.sh && ./gen.sh 

## Get new version 
## Check breaking changes 

## Docker Containers build 
chmod +x ./bin/docker/build.sh && ./bin/docker/build.sh #need new version 