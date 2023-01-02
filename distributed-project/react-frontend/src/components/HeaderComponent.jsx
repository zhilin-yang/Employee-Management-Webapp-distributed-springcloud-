import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import jwt from '../components/user/jwt';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogin:jwt.isLoggedIn()
                 
        }
        console.log(this.state.isLogin);
    }
    logOut = (e) => {
        jwt.removeJWT();
        window.location.href="/LoginForm"

    }
    
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark" style= {{display: 'flex', justifycontent:'space-around'}}>
                        <div ><a style={{fontSize: '30px'}} className="navbar-brand">Human Resources Systems</a></div> 
                        <div id="centreDiv" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',width:'60%'}}>
                            <div style={{marginRight: '50px',display: 'inline-block'}}><Link to='/' className="employee" style= {{fontSize:"20px",color:"white"}}>Employee Management </Link></div>
                            <div style={{marginRight: '50px',display: 'inline-block'}}><Link to='/salary'  className="user" style= {{fontSize:"20px",color:"white"}}>Salary Management</Link></div>
                            
                            <div style={{marginRight: '20px',display: 'inline-block'}}><Link to='/userDetail'  className="user" style= {{fontSize:"20px",color:"white"}}>User</Link></div>
                        </div>
                            {this.state.isLogin ? <div id="login-btn"><div style={{ position: "absolute", top: "22px",right: "200px"}} ><Link onClick={this.logOut} style= {{fontSize:"15px",color:"white"}}>log out</Link></div></div>:<div id="logout-btn" style={{ position: "absolute", top: "22px",right: "200px"}}><Link Link to='/LoginForm'  style= {{fontSize:"15px",color:"white"}}>log in</Link></div>}
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
