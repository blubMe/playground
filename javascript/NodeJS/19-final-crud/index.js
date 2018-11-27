const Joi = require('joi')
const express = require('express')
const app = express()

app.use(express.json())

// Array data static
const courses = [
    {id: 1, name: 'Angular 7 deep dive'},
    {id: 2, name: 'ReactJS'},
    {id: 3, name: 'VueJS'},
    {id: 4, name: 'RxJS'}
]

// validation zone
function validate(learn){
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(learn,schema)
}

// Url list : Get
app.get('/',(req,res) => res.send('welcome access /api/courses'))
app.get('/api/courses',(req,res) => res.send(courses))
app.get('/api/courses/:id',(req,res) => {
    const c = courses.find(c => c.id === parseInt(req.params.id))
    res.send(c)
})

// Url list : Post
app.post('/api/courses',(req,res) => {
    const { error } = validate(req.body)
    error ? res.status(400).send(error.details[0].message) : null
    const courseBluePrint = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(courseBluePrint)
    res.send(courseBluePrint)
})

// Url list : Put
app.put('/api/courses/:id',(req,res) => {
    const { error } = validate(req.body)
    error ? res.status(400).send(error.details[0].message) : null
    const c = courses.find(c => c.id === parseInt(req.params.id))
    !c ? res.status(404).send('The course you search is nothing') : null
    c.name = req.body.name
    res.send(c)
})

// Url list : Delete
app.delete('/api/courses/:id',(req,res) => {
    const c = courses.find(c => c.id === parseInt(req.params.id))
    !c ? res.status(404).send('The course you search is nothing') : null

    // delete
    const i = courses.indexOf(c)
    courses.splice(i,1)

    // return
    res.send(c)
})

// server configuration
const port = 6200
app.listen(port,() => console.log(`Listening on port ${port}...`))