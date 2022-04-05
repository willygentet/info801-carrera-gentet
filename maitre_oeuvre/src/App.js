import React from "react";
import './App.css';
import 'bulma/css/bulma.min.css';
import Home from './components/Home';
import DetailOffer from './components/DetailOffer';

import Navbar from './components/Navbar';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        displayedTable:<Home />,
        components : {
          "Home": <Home showComponent={this.showComponent} />,
          "Detail": <DetailOffer showComponent={this.showComponent}/>
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
