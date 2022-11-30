import React, { Component } from 'react'
import EmployeeService from '../../services/EmployeeService';
import OrganizationService from '../../services/OrganizationService';
import DepartmentService from '../../services/DepartmentService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: '',
            departmentCode:'',
            organizationCode:'',
            orgList:[],
            devList:[]
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data.employee;
            let department = res.data.department;
            let organization = res.data.organization;
            this.setState({firstName: employee.firstName,
                lastName: employee.lastName,
                email : employee.email,
                departmentCode:department.departmentCode,
                organizationCode:organization.organizationCode
            });
        });
        OrganizationService.getOrgs().then( (res) =>{
            let orgListdata = res.data;
            
            this.setState({
                orgList: orgListdata
            });
            console.log(orgListdata);
        });
        DepartmentService.getDeps().then( (res) =>{
            let devListdata = res.data;
            
            this.setState({
                devList: devListdata
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email,departmentCode: this.state.departmentCode,organizationCode:this.state.organizationCode};
        EmployeeService.updateEmployee(employee,this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }
    changeOrgHandler= (event) => {
        this.setState({organizationCode: event.target.value});
    }
    changeDevHandler= (event) => {
        this.setState({departmentCode: event.target.value});
    }
    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> organization: </label>
                                            <select className="form-control"  id="organization" value={this.state.organizationCode} onChange={this.changeOrgHandler}>
                                            {this.state.orgList.map(org => (
                                                <option 
                                                value={org.organizationCode}
                                                >{org.organizationName}</option>
                                            ))}
                                            </select>
                    
                                        </div>
                                        <div className = "form-group">
                                            <label> department: </label>
                                            <select className="form-control"  id="department"  value={this.state.departmentCode} onChange={this.changeDevHandler}>
                                            {this.state.devList.map(dev => (
                                                <option
                                                value={dev.departmentCode}
                                                >{dev.departmentName}</option>
                                            ))}
                                            </select>
                    
                                        </div>
                                       

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent
