
const crypto = require('k6/crypto');
const { randomString } =  require("https://jslib.k6.io/k6-utils/1.1.0/index.js");

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


function randomKey(size) {
    return randomString(size)
}

function randomValue(size) {
    return randomString(size)
}

function randomBytes(size) {
//   //assert((size & 0xffff) === size);

//   const bytes = Buffer.allocUnsafe(size);

//   // Does not need to be cryptographically
//   // strong, just needs to be _different_
//   // from everyone else to make an attack
//   // not worth trying. Predicting one user's
//   // key does nothing to help an attacker.
//   for (let i = 0; i < bytes.length; i++)
//     bytes[i] = (Math.random() * 0x100) >>> 0;

//   return bytes;
    return crypto.randomBytes(size)
}

module.exports = {
    randomKey, randomValue, randomBytes
}