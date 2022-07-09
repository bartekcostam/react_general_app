import React, {Component} from 'react'
import axios from 'axios'

import './App.css';


class App extends Component {



  componentDidMount() {

    const data = axios.get("https://dummy.restapiexample.com/api/v1/employees",null).then(response => {
      console.log(response);
    })
    
  }



  render(){




    return (
      <div className="App">
        <h1>Costam</h1>
        
      </div>
    )
  

    }

    }



export default App;
