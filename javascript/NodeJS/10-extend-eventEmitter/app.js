const EventEmitter = require('events')

const Logger = require('./modules')
const log = new Logger()

const data = [
    {id: 1,url: 'http://facebook.com'},
    {id: 2,url: 'http://uber.com'},
    {id: 3,url: 'http://google.com'}
]

// Regis
log.on('messageCall',(arg) => console.log(arg))

// Create event
log.fire(data)
