const fs = require('fs');

const rs = fs.createReadStream('./fs4.txt');

rs.on('data', chunk => {
    console.log(chunk)
})


rs.on('end', () => {
    console.log('done')
})