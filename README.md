# Proxima DB Server

The Proxima DB Server is intended to be used for interactions with multiple languages through grpc protocol.


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
