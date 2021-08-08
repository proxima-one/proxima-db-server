class ProximaServerEndpoint {
  constructor(args = {}) {
    this.server = new grpc.Server();
    this.db = this.initDB();
    this.initServer(args);
  }

  start() {
    throw new Error("Error not implemented");
  }

  stop() {
    throw new Error("Error Not implemented");
  }
}
