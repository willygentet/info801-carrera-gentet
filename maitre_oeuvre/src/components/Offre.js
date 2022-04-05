import React from "react";

class Offre extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="columns is-mobile is-centered">
                <div className="p-5 has-text-centered is-one-third">
                    <h1 className="title">{this.props.name}</h1>
                </div>
            </div>
        );
    }
}

export default Offre;