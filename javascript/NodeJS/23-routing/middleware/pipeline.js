const auth = (req,res,next) => {
    console.log('authenticating...')
    next()
    console.log('welcome mate')
}

module.exports = auth