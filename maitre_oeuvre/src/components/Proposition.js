import React from "react";
import axios from "axios";

class Proposition extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="m-6">
                <div className="columns is-half is-centered">
                    <div className={'box column pr-6 pl-6 has-text-centered is-half  is-rounded'+ (this.props.proposition.valid ? ' has-background-success' : ' has-background-danger')}>
                        <h1 className="title has-text-white">{this.props.proposition.requierements}</h1>
                        <div className="subtitle has-text-white">Cout : {this.props.proposition.cost}</div>
                        <div className="subtitle has-text-white">Temps : {this.props.proposition.time}</div>
                        <div className="subtitle has-text-white">Quantité : {this.props.proposition.quantity}</div>
                        {this.props.proposition.valid ? 
                        <button className="button">Annuler</button>
                        : <button className="button" >Valider</button> }
                    </div>
                </div>
            </div>
        );
    }
}

export default Proposition;