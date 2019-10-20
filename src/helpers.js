

function parseProof(proof) {
  let str = ""
  if (proof) {
    let p = proof
    str = JSON.stringify(proof)
    let pr = JSON.parse(str)
    pr.key_value = Buffer.from(p.key_value).toString('hex')
    str = JSON.stringify(pr)
  }
  bytes = toBytes(str)
  return bytes
}

function toBytes(str) {
  return Buffer.from(str)
}


module.exports = {
  parseProof
}
