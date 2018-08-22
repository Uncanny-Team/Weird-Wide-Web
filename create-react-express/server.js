// Specifying all the packages we need and PORT setup.
// ===================================================
const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const authRoutes = require('.routes/auth-routes');
const profileRoutes = require('.routes/profile-routes');
const passportSetup = require('./config.passport-setup');
const keys = require('.config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

// Requiring our item and user schema for mongo/mongoose.
// ======================================================
const db = require("./models/index");

// Using morgan for logger.
// ========================
app.use(logger("dev"));

// Using cookie-session for Google authentication
app.use(cookieSession({
  maxAge: 24 * 50 * 60 * 1000,
  keys: [keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());


// Using body-parser.
// ===================
app.use(bodyParser.urlencoded({ extended: true }));

// Connecting to the weirdbd database via mongoose.
// =================================================
mongoose.connect("mongodb://localhost/weirddb");

// Serve up static assets (usually on Heroku.)
// =============================================
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Api routes to be listed below.
// ================================
//set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);


app.get("/", (req, res) => {
  res.render('/Home', { user: req.user });
});

// Api route to post new weird item to the database.
// ==================================================
app.post("/submit", function (req, res) {
  db.Item.create(req.body)
    .then(function (dbItem) {

      res.json(dbItem);
    })
    .catch(function (err) {

      res.json(err);
    });
});

// Api route to post for a new user.
// ===================================
app.post("/user", function (req, res) {
  db.User.create(req.body)
    .then(function (dbUser) {

      res.json(dbUser);
    })
    .catch(function (err) {

      res.json(err);
    });
});

// Api route to get all items from database.
// ============================================
app.get("/", function(req, res) {
  db.Item.findAll(req.body)
  .then(function(dbItem) {

    res.json(dbItem);
  })
  .catch(function(err) {

    res.json(err);
  });
});

// Send every request to the React app.
// ========================================
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Setting out server to run and listen on the specific port.
// ===========================================================
app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
