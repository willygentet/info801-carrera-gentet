import React from "react";

class DetailOffer extends React.Component {

    render() {
        return (
            <div>
                <h1>AWAY</h1>
                <button className="button is-danger" onClick={() => this.props.showComponent('Home')}>Return</button>
            </div>
        );
    }
}

export default DetailOffer;