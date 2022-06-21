
const Image = require('../models/Image')

let sendUpdateUploadForm = (req,res) => {
    res.render('entries/update',{id: req.params.id})
}

let updateUpload = (req, res) => {
    obj[req.params.id] = req.body
    //entries above should be changed to whatever it is, probably obj
    res.redirect('/')
}

let deleteEntry = (req, res) => {
    Image.findByIdAndDelete(req.params.id, (err, g) => {
        if(err){
            res.status(400).json(err)
            return
        }
        Image.find({},(e, gifs)=>{
            res.json(gifs)
    })
})
}

module.exports = {
    sendUpdateUploadForm,
    updateUpload,
    deleteEntry
}








//const Gif = require('../models/Image')

// const index = (req, res) => {
//     Gif.find({}, (err, gifs)=>{
//         res.json(gifs)
//     })
// }