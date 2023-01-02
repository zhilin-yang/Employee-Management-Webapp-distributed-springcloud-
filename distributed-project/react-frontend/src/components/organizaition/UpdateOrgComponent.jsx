import React, { Component } from 'react'
import OrganizationService from '../../services/OrganizationService'

class UpdateOrgComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            organizationName: '',
            organizationDescription: '',
            organizationCode: ''
        }
        this.changeOrgNameHandler = this.changeOrgNameHandler.bind(this);
        this.changeOrgDesHandler = this.changeOrgDesHandler.bind(this);
        this.changeOrgCodeHandler = this.changeOrgCodeHandler.bind(this);
        this.updateOrg = this.updateOrg.bind(this);
    }

    componentDidMount(){
        OrganizationService.getOrgById(this.state.id).then( (res) =>{
            let dev = res.data;
            this.setState({organizationName: dev.organizationName,
                organizationDescription: dev.organizationDescription,
                organizationCode : dev.organizationCode
            });
        });
    }

    updateOrg = (e) => {
        e.preventDefault();
        let org ={organizationName: this.state.organizationName,organizationDescription: this.state.organizationDescription, organizationCode: this.state.organizationCode};
        OrganizationService.updateOrg(org,this.state.id).then( res => {
            this.props.history.push('/orgs');
        });
    }
    
    changeOrgNameHandler= (event) => {
        this.setState({organizationName: event.target.value});
    }

    changeOrgDesHandler= (event) => {
        this.setState({organizationDescription: event.target.value});
    }

    changeOrgCodeHandler= (event) => {
        this.setState({organizationCode: event.target.value});
    }
    cancel(){
        this.props.history.push('/orgs');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Organization</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Organization Code: </label>
                                            <input placeholder="Organization Code" name="organizationCode" className="form-control" 
                                                value={this.state.organizationCode} onChange={this.changeOrgCodeHandler} disabled/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Organization Name: </label>
                                            <input placeholder="Organization name" name="organizationName" className="form-control" 
                                                value={this.state.organizationName} onChange={this.changeOrgNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Organization Description: </label>
                                            <input placeholder="Organization description" name="organizationDescription" className="form-control" 
                                                value={this.state.organizationDescription} onChange={this.changeOrgDesHandler}/>
                                        </div>
                                        
                                       

                                        <button className="btn btn-success" onClick={this.updateOrg}>Save</button>
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

export default UpdateOrgComponent
