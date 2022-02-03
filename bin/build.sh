#!/bin/sh

export DOCKER_BUILDKIT=1
export VERSION=${1:-dev}
yarn run swagger-autogen
docker-compose build
