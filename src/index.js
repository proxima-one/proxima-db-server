const { ProximaDBServer } = require("./servers/newServer.js");
const { Command } = require("commander");
const { registerCommands } = require("./cli");


async function main() {
const program = new Command();
program.version("0.0.1");
registerCommands(program);
program.parse(process.argv);
}

main().catch(e => {
    console.error(`error executing command: ${e.message}`, e);
    process.exit(1);
  });