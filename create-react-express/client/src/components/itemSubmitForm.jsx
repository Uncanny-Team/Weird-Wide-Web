import React from "react";

class itemSubmitForm extends React.Component {

    render() {
        return (
            <div className="form-group">
                <textarea className="form-control" rows="20" {...props} />
            </div> //I stole this from our books project so hopefully it works.  :P
        )
    }
}