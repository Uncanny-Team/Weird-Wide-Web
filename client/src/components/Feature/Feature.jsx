import React from "react";
import FeatureTags from "./FeatureTags";
import FeatureLinks from "./FeatureLinks";
import FeatureRating from "./FeatureRating";
import FeatureDesc from "./FeatureDesc";
import Comment from "./Comment";

class Feature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="container www-content">
                <div className="row">
                    <div className="col s12">
                        <h5><span id="articleTitle">{this.props.title}</span></h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col l3 m3 s12">
                        <img className="materialboxed www-thumbnail" id="articleImage" src={this.props.image}
                            alt="Weird Image" />
                        <FeatureRating
                        weirdness={this.props.weirdness} />
                        <div className="row">
                            <div className="col s12">
                                <FeatureTags
                                tags={this.props.tags} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <ul>
                                    <FeatureLinks 
                                    url={this.props.url}/>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col l9 m9 s12">

                        <div className="row">
                            <div className="col s12">
                                <FeatureDesc
                                description={this.props.description}
                                />
                            </div>

                            <Comment />

                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Feature;