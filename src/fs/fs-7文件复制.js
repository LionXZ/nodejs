const fs = require('fs');
const process = require('process');

//1 readFile
// let data = fs.readFileSync('./fs4.txt');
// fs.writeFileSync('./fs4-2.txt', data);
// console.log(process.memoryUsage());

//2 流式操作
const rs = fs.createReadStream('./fs4.txt');
const ws = fs.createWriteStream('./fs4-3.txt');


// 管道流
// rs.pipe(ws)

rs.on('data', chunk => {
    ws.write(chunk);
});

rs.on('end', () => {
    console.log(process.memoryUsage());
})