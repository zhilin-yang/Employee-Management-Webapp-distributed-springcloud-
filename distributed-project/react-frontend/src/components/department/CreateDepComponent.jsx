import React, { Component } from 'react'
import DepartmentService from '../../services/DepartmentService'


class CreateDepComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // step 2
            id: this.props.match.params.id,
            departmentName: '',
            departmentDescription: '',
            departmentCode: ''
           
        }
        this.changedepNameHandler = this.changedepNameHandler.bind(this);
        this.changedepDesHandler = this.changedepDesHandler.bind(this);
        this.changedepCodeHandler = this.changedepCodeHandler.bind(this);
        this.saveOrUpdateDep = this.saveOrUpdateDep.bind(this);
    }

    // step 3
    componentDidMount(){
        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            DepartmentService.getDepById(this.state.id).then( (res) =>{
                let dep = res.data;
                this.setState({departmentName: dep.departmentName,
                    departmentDescription: dep.departmentDescription,
                    departmentCode : dep.departmentCode
                });
            });
        }        
    }
    saveOrUpdateDep = (e) => {
        e.preventDefault();
        let dep = {departmentName: this.state.departmentName,departmentDescription: this.state.departmentDescription, departmentCode: this.state.departmentCode};
        

        // step 5
        if(this.state.id === '_add'){
            DepartmentService.createDep(dep).then(res =>{
                this.props.history.push('/deps');
            });
        }else{
            DepartmentService.updateDep(dep, this.state.id).then( res => {
                this.props.history.push('/deps');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Department</h3>
        }else{
            return <h3 className="text-center">Update Department</h3>
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
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> department Code: </label>
                                            <input placeholder="department Code" name="departmentCode" className="form-control" 
                                                value={this.state.departmentCode} onChange={this.changedepCodeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> department description: </label>
                                            <input placeholder="department description" name="departmentDescription" className="form-control" 
                                                 value={this.state.departmentDescription}  onChange={this.changedepDesHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> department name: </label>
                                            <input placeholder="department name" name="departmentName" className="form-control" 
                                                value={this.state.departmentName} onChange={this.changedepNameHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateDep}>Save</button>
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

export default CreateDepComponent
