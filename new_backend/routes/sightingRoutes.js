const express = require("express")
const router = express.Router()
const sightingController = require('../controllers/sightingController.js')

router.get('/', sightingController.index)


module.exports = router