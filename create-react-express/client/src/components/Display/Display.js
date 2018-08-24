import React, { Component } from "react";
import API from "../../utils/API";
import { Input } from "../Form/Input";
import { Button } from "../Form/Button";
import { Range } from "../Form/Range";
import { Card} from "../Display/Card";
import { Image } from "../Display/Image";
import { Text } from "../Display/Text";
import { Link } from "../Display/Link";
import { Container } from "../Display/Container";

class Display extends Component {
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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
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

    };

    handleOptionChange = (changeEvent) => {
        this.setState({
            medium: changeEvent.target.value
        });
    };

    handleRangeChange = (changeEvent) => {
        this.setState({
            weirdness: changeEvent.target.value
        });
    };

    loadItems = (res) => {
        this.setState({
            items: res.data, title: "", category: "", medium: "", nsfw: "", url: "", description: "", weirdness: "", comments: "" });
    } 

    handleSubmit = event => {
        event.preventDefault();
        API.searchItems({
            medium: this.state.medium,
            weirdness: this.state.weirdness,
            tags: this.state.tags,
            nsfw: this.state.nsfw
        })
        .then(res => this.loadItems(res));

    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <br />
                        <h6>
                            Choose the medium you like to see.
                        </h6>
                        <p>

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
                    <p>
                        <br/>
                        <h6>
                            Choose how weird! 1 is a little weird and 5 is melt your eyes out weird.
                            </h6>
                    <br />
                            <label >
                                <input value="1" className="with-gap" name="group3" type="radio" onChange={this.handleRangeChange} />
                                <span>1</span>
                            </label>
                            {" "}
                            <label >
                                <input value="2" className="with-gap" name="group3" type="radio" onChange={this.handleRangeChange} />
                                <span>2</span>
                            </label>
                            {" "}
                            <label >
                                <input value="3" className="with-gap" name="group3" type="radio" onChange={this.handleRangeChange} />
                                <span>3</span>
                            </label>
                            {" "}
                            <label >
                                <input value="4" className="with-gap" name="group3" type="radio" onChange={this.handleRangeChange} />
                                <span>4</span>
                            </label>
                            {" "}
                            <label >
                                <input value="5" className="with-gap" name="group3" type="radio" onChange={this.handleRangeChange} />
                                <span>5</span>
                            </label>
                            {" "}
                            </p>
                    <Input
                        value={this.state.tags}
                        onChange={this.handleInputChange}
                        name="tags"
                        placeholder="Tag (Type a tag you wish to search for."
                    />
                    <div className="switch">
                        <label onChange={this.handleToggleChange}>
                            SFW
                    <input type="checkbox" />
                            <span className="lever"></span>
                            NSFW
                    </label>
                    </div>
                    <br />
                    <Button
                        onClick={this.handleSubmit}
                    />
                </form>
                
                {this.state.items.length ? (
              <Card>
                {this.state.items.map(item => (
                    <Container key={item.title}>
                    <strong>
                        {item.title}
                        </strong>
                        <br/>
                        <a>
                            {item.url}
                            </a>
                            <p>
                                Author: {item.author} || Category: {item.category} || Medium: {item.medium}
                                </p>
                                <p>
                                    Description: {item.description}
                                    </p>
                    </Container>
                ))}
              </Card>
            ) : (
              <h3>No Result Found Yet</h3>
            )} 
                
                                   
            </div>
        );
    }
}

export default Display;