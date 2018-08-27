import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import "./App.css";
import Form from "./components/Form/FormLogic";
import Display from "./components/Display/Display";
import MainPage from "./components/MainPage/MainPage";
import Nav from "./components/Nav";
import UserPage from "./components/UserPage/UserPage";



const App = () => (
  
      <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/display" component={Display} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/user" component={UserPage} />
          </Switch>
      </div>
      </Router>
  
);

export default App;