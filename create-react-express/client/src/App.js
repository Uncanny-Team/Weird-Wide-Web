import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import LoginModal from "./components/LoginModal";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Dropdown />
        <Navbar />
        <LoginModal />
        <Feature/>
        <Footer/>
      </div>
    );
  }
}

export default App;
