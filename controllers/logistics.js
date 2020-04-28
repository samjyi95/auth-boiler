let router = require('express').Router()
let db = require('../models')
let async = require('async')



router.get('/posting', (req, res) => {
    res.render('logistic/posting')
})

//This route will be visiting the feed
router.get('/feed', (req, res) => {
    res.render('logistic/feed')
})


router.post('/new', (req, res) => {
    console.log(req.body)
    db.post.create({
        picPost: req.body.url,
    })
    .then()
    .catch((err) => {
        console.log('error', err)
        res.render('error')
    })
})


//I dont think Ill need this route because it's already on profile.js
router.get('/:userId/:picPostId', (req, res) => {
    res.send('This route will allow users to view a specofoc pic from a another users page')
})

router.get('/:userId', (req, res) => {
    res.send( )
})



module.exports = router