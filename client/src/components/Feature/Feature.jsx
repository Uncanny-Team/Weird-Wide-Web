import React from "react";
import FeatureTags from "./FeatureTags";
import FeatureLinks from "./FeatureLinks";
import FeatureRating from "./FeatureLinks";
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
                        <h5><span id="articleTitle">Winchester Mystery House</span></h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col l3 m3 s12">
                        <img className="materialboxed www-thumbnail" id="articleImage" src="https://www.santaclara.org/wp-content/uploads/2015/12/Winchester-Banner-1.jpg"
                            alt="Weird Image" />
                        <FeatureRating />
                        <div className="row">
                            <div className="col s12">
                                <FeatureTags />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <ul>
                                    <FeatureLinks />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col l9 m9 s12">

                        <div className="row">
                            <div className="col s12">
                                <FeatureDesc />
                            </div>

                            {/* <Comment /> */}

                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Feature;