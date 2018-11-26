const fs = require('fs')

// const file = fs.readdirSync('./')
//  console.log(file)

fs.readdir('./',function(err,res){
    if (err) console.log(err)
    else console.log(res)
})