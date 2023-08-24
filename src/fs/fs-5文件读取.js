const fs = require('fs');

fs.readFile('./fs4.txt', (err, data) => {
    if (err) {
        console.log('err');
        return
    }
    console.log(data.toString())
})


//同步
let data = fs.readFileSync('./fs1.txt');
console.log(data.toString());