const http = require('http')
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write('hello')
        res.end()
    }
    if(req.url === '/api/learns') {
        res.write(JSON.stringify([{id: 1,name: 'ReactJS'},{id: 2,name: 'ReasonML'},{id: 3, name: 'Ruby'}]))
        res.end()
    }
})

server.on('connection',(socket) => console.log('New connection'))
server.listen(3000)
console.log('Listening on port 3000')