module.exports = (req, res, next) => {
    //do stuff
    if (req.user) {
        //GOOD - they are logged in!
        next() // Proceed as planned
    }
    else {
        //BAD - they are not logged in!
        // Send them an error message + send them to the login page
        req.flash('error', 'You must be logged in to view that page')
        res.redirect('/auth/login')
    }
}