//This will be important cause for my project 2 I can make it so that others can view other people pages but not as an admin
//

module.exports = (req, res, next) => {
    if (req.user && req.user.admin) {
        next()
    }
    else {
        req.flash('error', 'This is an admin-only page!')
        res.redirect('/profile/user')
    }
}