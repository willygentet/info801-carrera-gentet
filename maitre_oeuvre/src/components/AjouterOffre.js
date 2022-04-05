import React from "react";

class AjouterOffre extends React.Component {

    render() {
        return (
            <div id="popup-resolution" className="modal">
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="box">
                    <h1 className="title has-text-centered">Ajouter une offre</h1>
                    <div id="form" className="has-text-centered">
                        <label className="subtitle" htmlFor="caracteristiques">Caractéristiques technique : </label>
                        <textarea className="textarea is-info" placeholder="Caractéristiques" name="caracteristiques" id="caracteristiques"></textarea>
                        <label className="subtitle" htmlFor="cout">Cout : </label>
                        <input className="input is-info" type="text" id="cout" name="cout" placeholder="Cout"></input>
                        <label className="subtitle" htmlFor="temps">Temps : </label>
                        <input className="input is-info" type="text" id="temps" name="temps" placeholder="Nb jours"></input>
                        <label className="subtitle" htmlFor="quantite">Quantité : </label>
                        <input className="input is-info" type="text" id="quantite" name="quantite" placeholder="Volume"></input>
                        <button className="button m-2 is-success" onClick={() => document.getElementById("popup-resolution").classList.remove('is-active')}>Ajouter</button>
                    </div>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={() => document.getElementById("popup-resolution").classList.remove('is-active')}></button>
        </div>
        );
    }
}

export default AjouterOffre;