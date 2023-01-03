import React, {Component} from 'react'
import SalaryService from '../../services/SalaryService'
import EmployeeService from "../../services/EmployeeService";


class CreateSalaryComponent extends Component {
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
            employeeList: []
        }
        this.changeEmployeeInfoHandler = this.changeEmployeeInfoHandler.bind(this);
        this.changeBaseSalaryHandler = this.changeBaseSalaryHandler.bind(this);
        this.changeOvertimePayHandler = this.changeOvertimePayHandler.bind(this);
        this.changeBonusHandler = this.changeBonusHandler.bind(this);
        this.saveOrUpdateSalary = this.saveOrUpdateSalary.bind(this);
    }

    componentDidMount() {
        if (this.state.id === '_add') {
            EmployeeService.getEmployees().then((res) => {
                let employeeListData = res.data;

                this.setState({
                    employeeId: employeeListData[0].id,
                    firstName: employeeListData[0].firstName,
                    lastName: employeeListData[0].lastName,
                    employeeList: employeeListData
                });
                console.log(employeeListData);
            });
        } else {
            EmployeeService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
                    FirstName: employee.firstName,
                    LastName: employee.lastName,
                });
            });
        }
    }

    saveOrUpdateSalary = (e) => {

        e.preventDefault();
        let Salary = {
            employeeId: this.state.employeeId,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            baseSalary: this.state.baseSalary,
            overtimePay: this.state.overtimePay,
            bonus: this.state.bonus,
        };

        SalaryService.createSalary(Salary).then(res => {
            this.props.history.push('/Salaries');
        });
    }
    changeEmployeeInfoHandler = (event) => {
        this.state.employeeId = event.target.value.split('-')[0];
        this.state.firstName = event.target.value.split('-')[1].split(' ')[0];
        this.state.lastName = event.target.value.split('-')[1].split(' ')[1];
    }

    changeBaseSalaryHandler = (event) => {
        this.setState({baseSalary: event.target.value});
    }

    changeOvertimePayHandler = (event) => {
        this.setState({overtimePay: event.target.value});
    }

    changeBonusHandler = (event) => {
        this.setState({bonus: event.target.value});
    }

    cancel() {
        this.props.history.push('/Salaries');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Salary</h3>
        } else {
            return <h3 className="text-center">Update Salary</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Employee Information: </label>
                                        <select className="form-control" id="employeeInfo"
                                                onChange={this.changeEmployeeInfoHandler}>
                                            {this.state.employeeList.map(employee => (
                                                <option
                                                    value={employee.id + "-" + employee.firstName + " " + employee.lastName}
                                                >{employee.id + "-" + employee.firstName + " " + employee.lastName}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label> Base Salary: </label>
                                        <input placeholder="Base Salary" name="BaseSalary" className="form-control"
                                               value={this.state.BaseSalary} onChange={this.changeBaseSalaryHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Overtime Pay: </label>
                                        <input placeholder="Overtime Pay" name="OvertimePay" className="form-control"
                                               value={this.state.OvertimePay} onChange={this.changeOvertimePayHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Bonus: </label>
                                        <input placeholder="Bonus" name="Bonus" className="form-control"
                                               value={this.state.Bonus} onChange={this.changeBonusHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateSalary}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}
                                            style={{marginLeft: "10px"}}>Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateSalaryComponent
