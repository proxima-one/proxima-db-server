#!/bin/sh
# Generate gRPC client from buf build 


## Buf Build 
buf build && buf generate ./src/proto