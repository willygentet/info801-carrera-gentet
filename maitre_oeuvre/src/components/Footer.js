import React from "react";

class Footer extends React.Component {

    render() {
        return (
            <footer className="footer pt-3 pb-3 has-background-dark" style={{position:"fixed",bottom:0,width:"100%"}}>
                <div className="content has-text-centered">
                    <p className="has-text-white">
                        &copy;  <strong className="has-text-white">CARRERA Thomas</strong>, <strong className="has-text-white">GENTET Willy</strong> - 2022.
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;