require('./connection')

const sightingSeeds = require('./sightings.json')

const Sighting = require('../models/sighting')

Sighting.deleteMany({})
.then(()=> {
    return Sighting.create(sightingSeeds)
})
.then(console.log)
.finally(()=>{
    process.exit()
})
