const express = require('express')
const router = express.Router()

const User = require('./../../models/user')


router.get('/', (req, res) => res.send('Profile related routes'))

router.get('/get', async (req, res) => {
    
    // without cursor.
    const doc = await User.find({});
    try {
        res.send(doc);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post('/add', (req, res) => {
    // check to keep usernames unique
    User
        .findOne({username: req.body.username})
        .then(user => {
            if (user) {
                return res
                        .status(400)
                        .send('username already exists')    
            } else {
                const newUser = User({
                    username: req.body.username
                })

                newUser
                    .save()
                    .then(user => res.send(user))
                    .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))
})
module.exports = router