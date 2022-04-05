import React from "react";

class Navbar extends React.Component {

    render() {
        return (
            <div className="columns is-mobile is-centered has-background-dark">
                <div className="p-5 has-text-centered is-one-third has-background-dark">
                    <h1 className="title has-text-white">Maitre d'oeuvre</h1>
                </div>
            </div>
        );
    }
}

export default Navbar;