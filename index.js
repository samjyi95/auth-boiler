/****************
 * NODE MODULES
 ****************/

//fillout barebones statement 
let express = require('express')
let layouts = require('express-ejs-layouts')

//Create an express instance
let app = express();

/**********************
 * SERTTINGS/MIDDLEWARE
 **********************/

//set template lang to ejs 
app.set('view engine', 'ejs')

//tell express to use the layout modules
app.use(layouts)

//set up static folder
app.use(express.static('static'))

//Decrypt the var coming via POST route (aka from forms)
app.use(express.urlencoded({extended: false}))

/*****************************
 * ROUTES
 *****************************/
//Controllers
app.use('/auth', require('./controllers/auth'))

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
