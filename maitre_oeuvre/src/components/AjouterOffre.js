import React from "react";
import axios from "axios";

class AjouterOffre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requirements:"",
            cost:0,
            time:0,
            quantity:0
        }
      }
    addOffer(){
        console.log("oh connard")
        axios.defaults.baseURL = 'http://127.0.0.1:5000';
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.put("/offers?requierements="+this.state.requirements+"&cost="+this.state.cost+"&time="+this.state.time+"&quantity="+this.state.quantity)
            .then((res) => {
                document.getElementById("popup-resolution").classList.remove('is-active')
            })
    }
    render() {
        return (
            <div id="popup-resolution" className="modal">
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="box">
                    <h1 className="title has-text-centered">Ajouter une offre</h1>
                    <div id="form" className="has-text-centered">
                        <label className="subtitle" htmlFor="caracteristiques">Caractéristiques technique : </label>
                        <textarea className="textarea is-info" placeholder="Caractéristiques" name="caracteristiques" id="caracteristiques" onChange={event => this.setState({requirements: event.target.value})}></textarea>
                        <label className="subtitle" htmlFor="cout">Cout : </label>
                        <input className="input is-info" type="number" id="cout" name="cout" placeholder="Cout" onChange={event => this.setState({cost: event.target.value})}></input>
                        <label className="subtitle" htmlFor="temps">Temps : </label>
                        <input className="input is-info" type="number" id="temps" name="temps" placeholder="Nb jours" onChange={event => this.setState({time: event.target.value})}></input>
                        <label className="subtitle" htmlFor="quantite">Quantité : </label>
                        <input className="input is-info" type="number" id="quantite" name="quantite" placeholder="Volume" onChange={event => this.setState({quantity: event.target.value})}></input>
                        <button className="button m-2 is-success" onClick={() => this.addOffer()}>Ajouter</button>
                    </div>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={() => 
                document.getElementById("popup-resolution").classList.remove('is-active')}></button>
        </div>
        );
    }
}

export default AjouterOffre;