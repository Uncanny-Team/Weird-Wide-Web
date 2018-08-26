import React, { Component } from "react";
import Feature from "../Feature"
import Footer from "../Footer";

class MainPage extends Component {
    state = {
        user: "",
        userId: "",
        weirdScore: 0,
        loggedIn: false
    };

    componentDidMount() {

    }
    render() {
        return (
            <div>
                <Feature/>
                <Footer/>
            </div>
        );
    }
}

export default MainPage;