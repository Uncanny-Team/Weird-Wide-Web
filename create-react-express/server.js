// Specifying all the packages we need and PORT setup.
// ===================================================
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./client/src/routes");
const authRoutes = require('.routes/auth-routes');
const profileRoutes = require('.routes/profile-routes'); 
const app = require('express');
const keys = require('.config/keys');
const cookieSession = require('cookie-session'); 
const passport = require('passport');
const passportSetup = require('./config.passport-setup'); 


app.use(cookieSession({
maxAge: 24 * 50 *60 * 1000, 
keys: [keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Requiring our item and user schema for mongo/mongoose.
// ======================================================
const db = require("./models/index");

// Using morgan for logger.
// ========================
app.use(logger("dev"));


// Using body-parser.
// ===================

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


// Serve up static assets (usually on Heroku.)
// =============================================
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes!
// =============
app.use(routes);

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);


app.get("/", (req, res) => {
	res.render('/Home', { user: req.user });
});


// Connecting to the weirdbd database via mongoose.
// =================================================
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weirddb");

//connect to mongodb - originally from Passport Documentation
// mongoose.connect(keys.mongodb.dbURI, () => {
//   console.log("connected to mongodb");
//   });

// Setting out server to run and listen on the specific port.
// ===========================================================
app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
