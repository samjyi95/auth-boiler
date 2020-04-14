//Node modules/variables
let router = require('express').Router()

//routes
router.get('/login', (req, res) => {
    res.render('auth/login')
})

router.get('/signup', (req,res) => {
    res.render('auth/signup')
})

//POST /auth/login - this is a place for the login form to post to 
router.post('/login', (req, res) => {
    console.log('DATA', req.body)
    res.send('Hello from the post route!')
})

//exports (allows me to include this in another page)
module.exports = router