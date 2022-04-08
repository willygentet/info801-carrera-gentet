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
    this.showComponent('Loading')
    axios.defaults.baseURL = 'http://127.0.0.1:5000';
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    this.fetch_data()
  }
  fetch_data= (redirect = true) =>{
    console.log("aaaa")
    if(redirect){
    axios.get("/offers")
    .then((res) => {
      this.setState({data:res.data},this.start(res.data))
    })
  }else{
    axios.get("/offers")
      .then((res) => {
        this.setState({data:res.data})
      })
    }
  }
  start = (data) =>{
    this.setState({components : {
      "Home": <Home fetchdata={this.fetch_data} data={data} showDetail={this.showDetail} />
    }}, this.showComponent('Home'))
   
  }
  showDetail = (id) =>{
    let n = id.substring(5)
    n = n -1
    this.setState({components : {
      "Home": <Home fetchdata={this.fetch_data} data={this.state.data} showDetail={this.showDetail} />,
      "Detail": <DetailOffer id={id} fetchdata={this.fetch_data} offres={this.state.data[n]} showComponent={this.showComponent}/>
    }}, this.showComponent('Detail'))
   
  }
  showComponent = (componentName) => {
    this.setState({displayedTable: componentName});
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
