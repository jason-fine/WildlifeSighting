const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/sightingsProject', {
    useNewUrlParser: true
})

const db = mongoose.connection

db.on('connected', ()=>{
    console.log(`Connected to Mongo at ${db.host}:${db.port}`)
})
