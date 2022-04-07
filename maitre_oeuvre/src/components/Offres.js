import React from "react";
import Offre from "./Offre";

class Offres extends React.Component {
    constructor(props) {
        super(props);   
      }
    createOffer =  (offre) => {
        return <Offre id={Object.keys(offre)[0]} showDetail={this.props.showDetail} offre={offre} key={offre.key}/>;
    }
    createOffers =  (offres) => {
        return offres.map(this.createOffer);
    }
    render() {
        return (
            <div className="columns is-mobile is-centered ">
                <div className="p-5 has-text-centered is-one-third">
                    <h1 className="title">Offres</h1>
                    {this.createOffers(this.props.data)}
                </div>
            </div>
        );
    }
}

export default Offres;