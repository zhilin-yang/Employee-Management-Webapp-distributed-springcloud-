import React, { Component } from 'react'
import EmployeeService from '../../services/EmployeeService'
import { Link } from 'react-router-dom'
import jwt from '../user/jwt';


class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: [],
                role:jwt.getRole(),
                firstNameCheck:''
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.changeFirstNameCheckHandler = this.changeFirstNameCheckHandler.bind(this);
    }
    changeFirstNameCheckHandler= (event) => {
        this.setState({firstNameCheck: event.target.value});
    }
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }
    searchEmployee = (e) => {
        e.preventDefault();
        EmployeeService.searchEm(this.state.firstNameCheck).then(res =>{
            this.setState({ employees: res.data});
            //this.props.history.push('/employees');
        });
       
    }
    render() {
        return (
            <div >
                <div style={{marginTop: '20px',marginBottom: '30px',borderBottom: '1px solid black',boxShadow: '0px 1px 1px #dee2e6',borderColor:'#dee2e6'}}>
            
                    <div style={{display: 'inline-block', backgroundColor: '#497BFF', borderRadius: '10px 10px 0 0',width: '130px', height: '35px',textAlign: 'center',fontWeight: 'bold',lineHeight: '35px'}}>
                        <Link to="/employees" ><span style={{color: '#666'}}>Employee</span></Link>
                    </div>
                    {this.state.role==0 ? <div style={{display: 'inline-block', backgroundColor: '#42A2B8', borderRadius: '10px 10px 0 0',width: '130px', height: '35px',textAlign: 'center',fontWeight: 'bold',lineHeight: '35px'}}>
                        <Link to='/department'><span style={{color: '#666'}}>Department</span></Link>
                    </div>:null}
                    {this.state.role==0 ? <div style={{display: 'inline-block',backgroundColor: '#F4F4F4', borderRadius: '10px 10px 0 0',width: '130px', height: '35px',textAlign: 'center',fontWeight: 'bold',lineHeight: '35px'}}>
                        <Link to='/organization'><span style={{color: '#666'}}>Organization</span></Link>
                    </div>:null}
                    
               </div>
                 
                    <h2 className="text-center">Employees List</h2>
                <div style={{display: 'inline-block',width:'100%',}} >
                <button className="btn btn-success" onClick={this.searchEmployee} style={{float: 'right',marginLeft: '15px'}}>Search</button>
                        <input placeholder="First Name" name="firstName"  value={this.state.firstNameCheck} onChange={this.changeFirstNameCheckHandler} style={{width: '200px',float: 'right',marginTop:'5px',borderRadius: '4px',border:'1px solid #dee2e6'}}/>
                        
                </div>
                 <div className = "row">
                 {this.state.role==0 ? <button className="btn btn-primary"  onClick={this.addEmployee}> Add Employee</button>:null}
                    
                    
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                   <th> Employee ID</th>
                                    <th> Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> {employee.id} </td>  
                                             <td> { employee.firstName} </td>   
                                             <td> {employee.lastName}</td>
                                             <td> {employee.email}</td>
                                             <td>
                                                 {this.state.role==0 ?  <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>:null}
                                                 {this.state.role==0 ?  <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>:null}
                                                
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListEmployeeComponent
