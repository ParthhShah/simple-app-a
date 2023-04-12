const mongoose = require('mongoose')
const { use } = require('../../../route/api/profile')
const Schema = mongoose.Schema

const Userschema = new Schema({
    username: {
        type: String,
        required: true
    }
})

module.exports = User = mongoose.model('myDoc', Userschema)