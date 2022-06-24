const mongoose = require('mongoose')

const sightingSchema = new mongoose.Schema({
    name: String,
    location: String
    })

const Sighting = mongoose.model('Sighting', sightingSchema)

module.exports = Sighting