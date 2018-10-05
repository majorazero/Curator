const crypto = require("crypto");

let mykey = crypto.createCipher("aes-128-cbc","password");
let token = mykey.update("dummy",'utf8','hex');
token += mykey.final('hex');

console.log(token);

let mykeyDec = crypto.createDecipher("aes-128-cbc","password");
let pass = mykeyDec.update(token,'hex','utf8');
pass += mykeyDec.final('utf8');

console.log(pass);
