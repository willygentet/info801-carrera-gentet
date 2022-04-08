import React from "react";
import axios from "axios";

class Proposition extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message:"",
            valide:this.props.valid
        }
    }
    changeMessage = (event) =>{
        this.setState({message: event.target.value})
        axios.patch("/valid/"+this.props.id+"?fabricant="+this.props.proposition.fabricant+"&valid="+this.state.valide+"&message="+event.target.value)
        .then((res) => {
            this.setState({valide : res.data.valid})
        })
    }
    validate = (validate) =>{
        axios.patch("/valid/"+this.props.id+"?fabricant="+this.props.proposition.fabricant+"&valid="+validate+"&message="+this.state.message)
        .then((res) => {
            this.setState({valide : res.data.valid})
            this.props.fetchdata(false)
        })
      }
    render() {
        return (
            <div className="m-6">
                <div className="columns is-half is-centered">
                    <div className={'box column pr-6 pl-6 has-text-centered is-half  is-rounded'+ (this.state.valide ? ' has-background-success' : ' has-background-danger')}>
                        <h1 className="title has-text-white">{this.props.proposition.requierements}</h1>
                        <div className="subtitle has-text-white">Cout : {this.props.proposition.cost}</div>
                        <div className="subtitle has-text-white">Temps : {this.props.proposition.time}</div>
                        <div className="subtitle has-text-white">Quantité : {this.props.proposition.quantity}</div>
                        <label className="subtitle has-text-white" htmlFor="caracteristiques">Rédiger un message : </label>
                        <textarea className="textarea mb-2 is-info" defaultValue={this.props.proposition.message} placeholder="message" name="caracteristiques" id="caracteristiques" onChange={event => this.changeMessage(event)}></textarea>
                        {this.state.valide ? 
                        <button className="button" onClick={() => this.validate(false)}>Annuler</button>
                        : <button className="button" onClick={() => this.validate(true)}>Valider</button> }
                    </div>
                </div>
            </div>
        );
    }
}

export default Proposition;