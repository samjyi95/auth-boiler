let router = require('express').Router()
let moment = require('moment')
let adminLogin = require('../middleware/adminLogin')
let userLogin = require('../middleware/userLogin')
let db = require('../models')

//Custom middleware that is ONLY applied to the routes in this file!
//this file is imported from middleware (look at line 4!)
router.use(userLogin)

//GET /profile/user - a normal profile for the plebs
//NOTE: Protect this toure from the users who are not logged in 
//It passed { moment } within the render function if you have to bring that back, but I would assume it's not coming back
router.get('/user', (req, res) => {
    console.log('hitting this route')
    db.post.findAll()
    .then((posts) => {
        res.render('profile/user', { moment, posts, user: req.user.dataValues } )
    })
    .catch((err) => {
        console.log(err)
        res.render('error')
    })
})


//GET /profile/guest/userId - viewing a user's profile as a guest (instagram!? project 2!?)
router.get('/guest/:id', (req,res) => {
    db.user.findByPk(req.params.id)
    .then(userProfile => {
        res.render('profile/guest', { moment, userProfile })
    })
    .catch(err => {
        console.log(err)
        res.render('error')
    })
})

//GET /profile/admin - a special profile admins 
//NOTE: Protect this route from the users who are not loggie in AND 
//users who are not admins 
router.get('/admin', adminLogin, (req, res) => {
    db.user.findAll()
    .then(users => {
        res.render('profile/admin', { moment, users })
    })
    .catch(err => {
        console.log(err)
        res.render('error')
    })
})



module.exports = router