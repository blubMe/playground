const Joi = require('joi')
const config = require('config')
const startupDebug = require('debug')('app:startup')
const dbDebug = require('debug')('app:db')
const helmet = require('helmet')
const morgan = require('morgan')
const express = require('express')
const app = express()
const auth = require('./middleware')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(helmet())

// Configuration
console.log('Application Name: ' + config.get('name'))
console.log('Mail Host: ' + config.get('mail.host'))
console.log('Mail Password: ' + config.get('mail.password')) // export password first : export app_password=<value>


// Template engine Configuration
app.set('view engine','pug')
app.set('views','./views') // folder view

// disabled when in prod mode
if (app.get('env') === 'development') app.use(morgan('tiny'))
& startupDebug('Morgan enabled , ready to logging...')

// call debug database fake
dbDebug('conected to the database...')

// middleware call
app.use(auth)

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
app.get('/',(req,res) => res.render('index',{title: 'My express App', message: 'Hello'}))
app.get('/api/courses',(req,res) => res.send(courses))
app.get('/api/courses/:id',(req,res) => {
    const c = courses.find(c => c.id === parseInt(req.params.id))
    res.send(c)
})

// Url list : Post
app.post('/api/courses',(req,res) => {
    const { error } = validate(req.body)
    if (error) res.status(400).send(error.details[0].message)
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
    if (error) res.status(400).send(error.details[0].message)
    const c = courses.find(c => c.id === parseInt(req.params.id))
    if (!c) res.status(404).send('The course you search is nothing')
    c.name = req.body.name
    res.send(c)
})

// Url list : Delete
app.delete('/api/courses/:id',(req,res) => {
    const c = courses.find(c => c.id === parseInt(req.params.id))
    if (!c) res.status(404).send('The course you search is nothing')

    // delete
    const i = courses.indexOf(c)
    courses.splice(i,1)

    // return
    res.send(c)
})

// server configuration
const port = 6200
app.listen(port,() => console.log(`Listening on port ${port}...`))