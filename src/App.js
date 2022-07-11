import React, {Component} from 'react'
import axios from 'axios'

import './App.css';


const api = axios.create({
  baseURL: `https://api.publicapis.org/entries`
})

class App extends Component {
  state = {

    data: []

  }




  constructor(){
    super()
    api.get('').then(res => {
      console.log(res.data);
      this.setState({data: res.data})
    })
  }

  

  render(){

    let test = "Cos"


    return (
      <div className="App">
        <h1>Costam</h1>
        <h2>{test}</h2>
        <h3>{this.state.data[5]}</h3>
      </div>
    )
  

    }

    }



export default App;
