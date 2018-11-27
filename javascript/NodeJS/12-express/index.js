const express = require('express')
const app = express()

app.get('/',(req,res) => res.send('Hello express'))

app.listen(6200,() => console.log('listening on port 6200...'))