import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

ReactDOM.render(<App />, document.getElementById("root"));

module.exports = router;
