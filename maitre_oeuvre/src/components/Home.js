import React from "react";
import Offres from './Offres';
import AjouterOffre from './AjouterOffre';

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="columns is-four-fifths is-centered">
                <div className="column is-four-fifths">
                    <button className="button is-success" onClick={() => document.getElementById("popup-resolution").classList.add('is-active')}>Ajouter une offre</button>
                    <Offres from="Home" data={this.props.data} showDetail={this.props.showDetail}/>
                    <AjouterOffre fetchdata={this.props.fetchdata}/>
                </div>
            </div>
        );
    }
}

export default Home;