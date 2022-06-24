const Sighting = require('../models/sighting')

const index = (req,res)=> {
    Sighting.find({}, (err,sighting)=>{
        if(err){
            res.json(err)
            return
        }
        res.json(sighting)
    })
    
}


module.exports = {
    index
}