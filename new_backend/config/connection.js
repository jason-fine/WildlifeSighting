const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/wildlife',{
    useNewUrlParser: true
})

// mongoose.connect(process.env.DATABASE_URL,
//     { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, err => {
//         console.log('connected')
//     });

let db = mongoose.connection

db.on('connected', () => {
    console.log(`connected to db on ${db.host}:${db.port}`)
})