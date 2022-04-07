import React from "react";
import './App.css';
import 'bulma/css/bulma.min.css';
import Home from './components/Home';
import DetailOffer from './components/DetailOffer';

import Navbar from './components/Navbar';
const data = {"offres": [
  {
      "requierements": "Faire un truc",
      "cost": 10000,
      "time": 32,
      "quantity": 12,
      "propositions": [
          {
              "requierements": "Faire un truc",
              "cost": 12000,
              "time": 32,
              "quantity": 12,
              "fabricant": "ikea",
              "valid": false,
              "message": ""
          },
          {
              "requierements": "Faire un autre truc",
              "cost": 11000,
              "time": 32,
              "quantity": 12,
              "fabricant": "ikea",
              "valid": false,
              "message": ""
          }
      ]
  }
]};
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        displayedTable:<Home />,
        components : {
          "Home": <Home data={data} showComponent={this.showComponent} />,
          "Detail": <DetailOffer offres={data.offres[0]} showComponent={this.showComponent}/>
        }
    }
  }
  showComponent = (componentName) => {
    this.setState({displayedTable: componentName});
  }
  
  componentWillMount(){
    this.showComponent('Home')
  }
  render() {
    return (
      <div className="App">
          <Navbar/>
          {this.state.components[this.state.displayedTable]}
      </div>
    );
  }
}

export default App;
