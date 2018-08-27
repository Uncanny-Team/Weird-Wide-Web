import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import "./App.css";
import Form from "./components/Form/FormLogic";
import Display from "./components/Display/Display";
import MainPage from "./components/MainPage/MainPage";
import React, { Component } from "react";
import Nav from "./components/Nav";



class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/display" component={Display} />
          <Route exact path="/form" component={Form} />
          </Switch>
      </div>
      </Router>
    );
  }
}
export default App;