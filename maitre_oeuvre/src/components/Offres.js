import React from "react";
import Offre from "./Offre";
import axios from "axios";

class Offres extends React.Component {

    componentDidMount() {
        axios.defaults.baseURL = 'http://127.0.0.1:5000';
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        /*axios.get("/offers")
            .then((res) => {
                console.log(res.data)
            })*/
    }
    createOffer =  (offre) => {
        return <Offre showComponent={this.props.showComponent} offre={offre} key={offre}/>;
    }
    createOffers =  (offres) => {
        return offres.map(this.createOffer);
    }
    render() {
        return (
            <div className="columns is-mobile is-centered ">
                <div className="p-5 has-text-centered is-one-third">
                    <h1 className="title">Offres</h1>
                    {this.createOffers(this.props.data.offres)}
                </div>
            </div>
        );
    }
}

export default Offres;