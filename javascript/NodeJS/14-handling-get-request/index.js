const express = require('express')
const app = express()

app.use(express.json())

const learns = [
    {id: 1, name: 'Angular 7 deep dive'},
    {id: 2, name: 'ReactJS'},
    {id: 3, name: 'VueJS'},
    {id: 4, name: 'RxJS'}
]

app.get('/',(req,res) => res.send('welcome'))
app.get('/api/members',(req,res) => {
    const course = {
        id: course.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})
app.get('/api/learns/:id',(req,res) => {
    const t = learns.find(c => c.id === parseInt(req.params.id))
    !t ? res.status(404).send('The course you search is nothing')
    : res.send(t)
})
// use export PORT = <yourport> to register your own port to node env
const port = process.env.PORT || 6200
app.listen(port, () => console.log(`Listening on port ${port}...`))