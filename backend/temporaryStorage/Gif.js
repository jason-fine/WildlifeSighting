const mongoose = require('mongoose')

const gifSchema = new mongoose.Schema({
    name: String,
    url: String
})

module.exports = mongoose.model('Gif', gifSchema)