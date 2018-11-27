const express = require('express')
const app = express()

app.use(express.json())

const learns = [
    {id: 1, name: 'Angular 7 deep dive'},
    {id: 2, name: 'ReactJS'},
    {id: 3, name: 'VueJS'},
    {id: 4, name: 'RxJS'}
]

app.get('/',(req,res) => res.send('welcome'))
app.get('/api/learns',(req,res) => res.send(learns))
app.post('/api/learns',(req,res) => {
    const learn = {
        id: learns.length + 1,
        name: req.body.name
    }
    learns.push(learn)
    res.send(learn)
})
// use export PORT = <yourport> to register your own port to node env
const port = process.env.PORT || 6200
app.listen(port, () => console.log(`Listening on port ${port}...`))