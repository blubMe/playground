const EventEmitter = require('events')
const emitter = new EventEmitter()
const data = [
    {id: 1,url: 'http://facebook.com'},
    {id: 2,url: 'http://uber.com'},
    {id: 3,url: 'http://google.com'}
]
// Regis
emitter.on('messageCall',(arg) => console.log(arg))
// Create event
emitter.emit('messageCall',data)
// Raise
