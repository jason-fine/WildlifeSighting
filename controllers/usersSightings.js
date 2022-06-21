const UserSightings = require('../models/userSighting');

module.exports = {
  index,
  addFact,
  delFact
};

function index(req, res, next) {
  console.log(req.query)
  // Make the query object to use with UserSightings.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  UserSightings.find(modelQuery)
  .sort(sortKey).exec(function(err, userSightings) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('userSightings/index', {
      userSightings,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}

function addFact(req, res, next) {
  req.user.facts.push(req.body);
  req.user.save(function(err) {
    res.redirect('/userSightings');
  });
}

function delFact(req, res, next) {
  UserSightings.findOne({'facts._id': req.params.id}, function(err, userSighting) {
    userSighting.facts.id(req.params.id).remove();
    userSighting.save(function(err) {
      res.redirect('/userSightings');
    });
  });
}
