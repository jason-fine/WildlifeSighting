var router = require('express').Router();
var sightingsCtrl = require('../controllers/usersSightings');

// GET /usersSightings
router.get('/usersSightings', sightingsCtrl.index);

// POST /sightings
// We will already have access to the logged in student on
// the server, therefore do not use: /usersSightings/:id/sightings
router.post('/sightings', isLoggedIn, sightingsCtrl.addFact);

// DELETE /sightings/:id
router.delete('/sightings/:id', sightingsCtrl.delFact);

router.post('/', sightingsCtrl.create)
router.put('/:id', sightingsCtrl.update)

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
