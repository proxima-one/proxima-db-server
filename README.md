# Proxima DB Server

The Proxima DB Server is intended to be used for interactions with multiple languages through grpc protocol.

<!--
protoc --go_out=. --go_opt=paths=source_relative \
    --go-grpc_out=. --go-grpc_opt=paths=source_relative \
    helloworld/helloworld.proto

-->


## Set-up

```
yarn install 
```


### Run 
```
yarn run start
```

### Load Testing 
```
yarn run load-test
```


## Installation

### Docker

```
docker pull chasesmith95/proxima-db-server:latest
```

### NPM

```
npm install proxima-db-server
```

## Start

Default server configuration:

IP: `0.0.0.0`
Port: `50051`

### Docker
```
docker run -p 50051:50051 chasesmith95/proxima-db-server:latest
```

### NPM

```
npm start
```

## Usage

- [Go Client]()
