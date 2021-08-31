const { ProximaDBServer } = require("./servers/newServer.js");
const {start, ProximaDBHttpServer} = require("./http")
const Config = require("./config");
const assert = require("assert");

const defaultConfig = {
  ip: "0.0.0.0",
  port: process.env.PORT || "50051",
  db_path: "./db",
  hash: "",
  bits: ""
};

function registerCommands(cmd) {
  registerDatabaseStartCommand(cmd);
}

function registerDatabaseStartCommand(cmd) {
  cmd
    .command("start")
    .option("--ip <ip>", "ip from which to host server on", "0.0.0.0")
    .option("--port <port>", "port from which api is listening", "50051")
    .option(
      "-c, --configPath <configPath>",
      "path to custom config file",
      "./config.yml"
    )
    .description("start proxima db server and status server")
    .action(options => {
      //console.log(options);
      assert(options.ip, "ip is required");
      assert(options.port, "port is required");
      assert(options.configPath, "database config file is required");

      var config = Config.fromYamlFile(options.configPath);
      config.ip = options.ip;
      config.port = options.port;
      try {
        const grpcServer = new ProximaDBServer(config);
        grpcServer.start();
      } catch (err) {
        console.error(`Error creating the gRPC server`, err.message);
      }

      try {
        const httpServer = new ProximaDBHttpServer(config)
        httpServer.start();
      } catch (err) {
        console.error(`Error creating the http server`, err.message);
      }
      //const proximaServerEndpoint = new ProximaServerEndpoint(config);
      //proximaServerEndpoint.start();
    });
}

module.exports = {
  registerCommands
};

//port
//ip
//prefix
//encoding
//bits
