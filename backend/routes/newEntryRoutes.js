const express = require('express')
const router = express.Router()
module.exports = router

router.get('/update', (req,res) => {
    res.render('entries/update',{id: req.params.id})
})