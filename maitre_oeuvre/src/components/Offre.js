import React from "react";

class Offre extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="columns m-4 is-mobile is-centered " style={{cursor:"pointer"}} onClick={() => this.props.showDetail(this.props.id)}>
                <div className="box pr-6 pl-6 has-text-centered is-half  has-background-dark is-rounded">
                    <h1 className="title has-text-white">{this.props.offre[Object.keys(this.props.offre)[0]].requierements}</h1>
                    <div className="subtitle has-text-white">Cout : {this.props.offre[Object.keys(this.props.offre)[0]].cost}</div>
                    <div className="subtitle has-text-white">Temps : {this.props.offre[Object.keys(this.props.offre)[0]].time}</div>
                    <div className="subtitle has-text-white">Quantité : {this.props.offre[Object.keys(this.props.offre)[0]].quantity}</div>
                </div>
            </div>
        );
    }
}

export default Offre;