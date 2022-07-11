import React, { Component} from 'react'
import Employee from './Employee/Employee'


class Employee extends Component {
    render() {

            const employess = this.props.employees.map((employee,index) => {
                return (<Employee key={employee.id} name={employee.employee_name} />)

            })


            return (<div className={employees}> 
                {employees}
              </div>)






    }
}

export default Employees