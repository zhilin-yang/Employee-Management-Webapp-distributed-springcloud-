import React, { Component } from 'react'
import EmployeeService from '../../services/EmployeeService'
import OrganizationService from '../../services/OrganizationService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            orgName:'',
            depName:'',
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({
                employee: res.data.employee,
                orgName: res.data.organization.organizationName,
                depName: res.data.departmentDto.departmentName
            });
        });
        

    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee First Name: </label>
                            <div> { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Last Name: </label>
                            <div> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Email: </label>
                            <div> { this.state.employee.email }</div>
                        </div>
                        <div className = "row">
                            <label> organizaition: </label>
                            <div> { this.state.orgName}</div>
                        </div>
                        <div className = "row">
                            <label> department: </label>
                            <div> { this.state.depName}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
