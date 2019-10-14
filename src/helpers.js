

function parseProof(proof) {
  str = JSON.stringify(proof)
  bytes = toBytes(str)
  return bytes
}

function toBytes(str) {
  return Buffer.from(str)
}


module.exports = {
  parseProof
}
