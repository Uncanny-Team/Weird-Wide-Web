import React, { Component } from "react";
import { Input } from "./Input";
import { Button } from "./Button";


class Form extends Component {
    state = {
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
        weirdness: "",
        comments: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    render() {
        return (
            <div>
                <h1>
                    Create You own weird item!
                </h1>
                <form>
                    <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                    />
                    <Input
                    value={this.state.category}
                    onChange={this.handleInputChange}
                    name="category"
                    placeholder="Category (required)"
                    />
                    <Input
                    value={this.state.medium}
                    onChange={this.handleInputChange}
                    name="medium"
                    placeholder="Medium (required)"
                    />
                    <Input
                    value={this.state.tags}
                    onChange={this.handleInputChange}
                    name="tags"
                    placeholder="Submit your tags here!"
                    />
                    <Input
                    value={this.state.url}
                    onChange={this.handleInputChange}
                    name="url"
                    placeholder="Place your url link here."
                    />
                    <Input
                    value={this.state.image}
                    onChange={this.handleInputChange}
                    name="image"
                    placeholder="Place your image link here."
                    />
                    <Input
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    name="description"
                    placeholder="Give a short description of what your weird contribution is."
                    />
                    <Button
                    disabled={!(this.state.title && this.state.category && this.state.medium && this.state.tags && this.state.url && this.state.image && this.state.description)}
                    onClick={this.handleSubmit}
                    />
                </form>
            </div>
        );
    }
}

export default Form;