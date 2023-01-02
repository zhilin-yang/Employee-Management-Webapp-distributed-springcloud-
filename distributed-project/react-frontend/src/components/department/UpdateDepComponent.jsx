import React, { Component } from 'react'
import DepartmentService from '../../services/DepartmentService'

class UpdateDepComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            departmentName: '',
            departmentDescription: '',
            departmentCode: ''
        }
        this.changedepNameHandler = this.changedepNameHandler.bind(this);
        this.changedepDesHandler = this.changedepDesHandler.bind(this);
        this.changedepCodeHandler = this.changedepCodeHandler.bind(this);
        this.updateDep = this.updateDep.bind(this);
    }

    componentDidMount(){
        DepartmentService.getDepById(this.state.id).then( (res) =>{
            let dev = res.data;
            this.setState({departmentName: dev.departmentName,
                departmentDescription: dev.departmentDescription,
                departmentCode : dev.departmentCode
            });
        });
    }

    updateDep = (e) => {
        e.preventDefault();
        let dep ={departmentName: this.state.departmentName,departmentDescription: this.state.departmentDescription, departmentCode: this.state.departmentCode};
        DepartmentService.updateDep(dep,this.state.id).then( res => {
            this.props.history.push('/deps');
        });
    }
    
    changedepNameHandler= (event) => {
        this.setState({departmentName: event.target.value});
    }

    changedepDesHandler= (event) => {
        this.setState({departmentDescription: event.target.value});
    }

    changedepCodeHandler= (event) => {
        this.setState({departmentCode: event.target.value});
    }
    cancel(){
        this.props.history.push('/deps');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Department</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Department Code: </label>
                                            <input placeholder="department Code" name="departmentCode" className="form-control" 
                                                value={this.state.departmentCode} onChange={this.changedepCodeHandler} disabled/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Department Name: </label>
                                            <input placeholder="department name" name="departmentName" className="form-control" 
                                                value={this.state.departmentName} onChange={this.changedepNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Department Description: </label>
                                            <input placeholder="department description" name="departmentDescription" className="form-control" 
                                                value={this.state.departmentDescription} onChange={this.changedepDesHandler}/>
                                        </div>
                                       

                                        <button className="btn btn-success" onClick={this.updateDep}>Save</button>
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

export default UpdateDepComponent
