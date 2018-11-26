const EventEmitter = require('events')

var url = 'http://google.com'

class Logger extends EventEmitter {
    fire(msg) {
        console.log(msg)
        // Event
        this.emit('messageCall',{id: 1 , url})
    }
}

module.exports = Logger