import React, {Component} from 'react'
import SalaryService from '../../services/SalaryService'

class ViewSalaryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            salary: {}
        }
    }

    componentDidMount() {
        SalaryService.getSalaryById(this.state.id).then(res => {
            this.setState({salary: res.data});
        })

    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Salary Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Employee ID: </label>
                            <div> {this.state.salary.employeeId}</div>
                        </div>
                        <div className="row">
                            <label> First Name: </label>
                            <div> {this.state.salary.firstName}</div>
                        </div>
                        <div className="row">
                            <label> Last Name: </label>
                            <div> {this.state.salary.lastName}</div>
                        </div>
                        <div className="row">
                            <label> Base Salary: </label>
                            <div> {this.state.salary.baseSalary}</div>
                        </div>
                        <div className="row">
                            <label> Overtime Pay: </label>
                            <div> {this.state.salary.overtimePay}</div>
                        </div>
                        <div className="row">
                            <label> Bonus: </label>
                            <div> {this.state.salary.bonus}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewSalaryComponent
