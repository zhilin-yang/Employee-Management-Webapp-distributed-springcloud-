import React, { Component } from 'react'
import DepartmentService from '../../services/DepartmentService'
import { Link } from 'react-router-dom';

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
                <div style={{marginTop: '20px',marginBottom: '30px',borderBottom: '1px solid black',boxShadow: '0px 1px 1px #dee2e6',borderColor:'#dee2e6'}}>
            
            <div style={{display: 'inline-block', backgroundColor: '#497BFF', borderRadius: '10px 10px 0 0',width: '130px', height: '35px',textAlign: 'center',fontWeight: 'bold',lineHeight: '35px'}}>
                <Link to="/employees" ><span style={{color: '#666'}}>Employee</span></Link>
            </div>
            <div style={{display: 'inline-block', backgroundColor: '#42A2B8', borderRadius: '10px 10px 0 0',width: '130px', height: '35px',textAlign: 'center',fontWeight: 'bold',lineHeight: '35px'}}>
                <Link to='/department'><span style={{color: '#666'}}>Department</span></Link>
            </div>
            <div style={{display: 'inline-block',backgroundColor: '#F4F4F4', borderRadius: '10px 10px 0 0',width: '130px', height: '35px',textAlign: 'center',fontWeight: 'bold',lineHeight: '35px'}}>
                <Link to='/organization'><span style={{color: '#666'}}>Organization</span></Link>
            </div>
       </div>
                 <h2 className="text-center">Department List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addDep}> Add Department</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Department Code</th>
                                    <th> Department name</th>
                                    <th> Department description</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.deps.map(
                                        dep => 
                                        <tr key = {dep.id}>
                                             <td> { dep.departmentCode} </td>   
                                             <td> {dep.departmentName}</td>  
                                             <td> {dep.departmentDescription}</td>
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
