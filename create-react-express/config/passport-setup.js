const passport = require('passport');
const keys = require('./keys');
// const User = require('../userModel');
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require('passport-google-oauth20');
const db = require("../models");

passport.use(
    new GoogleStrategy({
    // options for the strategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecred: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    // check if user already exists in our database
    
    db.User.findOne({googleId: profile.id}).then((dbUser) => {
        if (dbUser){
             // already have user in db
            console.log("user is: " + dbUser);
            done(null, dbUser);
        } else {
            // if not, create new user in db
            new User ({
                username: profile.displayName,
                googleId: profile.id
            }).save().then((newUser) => {
                console.log("new User Created: " + newUser);
                done(null, newUser);
            });
        }
    });

})
);


passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    function(email, password, done) {
      db.User.findOne({
        where: {
          email: email
        }
      }).then(function(dbUser) {
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect email."
          });
        } else if (!dbUser.validatePassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }

        return done(null, dbUser);
      });
    }
  )
);

passport.serializeUser((user, done)=> {
    done(null, user.id); 
})

passport.deserializeUser((id, done)=> {
    User.findById(id).then((user) => {
        done(null, user.id); 
    });
});

// passport.serializeUser(function(user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function(obj, cb) {
//   cb(null, obj);
// });

module.exports = passport;

