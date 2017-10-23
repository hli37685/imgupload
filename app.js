/**
 * 对图片解密后传给浏览器，不需要存盘。
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var fs = require('fs')
    const crypto = require('crypto');
    var password = 0x12312312.toString();
    const cipher = crypto.createDecipher('aes256', password);
    res.set( 'content-type', "image/png" );//设置返回类型
    const input = fs.createReadStream('2017-3-21.enc');
     var stream = input.pipe(cipher);

    var responseData = [];//存储文件流
    if (stream) {//判断状态
        stream.on( 'data', function(chunk) {
            responseData.push(chunk);
        });
        stream.on( 'end', function() {
            var finalData = Buffer.concat(responseData);
            res.write( finalData );
            res.end();
        });
    }
});
app.listen(3000);