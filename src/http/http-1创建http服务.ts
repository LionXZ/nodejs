const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req, res)
    res.end('http server')
});


server.listen(9999, () => {
    console.log('success')
})