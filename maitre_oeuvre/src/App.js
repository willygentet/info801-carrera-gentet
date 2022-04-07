import React from "react";
import './App.css';
import 'bulma/css/bulma.min.css';
import Home from './components/Home';
import DetailOffer from './components/DetailOffer';
import Loading from "./components/Loading";
import axios from "axios";

import Navbar from './components/Navbar';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        displayedTable:<Home />,
        components : {
          "Loading": <Loading />,},
        data: [],
    }
  }
  componentDidMount(){
    axios.defaults.baseURL = 'http://127.0.0.1:5000';
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get("/offers")
        .then((res) => {
          this.setState({data:res.data},this.start(res.data))
        })
  }
  start = (data) =>{
    this.setState({components : {
      "Loading": <Loading />,
      "Home": <Home data={data} showDetail={this.showDetail} />,
      "Detail": <DetailOffer offres={data} showComponent={this.showComponent}/>
    }}, this.showComponent('Home'))
   
  }
  showDetail = (id) =>{
    let n = id.substring(5)
    n = n -1
    this.setState({components : {
      "Loading": <Loading />,
      "Home": <Home data={this.state.data} showDetail={this.showDetail} />,
      "Detail": <DetailOffer id={id} offres={this.state.data[n]} showComponent={this.showComponent}/>
    }}, this.showComponent('Detail'))
   
  }
  showComponent = (componentName) => {
    this.setState({displayedTable: componentName});
  }
  componentWillMount(){
    this.showComponent('Loading')
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
