//fillout barebones statement 

let express = require('express')
let layouts = require('express-ejs-layouts')

//Create an express instance
let app = express();

//set template lang to ejs 
app.set('view engine', 'ejs')

//tell express to use the layout modules
app.use(layouts)

//set up static folder
app.use(express.static('static'))

//create a wild card route (catch-all)
app.get('*', (req, res) => {
    res.render('error')
})

//Pick a port to listen on 
app.listen(3000)
