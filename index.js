/****************
 * NODE MODULES
 ****************/
// add in environment var
require('dotenv').config()

//fillout barebones statement 
let express = require('express')
let flash = require('connect-flash')
let layouts = require('express-ejs-layouts')
let session = require('express-session')

//Create an express instance
let app = express();

//include passport (via the passport config file)
let passport = require('./config/passportConfig')

/**********************
 * SETTINGS/MIDDLEWARE
 **********************/

//set template lang to ejs 
app.set('view engine', 'ejs')

//tell express to use the layout modules
app.use(layouts)

//set up static folder
app.use(express.static('static'))

//Decrypt the var coming via POST route (aka from forms)
app.use(express.urlencoded({extended: false}))

//Set up sessions
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}))

//Set up connect-flash for the flash alert messages (depends on session, ORDER MATTERS HERE)
app.use(flash())

//Set up passport (depends on sessions, so we'll initiliaze it after app.use('sessions') )
app.use(passport.initialize())
app.use(passport.session())

// 'Custom middleware - make certain variables avaialable to EJS pages through 'locals'( something )
app.use((req, res, next) => {
    res.locals.alerts = req.flash()
    res.locals.user = req.user
    next()
})

/*****************************
 * ROUTES
 *****************************/
//Controllers
app.use('/auth', require('./controllers/auth'))
app.use('/profile', require('./controllers/profile'))

//create a home route
app.get('/', (req, res) => {
    res.render('home')
})

 //create a wild card route (catch-all)
app.get('*', (req, res) => {
    res.render('error')
})

/******************
 * LISTEN
 ******************/

//Pick a port to listen on 
app.listen(3000)
