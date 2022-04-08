import React from "react";
import axios from "axios";

class Proposition extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message:this.props.proposition.message,
            valide:this.props.proposition.valid
        }
    }
    changeMessage = (event) =>{
        this.setState({message: event.target.value})
        axios.patch("/valid/"+this.props.id+"?fabricant="+this.props.proposition.fabricant+"&valid="+this.state.valide+"&message="+event.target.value)
        .then((res) => {
            if(res.data != null){
                this.setState({valide : res.data.valid,message : res.data.message})
                this.props.fetchdata(false)
            }
        })
    }
    validate = (validate) =>{
        axios.patch("/valid/"+this.props.id+"?fabricant="+this.props.proposition.fabricant+"&valid="+validate+"&message="+this.state.message)
        .then((res) => {
            if(res.data != null){
                this.setState({valide : res.data.valid,message : res.data.message})
                this.props.fetchdata(false)
            }
        })
      }
    render() {
        return (
            <div className="m-6">
                <div className="columns is-four-fifths is-centered">
                    <div className={'box column pr-6 pl-6 has-text-centered is-four-fifths  is-rounded'+ (this.state.valide ? ' has-background-success' : ' has-background-danger')}>
                        <h1 className="title has-text-white">{this.props.proposition.requierements}</h1>
                        <div className="subtitle has-text-white">Cout : {this.props.proposition.cost}</div>
                        <div className="subtitle has-text-white">Temps : {this.props.proposition.time}</div>
                        <div className="subtitle has-text-white">Quantité : {this.props.proposition.quantity}</div>
                        <label className="subtitle mb-2 has-text-white" htmlFor="caracteristiques">Rédiger un message : </label>
                        <textarea className="textarea mt-2 mb-2 is-info" defaultValue={this.props.proposition.message} placeholder="message" name="caracteristiques" id="caracteristiques" onChange={event => this.changeMessage(event)}></textarea>
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