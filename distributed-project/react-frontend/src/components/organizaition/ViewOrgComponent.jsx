import React, { Component } from 'react'
import OrganizationService from '../../services/OrganizationService'

class ViewOrgComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            organizationName: '',
            organizationDescription: '',
            organizationCode: '',
            org: {}
        }
    }

    componentDidMount(){
        OrganizationService.getOrgById(this.state.id).then( res => {
            this.setState({org: res.data});
        })

    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Organization Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Organization Code: </label>
                            <div> { this.state.org.organizationCode }</div>
                        </div>
                        <div className = "row">
                            <label> Organization name: </label>
                            <div> { this.state.org.organizationName }</div>
                        </div>
                        <div className = "row">
                            <label> Organization description: </label>
                            <div> { this.state.org.organizationDescription}</div>
                        </div>
                       
                       
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewOrgComponent
