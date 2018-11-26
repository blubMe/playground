var os = require('os')

var totalMemory = os.totalmem
var freeMemory = os.freemem

console.log(
    `total Memory : ${totalMemory}
free Memory : ${freeMemory}`
)