import React from "react";
import Offres from './Offres';
import AjouterOffre from './AjouterOffre';

class Home extends React.Component {

    render() {
        return (
            <div>
                <button className="button is-success" onClick={() => document.getElementById("popup-resolution").classList.add('is-active')}>Ajouter une offre</button>
                <Offres data={this.props.data} showComponent={this.props.showComponent}/>
                <AjouterOffre/>
            </div>
        );
    }
}

export default Home;