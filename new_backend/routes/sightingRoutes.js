const express = require("express")
const router = express.Router()
const passport = require('passport')
const sightingController = require('../controllers/sightingController.js')

// router.get('/', sightingController.index)

router.get('/', sightingController.showAll)

router.post('/', sightingController.create)

router.patch('/:id', sightingController.update)
// router.patch('/:id', sightingController.update3)

router.get('/:id', sightingController.show)

router.delete('/:id', sightingController.deleteIt)

// router.get('/auth/google', passport.authenticate(
//     'google',
//     { scope: ['profile', 'email'] }
//   ));

//   router.get('/oauth2callback', passport.authenticate(
//     'google',
//     {
//       successRedirect : '/sighting',
//       failureRedirect : '/sighting'
//       //make sure this shouldn't be sightings or user or users
//     }
//   ));

//   router.get('/logout', function(req, res){
//     req.logout();
//     res.redirect('/sighting');
//   });

module.exports = router