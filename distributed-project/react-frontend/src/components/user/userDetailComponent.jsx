import React, { Component } from 'react'
import EmployeeService from '../../services/EmployeeService'
import OrganizationService from '../../services/OrganizationService'
import jwt from '../user/jwt'

class userDetailComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            email:jwt.getEmail()

        }
    }


    changeP(){
        this.props.history.push(`/change-password/${this.state.email}`);
        
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View User Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label style={{ marginLeft:'50px',marginTop:'10px' }}> Email: </label>
                            <div  style={{marginRight: '100px',marginTop:'10px' }}> {this.state.email}</div>
                            <button className="btn btn-success" onClick={ () => this.changeP()}>Change Password</button>
                        </div>
                        
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default userDetailComponent
