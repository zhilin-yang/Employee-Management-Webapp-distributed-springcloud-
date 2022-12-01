import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark" style= {{display: 'flex', justifycontent:'space-around'}}>
                        <div><a href="https://javaguides.net" className="navbar-brand">Employee Management App</a></div>
                        <div><Link to='/' className="employee" style= {{fontSize:"20px",color:"white"}}>Employee||</Link></div>
                        <div><Link to='/department'  className="department" style= {{fontSize:"20px",color:"white"}}>Department||</Link></div>
                        <div><Link to='/organization'  className="organization" style= {{fontSize:"20px",color:"white"}}>Organization</Link></div>

                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
