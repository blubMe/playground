
const config = require('config')
const startupDebug = require('debug')('app:startup')
const dbDebug = require('debug')('app:db')
const helmet = require('helmet')
const morgan = require('morgan')
const express = require('express')
const app = express()
const auth = require('./middleware/pipeline')
const courses = require('./routes/courses')
const home = require('./routes/home')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(helmet())
app.use('/api/courses',courses)
app.use('/',home)

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

// server configuration
const port = 6200
app.listen(port,() => console.log(`Listening on port ${port}...`))