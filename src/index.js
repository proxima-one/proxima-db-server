const {ProximaDBServer} = require('./server')

function main() {
  ip = "0.0.0.0"
  port = process.env.PORT || "50051"
  db_path = ""
  hash = ""
  bits = ""
  proximaServer = new ProximaDBServer({"ip": ip, "port" : port, "db_path": db_path, "hash": hash, "bits": bits})
  proximaServer.start()
}

main()
