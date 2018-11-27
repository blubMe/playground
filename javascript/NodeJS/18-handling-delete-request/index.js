const Joi = require('joi')
const express = require('express')
const app = express()

app.use(express.json())

const learns = [
    {id: 1, name: 'Angular 7 deep dive'},
    {id: 2, name: 'ReactJS'},
    {id: 3, name: 'VueJS'},
    {id: 4, name: 'RxJS'}
]

function validateAndSend(status,req,res){
    const learn = learns.find(c => c.id === parseInt(req.params.id))
    return {
        send: () => !learn ? res.status(status).send('The course you search is nothing') : res.send(learn),
        sendNull: () => !learn ? res.status(status).send('The course you search is nothing') : null
    }
}

function validate(learn){
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(learn,schema)
}

app.get('/',(req,res) => res.send('welcome'))
app.get('/api/learns',(req,res) => res.send(learns))
app.post('/api/learns',(req,res) => {
    const {error} = validate(req.body)
    error ? res.status(400).send(error.details[0].message)
    : null
    const learn = {
        id: learns.length + 1,
        name: req.body.name
    }
    learns.push(learn)
    res.send(learn)
})

app.put('/api/learns/:id',(req,res) => {
    const {error} = validate(req.body)
    error ? res.status(400).send(error.details[0].message) : null
    const t = learns.find(c => c.id === parseInt(req.params.id))
    !t ? res.status(404).send('The course you search is nothing') : null
    t.name = req.body.name
    res.send(t)
})

app.get('/api/learns/:id',(req,res) => {
    validateAndSend(404,req,res).send()
})

app.delete('/api/learns/:id',(req,res) => {
    const t = learns.find(c => c.id === parseInt(req.params.id))
    !t ? res.status(404).send('The course you search is nothing') : null

    //delete
    const i = learns.indexOf(t)
    learns.splice(i,1)

    //return
    res.send(t)
})



// use export PORT = <yourport> to register your own port to node env
const port = process.env.PORT || 6200
app.listen(port, () => console.log(`Listening on port ${port}...`))