const eventEmitter = require('events')
const emitter = new eventEmitter()

const data = [
    {id: 1,url: 'http://facebook.com'},
    {id: 2,url: 'http://uber.com'},
    {id: 3,url: 'http://google.com'}
]

emitter.on('messageConnect',function(arg){
    console.log('Listened Message: ',arg)
})

emitter.emit('messageConnect',data)