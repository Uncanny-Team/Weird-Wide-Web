import React, { Component } from "react";
import API from "../../utils/API";
import Feature from "../Feature";
import Footer from "../Footer";

class MainPage extends Component {
    state = {
        items: [],
        user: "",
        userId: "",
        weirdScore: 0,
        loggedIn: false,
        title: "",
        category: "",
        medium: "",
        tags: "",
        url: "",
        image: "",
        description: "",
        exposure: "",
        weirdness: 0,
        nsfw: false,
        comments: ""
    };

    loadItems = (res) => {
     //   console.log(res.data);
        this.setState({
            items: res.data, title: "", category: "", medium: "", nsfw: "", url: "", description: "", weirdness: "", comments: "" });
    };

    handleRandom = () => {
    API.randomItem({})
    .then(res => this.loadItems(res));
    
    };

    componentDidMount() {
        console.log("Testing randomize");
        this.handleRandom();

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