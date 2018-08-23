import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form/FormLogic";

const App = () => <Form/>;
const authRoutes = require('.routes/auth-routes');
const profileRoutes = require('.routes/profile-routes'); 
const app = require('express');
const passportSetup = require('./config.passport-setup'); 
const mongoose = require('mongoose');
const keys = require('.config/keys');
const cookieSession = require('cookie-session'); 
const passport = require('passport');

app.use(cookieSession({
maxAge: 24 * 50 *60 * 1000, 
keys: [keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
console.log("connected to mongodb");
});

//set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);


app.get("/", (req, res) => {
	res.render('/Home', { user: req.user });
});


export default App;
