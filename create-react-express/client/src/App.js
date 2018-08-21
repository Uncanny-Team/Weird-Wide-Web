import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import LoginModal from "./components/LoginModal";
import PHContent from "./components/PHContent";

class App extends Component {
  render() {
    return (
      <div>
        <Dropdown />
        <Navbar />
        <LoginModal />
        <PHContent />
      </div>
    );
  }
}

export default App;
