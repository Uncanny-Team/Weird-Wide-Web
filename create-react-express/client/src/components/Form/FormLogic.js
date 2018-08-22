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
        nsfw: false,
        comments: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.category && this.state.medium && this.state.tags && this.state.url && this.state.image && this.state.description) {

        }
    };

    handleOptionChange = (changeEvent) => {
        this.setState({
            medium: changeEvent.target.value
        });
    };

    handleToggleChange = (changeEvent) => {

        if (this.state.nsfw === false) {
            this.setState({
                nsfw: true
            });
        }
        else if (this.state.nsfw === true) {
            this.setState({
                nsfw: false
            });
        }

    }


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
                    <div>
                        <br />
                        <p>
                            <p>
                                Choose the medium your weird contribution is.
      </p>
                            <br />
                            <label >
                                <input value="Article" className="with-gap" name="group3" type="radio" onChange={this.handleOptionChange} />
                                <span>Article</span>
                            </label>
                            {" "}
                            <label>
                                <input value="Video" className="with-gap" name="group3" type="radio" value="Video" onChange={this.handleOptionChange} />
                                <span>Video</span>
                            </label>
                            {" "}
                            <label>
                                <input value="Audio" className="with-gap" name="group3" type="radio" value="Audio" onChange={this.handleOptionChange} />
                                <span>Audio</span>
                            </label>
                            {" "}
                            <label>
                                <input value="Video game" className="with-gap" name="group3" type="radio" value="Video Game" onChange={this.handleOptionChange} />
                                <span>Video Game</span>
                            </label>
                            {" "}
                            <label>
                                <input value="Art" className="with-gap" name="group3" type="radio" value="Art" onChange={this.handleOptionChange} />
                                <span>Art</span>
                            </label>
                            {" "}
                            <label>
                                <input value="Website" className="with-gap" name="group3" type="radio" value="Website" onChange={this.handleOptionChange} />
                                <span>Website</span>
                            </label>
                        </p>
                    </div>
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
                        <div class="switch">
                            <label onChange={this.handleToggleChange}>
                                SFW
                    <input type="checkbox" />
                                <span class="lever"></span>
                                NSFW
                    </label>
                        </div>
                        <br />
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