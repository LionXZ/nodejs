const fs = require("fs");

fs.writeFile('./fs1.txt', 'ccc', err => {
    if (err) {
        console.log('err')
        return;
    }
    console.log('success')
})
console.log('111', 111)