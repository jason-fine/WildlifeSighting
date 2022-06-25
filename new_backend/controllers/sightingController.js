const Sighting = require('../models/sighting')

const index = (req,res,next)=> {
    Sighting.find({}, (err,sighting)=>{
        if(err){
            res.json(err)
            return
        }
        //res.json(sighting)
        // res.render('users',{
        //     user,
        //     user: req.user
        // })
        //confusing using user multiple times
    })
    
}

const create = (req,res) => {
    // Sighting.create(req.body, (err, si) =>{ //not sure if si should be bm
    //     if(err){
    //         res.status(400).json(err)
    //         return
    //     }
    //     res.json(si)
    // })
    console.log(req.body)
    let newSighting = new Sighting(req.body)
    newSighting.save(() => console.log("New Sighting Added"))
    res.redirect('/sighting')
}
const update3 = (req,res) => {
    // Sighting.create(req.body, (err, si) =>{ //not sure if si should be bm
    //     if(err){
    //         res.status(400).json(err)
    //         return
    //     }
    //     res.json(si)
    // })
    console.log(req.body)
    let newSighting = new Sighting(req.body)
    Sighting.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/sighting/:id')
}

async function showAll (req, res) {
    let allSightings = await Sighting.find({})
    res.render('index', {allSightings})
}
let show = (req, res) => {
    // let sighting = Sighting.findById(req.params.id).populate('sighting')
    Sighting.findById(req.params.id, (err, sighting) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.render('updateSighting',{sighting})
        // res.json(sighting)
    })
}
// let show = (req, res) => {
//     Sighting.findById(req.params.id, (err, si) =>{
//         if(err){
//             res.status(400).json(err)
//             return
//         }

//         res.json(si)
//     })
// }

let  deleteIt= (req, res) => {
    Sighting.findByIdAndDelete(req.params.id, (err, si)=>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.redirect('/sighting')
    })
}
const update2 = async (req, res) => {
    
    try {
       await Sighting.findByIdAndUpdate(req.params.id, req.body)


       let sighting = await Sighting.findById(req.params.id).populate('sighting')

        
    
        res.json(sighting)
    } catch(ex){
        res.json('Failed to update sighting')
    }
}
let update = (req, res) => {
    
    Sighting.findByIdAndUpdate(req.params.id, req.body, {new: true} ,(err, sighting) =>{
        if(err){
            res.status(400).json(err)
            return
        }

        // res.json(sighting)
        res.redirect(`${req.params.id}`)
    } )
}
// let update = (req, res) => {

//     Sighting.findByIdAndUpdate(req.params.id, req.body, {new: true} ,(err, si) =>{
//         if(err){
//             res.status(400).json(err)
//             return
//         }

//         // res.json(si)
//         res.redirect(`/sighting`)
//     } )
// }
//not sure how to implement step 9.1 on oauth lesson


module.exports = {
    index, 
    create,
    showAll,
    update,
    deleteIt,
    show,
    update3
}