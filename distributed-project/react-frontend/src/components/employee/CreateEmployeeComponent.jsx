import React, { Component } from 'react'
import EmployeeService from '../../services/EmployeeService';
import OrganizationService from '../../services/OrganizationService';
import DepartmentService from '../../services/DepartmentService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
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
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            OrganizationService.getOrgs().then( (res) =>{
                let orgListdata = res.data;
                
                this.setState({
                    organizationCode:orgListdata[0].organizationCode,
                    orgList: orgListdata
                });
                console.log(orgListdata);
            });
            DepartmentService.getDeps().then( (res) =>{
                let devListdata = res.data;
                
                this.setState({
                    departmentCode:devListdata[0].departmentCode,
                    devList: devListdata
                });
            });
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({firstName: employee.firstName,
                    lastName: employee.lastName,
                    email : employee.email
                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName,lastName: this.state.lastName, email: this.state.email,departmentCode: this.state.departmentCode,organizationCode:this.state.organizationCode};
        

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/employees');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div >
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                 onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
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
 
                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
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

export default CreateEmployeeComponent
