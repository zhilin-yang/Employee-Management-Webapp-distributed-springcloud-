import React, { Component } from 'react'
import DepartmentService from '../../services/DepartmentService'

class ListDepComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                deps: []
        }
        this.addDep = this.addDep.bind(this);
        this.editDep = this.editDep.bind(this);
        this.deleteDep = this.deleteDep.bind(this);
    }

    deleteDep(id){
        DepartmentService.deleteDep(id).then( res => {
            this.setState({deps: this.state.deps.filter(dep => dep.id !== id)});
        });
    }
    viewDep(id){
        this.props.history.push(`/view-dep/${id}`);
    }
    editDep(id){
        this.props.history.push(`/update-dep/${id}`);
    }

    componentDidMount(){
        DepartmentService.getDeps().then((res) => {
            this.setState({ deps: res.data});
        });
    }

    addDep(){
        this.props.history.push('/add-dep/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Department List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addDep}> Add Department</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> department Code</th>
                                    <th> department description</th>
                                    <th> department name</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.deps.map(
                                        dep => 
                                        <tr key = {dep.id}>
                                             <td> { dep.departmentName} </td>   
                                             <td> {dep.departmentDescription}</td>
                                             <td> {dep.departmentCode}</td>
                                             <td>
                                                 <button onClick={ () => this.editDep(dep.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDep(dep.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewDep(dep.id)} className="btn btn-info">View </button>
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

export default ListDepComponent
