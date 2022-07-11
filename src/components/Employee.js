import React, { Component } from 'react'



class Employee extends Component {

    render() {


        return(
            <div className="employee">Name: {this.props.name}</div>
        )
        



    }



}


export default Employee