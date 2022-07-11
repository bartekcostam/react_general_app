import React, {Component} from 'react'
import axios from 'axios'

import './App.css';


class App extends Component {


  state = {
    employees: []
  }


  componentDidMount() {

    axios.get("https://dummy.restapiexample.com/api/v1/employees",null).then(response => {
      const employees = response.data
      this.setState({employees: employees})
    })
    /*console
0: "data"
1: "status"
2: "statusText"
3: "headers"
4: "config"
5: "request"
length: 6
    */
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
