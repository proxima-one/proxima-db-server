const { ProximaDBServer } = require("./servers/newServer.js");
const { Command } = require("commander");
const { registerCommands } = require("./cli");

const program = new Command();
program.version("0.0.1");
registerCommands(program);
program.parse(process.argv);
// function main() {
//   ip = "0.0.0.0";
//   port = process.env.PORT || "50051";
//   db_path = "./db";
//   hash = "";
//   bits = "";
//   proximaServer = new ProximaDBServer({
//     ip: ip,
//     port: port,
//     db_path: db_path,
//     hash: hash,
//     bits: bits
//   });
//   proximaServer.start();
// }
