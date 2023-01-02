import React, { Component } from 'react'
import SalaryService from '../../services/SalaryService'

class ListSalaryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                salaries: []
        }
        this.addSalary = this.addSalary.bind(this);
        this.editSalary = this.editSalary.bind(this);
        this.deleteSalary = this.deleteSalary.bind(this);
    }

    deleteSalary(employeeId){
        SalaryService.deleteSalary(employeeId).then( res => {
            this.setState({salaries: this.state.salaries.filter(salary => salary.employeeId !== employeeId)});
        });
    }

    viewSalary(employeeId){
        this.props.history.push(`/view-Salary/${employeeId}`);
    }

    editSalary(employeeId){
        this.props.history.push(`/update-Salary/${employeeId}`);
    }

    componentDidMount(){
        SalaryService.getSalaries().then((res) => {
            this.setState({salaries: res.data});
        });
    }

    addSalary(){
        this.props.history.push('/add-Salary/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Salary List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addSalary}> Add Salary</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee ID </th>
                                    <th> First Name </th>
                                    <th> Last Name </th>
                                    <th> Base Salary </th>
                                    <th> Overtime Pay </th>
                                    <th> Bonus </th>
                                    <th> Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.salaries.map(
                                        salary =>
                                        <tr key = {salary.id}>
                                             <td> {salary.employeeId} </td>
                                             <td> {salary.firstName} </td>
                                             <td> {salary.lastName} </td>
                                             <td> {salary.baseSalary} </td>
                                             <td> {salary.overtimePay} </td>
                                             <td> {salary.bonus} </td>
                                             <td>
                                                 <button onClick={ () => this.editSalary(salary.employeeId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteSalary(salary.employeeId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewSalary(salary.employeeId)} className="btn btn-info">View </button>
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

export default ListSalaryComponent
