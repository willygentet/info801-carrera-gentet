import React from "react";

class DetailOffer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="columns ">
                    <button className="button column is-one-fifth p-2 is-danger" onClick={() => this.props.showComponent('Home')}>Return</button>
                </div>
                <div className="columns is-half is-centered">
                    <div className="box column pr-6 pl-6 has-text-centered is-half  has-background-dark is-rounded">
                        <h1 className="title has-text-white">{this.props.offres.requierements}</h1>
                        <div className="subtitle has-text-white">Cout : {this.props.offres.cost}</div>
                        <div className="subtitle has-text-white">Temps : {this.props.offres.time}</div>
                        <div className="subtitle has-text-white">Quantité : {this.props.offres.quantity}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailOffer;