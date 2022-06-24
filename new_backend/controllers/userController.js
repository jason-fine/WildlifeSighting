const Sighting = require('../models/users')

const create = async (req,res)=> {
    try{
        let user = await User.create(req.body)
        res.json(user)
    } catch(ex){
        res.json('Failed to create')
    }
    
}


module.exports = {
    create
}