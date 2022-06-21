//taken from routes folder

const express = require('express')
const router = express.Router()
const gifCtrl = require('./gifCtrl.js')
// GET / Index Route - get all gifs

router.get('/', gifCtrl.index)
router.delete('/:id', gifCtrl.deleteGif)
router.post('/', gifCtrl.create)
router.put('/:id', gifCtrl.update )

module.exports = router