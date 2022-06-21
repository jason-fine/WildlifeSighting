const mongoose = require('mongoose')

// const gifSchema = new mongoose.Schema({
//     name: String,
//     url: String
// })

const imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
})

// module.exports = mongoose.model('Gif', gifSchema)
module.exports = new mongoose.model('Image', imageSchema)


//name is Gif.js
//switched from Image.js