const Gif = require('./Gif')

const index = (req, res) => {
    Gif.find({}, (err, gifs)=>{
        res.json(gifs)
    })
}

const create = (req, res) => {
    console.log(req.body)
    Gif.create(req.body)
    .then((gif)=>{
        console.log(gif)
        Gif.find({},(e, gifs)=>{
            res.json(gifs)
        })
    })
}

const deleteGif = (req, res) => {
    Gif.findByIdAndDelete(req.params.id, (err, g)=>{
        if(err){
            res.status(400).json(err)
            return
        }
        // send back all the gifs after deletion
        Gif.find({},(e, gifs)=>{
            res.json(gifs)
        })
    })
}

const update = (req, res) => {
    Gif.findByIdAndUpdate(req.params.id, req.body, (err, g)=>{
        if(err){
            res.status(400).json(err)
            return
        }
        // send back all the gifs after deletion
        Gif.find({},(e, gifs)=>{
            res.json(gifs)
        })
    })
}

module.exports = {
    index,
    deleteGif,
    create,
    update
}