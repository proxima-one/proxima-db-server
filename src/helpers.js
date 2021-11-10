

//generate request 


//bench/load the files 

//time 



function parseProof(proof) {
  let str = "";
  if (proof) {
    let p = proof;
    str = JSON.stringify(proof);
    let pr = JSON.parse(str);
    if (p.key_value) {
      pr.key_value = Buffer.from(p.key_value).toString("hex");
    }
    str = JSON.stringify(pr);
  }
  bytes = toBytes(str);
  return bytes;
}

function parseRoot(val) {
  let root = "NULL";
  if (val) {
    root = val;
  }
  return Buffer.from(root).toString("hex");
}

function parseKey(key) {
  return unpack(key.toString(), 32);
}

function parseValue(val) {
  let value = "NULL";
  if (val && val != null) {
    value = val;
  }
  if (value.toString().length < 100) return unpack(value.toString(), 100);
  return toBytes(value);
}

function toBytes(str) {
  return Buffer.from(str);
}

function unpack(str, m = -1) {
  let n = m;
  let l = str.length;
  if (m == -1) {
    n = l;
  }
  var bytes = [];
  let i = 0
  for (; i < n-l; i++) {
    bytes.push(char >>> 8);
  } 
  for (; i < n; i++) {
    var char = str.charCodeAt(i - (n-l));
    bytes.push(char & 0xff);
  }


  return new Buffer.from(bytes);
}

function pack(bytes) {
  var chars = [];
  for (var i = 0, n = bytes.length; i < n; ) {
    chars.push((bytes[i++] & 0xff));
  }
  return String.fromCharCode.apply(null, chars);
}

module.exports = {
  parseProof,
  parseKey,
  parseValue,
  parseRoot
};
