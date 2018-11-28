const express = require('express')
const Joi = require('joi')
const router = express.Router()

// validation zone
function validate(learn){
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(learn,schema)
}

// Array data static
const courses = [
    {id: 1, name: 'Angular 7 deep dive'},
    {id: 2, name: 'ReactJS'},
    {id: 3, name: 'VueJS'},
    {id: 4, name: 'RxJS'}
]

router.get('/',(req,res) => res.send(courses))
router.get('/:id',(req,res) => {
    const c = courses.find(c => c.id === parseInt(req.params.id))
    res.send(c)
})

// Url list : Post
router.post('/',(req,res) => {
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
router.put('/:id',(req,res) => {
    const { error } = validate(req.body)
    if (error) res.status(400).send(error.details[0].message)
    const c = courses.find(c => c.id === parseInt(req.params.id))
    if (!c) res.status(404).send('The course you search is nothing')
    c.name = req.body.name
    res.send(c)
})

// Url list : Delete
router.delete('/:id',(req,res) => {
    const c = courses.find(c => c.id === parseInt(req.params.id))
    if (!c) res.status(404).send('The course you search is nothing')

    // delete
    const i = courses.indexOf(c)
    courses.splice(i,1)

    // return
    res.send(c)
})

module.exports = router