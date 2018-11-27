const express = require('express')
const app = express()

app.get('/',(req,res) => res.send('Hello express & nodemon watcher'))

// use params in url parsing
app.get('/api/learns/:category/:title/:id',(req,res) => res.send(req.params))
// use query in url parsing
app.get('/api/lists',(req,res) => res.send(req.query))

// use export PORT = <yourport> to register your own port to node env
const port = process.env.PORT || 6200
app.listen(port, () => console.log(`Listening on port ${port}...`))