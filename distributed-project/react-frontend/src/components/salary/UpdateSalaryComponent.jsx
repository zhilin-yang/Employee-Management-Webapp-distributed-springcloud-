import React, { Component } from 'react'
import SalaryService from '../../services/SalaryService'

class UpdateSalaryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employeeId: '',
            firstName: '',
            lastName: '',
            baseSalary: '',
            overtimePay: '',
            bonus: '',
        }
        this.changeBaseSalaryHandler = this.changeBaseSalaryHandler.bind(this);
        this.changeOvertimePayHandler = this.changeOvertimePayHandler.bind(this);
        this.changeBonusHandler = this.changeBonusHandler.bind(this);
        this.updateSalary = this.updateSalary.bind(this);
    }

    componentDidMount(){
        SalaryService.getSalaryById(this.state.id).then( (res) =>{
            let salary = res.data;
            this.setState({
                employeeId: salary.employeeId,
                firstName: salary.firstName,
                lastName: salary.lastName,
                baseSalary: salary.baseSalary,
                overtimePay: salary.overtimePay,
                bonus: salary.bonus,
            });
        });
    }

    updateSalary = (e) => {
        e.preventDefault();
        let salary ={
            id: this.state.id,
            employeeId: this.state.employeeId,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            baseSalary: this.state.baseSalary,
            overtimePay: this.state.overtimePay,
            bonus: this.state.bonus
        };
        SalaryService.updateSalary(salary, this.state.id).then( res => {
            this.props.history.push('/salaries');
        });
    }

    changeBaseSalaryHandler= (event) => {
        this.setState({baseSalary: event.target.value});
    }

    changeOvertimePayHandler= (event) => {
        this.setState({overtimePay: event.target.value});
    }

    changeBonusHandler= (event) => {
        this.setState({bonus: event.target.value});
    }
    cancel(){
        this.props.history.push('/salaries');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Salary</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Employee ID: </label>
                                            <input placeholder="Employee ID" name="EmployeeID" className="form-control"
                                                   value={this.state.employeeId} disabled="disabled"/>
                                        </div>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="FirstName" className="form-control"
                                                   value={this.state.firstName} disabled="disabled"/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="LastName" className="form-control"
                                                   value={this.state.lastName} disabled="disabled"/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Base Salary: </label>
                                            <input placeholder="" name="SalaryCode" className="form-control"
                                                   value={this.state.baseSalary} onChange={this.changeBaseSalaryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Overtime Pay: </label>
                                            <input placeholder="Salary description" name="SalaryDescription" className="form-control"
                                                   value={this.state.overtimePay} onChange={this.changeOvertimePayHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Bonus: </label>
                                            <input placeholder="Salary name" name="SalaryName" className="form-control"
                                                   value={this.state.bonus} onChange={this.changeBonusHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateSalary}>Save</button>
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

export default UpdateSalaryComponent
