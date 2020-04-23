//Require environment variables
require('dotenv').config()

// Require node modules
let passport = require('passport')

//Require any stategies (AKA types of auth) we want to use 
let LocalStrategy = require('passport-local').Strategy

//Import a reference to a our database
let db =require('../models')

//Serialization and Deserialization functions
//These are for passports to use in order to store/lookup the user info
//SERIALIZE: Reduce a user object to just its id field
passport.serializeUser((user, done) => {
    // Call the callback function with the user id as an argument 
    //sone(error, id) - pass a null if no error 
    done(null, user.id)
})

//DESERIALIZE: Bassically reverses the process of the serialize function
//In other words, take the user's ID and return the full user object
passport.deserializeUser((id, done) => {
    db.user.findByPk(id)
    .then(user => {
        done(null, user)
    })
    .catch(done)
})

//LOCAL Strategy: using a database that we manage ourselves (not OAuth)
passport.use(new LocalStrategy({
    usernameField: 'email',
    passpwordField: 'password',
}, (email, password, done) => {
    //Try looking up the user by their email
    db.user.findOne({
        where: { email: email }
    })
    .then(foundUser => {
        //check and see if the user is found; also if yes, then check their password too
        //finding the password by using a compare function from bcrypt
        if (foundUser && foundUser.validPassword(password)) {
            // GOOD - user exists and password is correct 
            done(null, foundUser)
        }
        else {
            // BAD - user doesn't exists or password was bad
            done(null, null)
        }
    })
    .catch(done)
}))

//Make sure to include this file into other files 

module.exports = passport 