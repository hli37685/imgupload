/**
 * Created by yp-tc-4816 on 2017/10/20.
 */


const crypto = require('crypto');
const fs = require('fs');
var password = 0x12312312.toString();
// var md5 = crypto.createHash('md5');
// password = md5.update(password).digest('base64');
const cipher = crypto.createDecipher('aes256', password);

const input = fs.createReadStream('2017-3-21.enc');
const output = fs.createWriteStream('2017-3-21.png');

input.pipe(cipher).pipe(output);

