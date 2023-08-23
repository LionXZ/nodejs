const fs = require("fs");
fs.appendFile('./fs2.txt', 'duhsagdsad', err => {
    if (err) {
        console.log('err')
        return;
    }
    console.log('success')
}) 