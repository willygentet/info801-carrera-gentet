import React from "react";
import axios from "axios";

class Offre extends React.Component {

    componentDidMount() {
        axios.defaults.baseURL = 'http://127.0.0.1:5000';
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get("/offers")
            .then((res) => {
                console.log(res.data)
            })
    }

    render() {
        return (
            <div class="columns is-mobile is-centered ">
                <div class="p-5 has-text-centered is-one-third">
                    <h1 class="title">Offres</h1>
                    <div class="subtitle">random offres</div>
                </div>
            </div>
        );
    }
}

export default Offre;