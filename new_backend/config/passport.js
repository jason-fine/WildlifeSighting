const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const User = require('../models/users')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    // a user has logged in with OAuth...
    User.findOne({ 'googleId': profile.id}, function(err, user){ //in that function it could be user or users
      if (err) return cb(err);
      if (student) {
        return cb(null, student);
      } else {
        let newUser = new User({
          googleId: profile.id
        });
        newUser.save(function(err){
          if (err) return cb(err);
          return cb(null, newUser)
        });
      }
    });
  }
));
passport.serializeUser(function(user, done) { //user could be users
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});