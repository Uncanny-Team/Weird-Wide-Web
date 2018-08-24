import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Form from "./components/Form/FormLogic";
import Display from "./components/Display/Display";
import React, { Component } from "react";
import Nav from "./components/Nav";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Feature/>
        <Footer/>
      </div>
    );
  }
}


export default App;
