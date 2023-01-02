import React, { Component } from 'react'
import OrganizationService from '../../services/OrganizationService'
import { Link } from 'react-router-dom';

class ListOrgComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                orgs: []
        }
        this.addOrg = this.addOrg.bind(this);
        this.editOrg = this.editOrg.bind(this);
        this.deleteOrg = this.deleteOrg.bind(this);
    }

    deleteOrg(id){
        OrganizationService.deleteOrg(id).then( res => {
            this.setState({orgs: this.state.orgs.filter(org => org.id !== id)});
        });
    }
    viewOrg(id){
        this.props.history.push(`/view-org/${id}`);
    }
    editOrg(id){
        this.props.history.push(`/update-org/${id}`);
    }

    componentDidMount(){
        OrganizationService.getOrgs().then((res) => {
            this.setState({ orgs: res.data});
        });
    }

    addOrg(){
        this.props.history.push('/add-org/_add');
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
                 <h2 className="text-center">Organization List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addOrg}> Add Organization</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Organization Code</th>
                                    <th> Organization Name</th>
                                    <th> Organization Description</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orgs.map(
                                        org => 
                                        <tr key = {org.id}>
                                             <td> {org.organizationCode}</td>
                                             <td> { org.organizationName} </td>   
                                             <td> {org.organizationDescription}</td>
                                             <td style={{width:'280px'}}>
                                                 <button onClick={ () => this.editOrg(org.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteOrg(org.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewOrg(org.id)} className="btn btn-info">View </button>
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

export default ListOrgComponent
