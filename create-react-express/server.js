// Specifying all the packages we need and PORT setup.
// ===================================================
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./client/src/routes");

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

// Connecting to the weirdbd database via mongoose.
// =================================================
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weirddb");

// Setting out server to run and listen on the specific port.
// ===========================================================
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
