#!/bin/sh

export DOCKER_BUILDKIT=1
export VERSION=${1:-dev}
docker build . -t proximaone/proxima-db:${VERSION:-dev}
