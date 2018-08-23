// Specifying all the packages we need and PORT setup.
// ===================================================
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./client/src/routes");
// const authRoutes = require('.routes/auth-routes');
// const profileRoutes = require('.routes/profile-routes');
// const passportSetup = require('./config.passport-setup');
// const keys = require('.config/keys');
// const cookieSession = require('cookie-session');
// const passport = require('passport');

// Requiring our item and user schema for mongo/mongoose.
// ======================================================
const db = require("./models/index");

// Using morgan for logger.
// ========================
app.use(logger("dev"));

// Using cookie-session for Google authentication
// app.use(cookieSession({
//   maxAge: 24 * 50 * 60 * 1000,
//   keys: [keys.session.cookieKey]
// }));

//initialize passport
// app.use(passport.initialize());
// app.use(passport.session());


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


// Connecting to the weirdbd database via mongoose.
// =================================================
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weirddb");


//set up routes
// app.use('/auth', authRoutes);
// app.use('/profile', profileRoutes);




// Setting out server to run and listen on the specific port.
// ===========================================================
app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
