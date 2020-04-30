let router = require('express').Router()
let db = require('../models')
let async = require('async')
let adminLogin = require('../middleware/adminLogin')
let userLogin = require('../middleware/userLogin')

router.use(userLogin)

router.get('/posting', (req, res) => {
    res.render('logistic/posting')
})





//This route pushes all user data for the userIndex page
router.get('/userIndex', (req, res) => {
    db.user.findAll()
    .then((users) => {
        res.render('logistic/userIndex', { users })
    })
    .catch((err) => {
        res.render('error')
    })
})

//This route will be visiting the feed
router.get('/feed', (req, res) => {
    db.post.findAll()
    .then((posts) => {
        console.log(posts)
        res.render('logistic/feed', { posts })
    })
    .catch((err) => {
        res.render('error')
    })
})

//I dont think Ill need this route because it's already on profile.js
router.get('/viewPic/:id', (req, res) => {
    db.post.findOne({
        where: { id: req.params.id }
    })
    .then()
    res.render('logistic/viewPic')
})



router.post('/new', (req, res) => {
    let tags = []
    if (req.body.tags) {
        tags = req.body.tags.split(',')
    }
    console.log(req.body)
    db.post.create(req.body)
    .then(post => {
        if (tags.length) {
            console.log('tag length was greater than 0')
            console.log(tags)
                async.forEach(tags, (t, done) => {
                    console.log('Inside forEach, dealing with tags:', t)
                    db.tag.findOrCreate({
                        where: { name: t.trim() }
                    })
                    .then(([tag, wasCreated]) => {
                        console.log('Tag', t, 'was created successfully')
                        post.addTag(tag)
                        .then(() => {
                            console.log('associated tag', t, 'with the article')
                            done()
                        })
                    })
                }, () => {
                    res.redirect('/profile/user')
                })
        }
        else {
            res.redirect('/profile/user')
        }
    }) 
    .catch(err => {
        console.log(error)
        res.render('error')
    })      
})


//I think this should be in profile.js
router.delete('/posts/:id/', (req, res) => {
    db.post.destroy({
        where: {id: req.params.id},

    })
    .then(() => {
        res.redirect('/profile/user')
    })
    .catch(err => {
        console.log('delete route didnt work')
        res.render('error')
    })
})





router.get('/:userId', (req, res) => {
    res.send( )
})



module.exports = router