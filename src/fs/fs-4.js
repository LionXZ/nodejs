const fs = require("fs");

const ws = fs.createWriteStream('fs4.txt');

ws.write('aaa\r\n');
ws.write('bbb\r\n');
ws.write('ccc\r\n');
ws.write('ddd\r\n');

ws.close()
