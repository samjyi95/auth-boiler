//Node modules/variables
let router = require('express').Router()
let db = require('../models')

//routes
router.get('/login', (req, res) => {
    res.render('auth/login')
})


//POST /auth/login - this is a place for the login form to post to 
router.post('/login', (req, res) => {
    console.log('DATA', req.body)
    res.send('Hello from the post route!')
})

//GeET /auth/signup  - this page that renders the sign up form
router.get('/signup', (req,res) => {
    res.render('auth/signup', { data: {} })
})

//POST /auth/signup
router.post('/signup', (req, res) => {
    console.log('REQUEST BODY', req.body)
    if (req.body.password !== req.body.password_verify) {
        //Send a message on why things didn't work
        req.flash('error', 'Passwords do not match')
        //Put the user back onto the signup form 
        res.render('auth/signup', { data: req.body, alerts: req.flash() })
    }
    else {
        //Passwords matched, now we'll find/create by the user's email
        db.user.findOrCreate({
            where: {email: req.body.email },
            defaults: req.body
        })
        .then(([user, wasCreated]) => {
            if (wasCreated) {
                // Good -this was expected, they area a properley made new user
                //TODO: AUTO-LOGIN 
                res.send('IT WORKED')
            }
            else {
                //Bad - this person actually already had an account with the email entered
                req.flash('error', 'Account already exists')
                res.redirect('/auth/login')
            }
        })
        .catch(err => {
            //Print the whole error to the terminal 
            console.log('Error creatinf a user', err)

            //Check for sequelize validation errors (and make flash messages for them)
            if (err.errors) {
                err.errors.forEach(e => {
                if (e.type == 'Validation error')
                    req.flash('error', e.message)
                })
            }
            else {
                // Generic message for any other 
                req.flash('error', 'Server error')
            }
            // Redirect back to sign up 
            res.redirect('/auth/signup')
        })
    }
})

//exports (allows me to include this in another page)
module.exports = router