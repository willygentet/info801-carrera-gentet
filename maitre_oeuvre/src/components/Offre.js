import React from "react";

class Offre extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="columns is-mobile is-centered " onClick={() => this.props.showComponent('Detail')}>
                <div className="box pr-6 pl-6 has-text-centered is-half  has-background-dark is-rounded">
                    <h1 className="title has-text-white">{this.props.offre.requierements}</h1>
                    <div className="subtitle has-text-white">Cout : {this.props.offre.cost}</div>
                    <div className="subtitle has-text-white">Temps : {this.props.offre.time}</div>
                    <div className="subtitle has-text-white">Quantité : {this.props.offre.quantity}</div>
                </div>
            </div>
        );
    }
}

export default Offre;