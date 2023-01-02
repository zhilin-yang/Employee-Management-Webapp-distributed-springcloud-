import React, { useState } from 'react';
import axios from 'axios';
import jwt from '../user/jwt';
import UserService from '../../services/UserService'
import { Link } from 'react-router-dom';

const LoginForm = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    let user = {email: username,password: password};
    // Send a request to the server to authenticate the user
    UserService.login(user)
      .then((response) => {
        // If the login is successful, store the JWT token and redirect to the home page
        if(response.data.token!=""){
            jwt.setJWT(response.data.token,username,response.data.userDto.role);
            window.location.href="/"
        }else{
            setError('Invalid username or password'); 
        }
        
      })
      .catch((error) => {
        // If the login fails, display an error message
        setError('Invalid username or password');
      });
  };
  const signIn= (e) => {
    window.location.href="/SigninForm"

  }

  return (
    <div>
        <br/><br/>
        <div className = "container">
            <div className = "row">
                <div className = "card col-md-3 offset-md-4 offset-md-4">
                <h3 className="text-center">Log in</h3>
                        <div>
                            <form onSubmit={handleSubmit}>
                            {error && <p className="error">{error}</p>}
                            <div className = "form-group">
                                <label>Email:</label>
                                <input className="form-control"  type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className = "form-group">
                                <label> Password:</label>
                                <input className="form-control"  type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <button  className="btn btn-success" type="submit">Login</button>
                            </div>
                            <p>don't have an account? <Link className='sign-up-btn' onClick={signIn} >Sign In</Link></p>
                            
                            </form>
                        </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default LoginForm;
