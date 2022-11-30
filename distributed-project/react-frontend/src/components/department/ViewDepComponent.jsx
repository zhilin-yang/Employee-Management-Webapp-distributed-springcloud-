import React, { Component } from 'react'
import DepartmentService from '../../services/DepartmentService'

class ViewDepComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            departmentName: '',
            departmentDescription: '',
            departmentCode: '',
            dep: {}
        }
    }

    componentDidMount(){
        DepartmentService.getDepById(this.state.id).then( res => {
            this.setState({dep: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Department Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> department Code: </label>
                            <div> { this.state.dep.departmentCode }</div>
                        </div>
                        <div className = "row">
                            <label> department description: </label>
                            <div> { this.state.dep.departmentDescription}</div>
                        </div>
                        <div className = "row">
                            <label> department name: </label>
                            <div> { this.state.dep.departmentName }</div>
                        </div>
                       
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewDepComponent
