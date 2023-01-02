import React, { Component } from 'react'
import UserService from '../../services/UserService';

class changePComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            email:this.props.match.params.email,
            opasswordcheck:'',
            opassword:'',
            cpassword:'',
            error:''
        }
        this.changeOPasswordHandler = this.changeOPasswordHandler.bind(this);
        this.changeCPasswordHandler = this.changeCPasswordHandler.bind(this);
    }

    // step 3
    componentDidMount(){

        UserService.getPasswordByEmail(this.state.email).then( res => {
            this.setState({
                opasswordcheck: res.data.password
            });
        });
    }
    saveOrUpdatePassword = (e) => {
        e.preventDefault();
        if(this.state.opassword===this.state.opasswordcheck){
            let user = {email: this.state.email,password: this.state.cpassword};
            UserService.confirmP(user).then(res =>{
                this.props.history.push('/userDetail');
            });

        }else{
            alert("Incorrect password")


        }
        

    }
    
    changeOPasswordHandler= (event) => {
        this.setState({opassword: event.target.value});
    }

    changeCPasswordHandler= (event) => {
        this.setState({cpassword: event.target.value});
    }

    

    cancel(){
        this.props.history.push('/userDetail');
    }


    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Password</h3>
                                <div >
                                    <form>
                                        <div className = "form-group">
                                            <label> Original Password: </label>
                                            <input placeholder="Original Password" type="password" name="Opassword" className="form-control" 
                                                value={this.state.opassword} onChange={this.changeOPasswordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Confirm Password: </label>
                                            <input placeholder="Confirm Password" type="password" name="Cpassword" className="form-control" 
                                                value={this.state.cpassword}  onChange={this.changeCPasswordHandler}/>
                                        </div>
                                       
                                        <div style={{ textAlign: 'center' }}>
                                            <button className="btn btn-success" onClick={this.saveOrUpdatePassword}>Save</button>
                                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default changePComponent
