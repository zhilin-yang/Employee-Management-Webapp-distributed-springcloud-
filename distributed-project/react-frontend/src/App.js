import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent.jsx';

import ListEmployeeComponent from './components/employee/ListEmployeeComponent';
import CreateEmployeeComponent from './components/employee/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/employee/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/employee/ViewEmployeeComponent';

import ListDepComponent from './components/department/ListDepComponent';
import CreateDepComponent from './components/department/CreateDepComponent';
import UpdateDepComponent from './components/department/UpdateDepComponent';
import ViewDepComponent from './components/department/ViewDepComponent';

import ListOrgComponent from './components/organizaition/ListOrgComponent';
import CreateOrgComponent from './components/organizaition/CreateOrgComponent';
import UpdateOrgComponent from './components/organizaition/UpdateOrgComponent';
import ViewOrgComponent from './components/organizaition/ViewOrgComponent';


function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}

                          <Route path = "/department" exact component = {ListDepComponent}></Route>
                          <Route path = "/deps" component = {ListDepComponent}></Route>
                          <Route path = "/add-dep/:id" component = {CreateDepComponent}></Route>
                          <Route path = "/update-dep/:id" component = {UpdateDepComponent}></Route>
                          <Route path = "/view-dep/:id" component = {ViewDepComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}

                          <Route path = "/organization" exact component = {ListOrgComponent}></Route>
                          <Route path = "/orgs" component = {ListOrgComponent}></Route>
                          <Route path = "/add-org/:id" component = {CreateOrgComponent}></Route>
                          <Route path = "/update-org/:id" component = {UpdateOrgComponent}></Route>
                          <Route path = "/view-org/:id" component = {ViewOrgComponent}></Route>
                          {/* <Route path = "/update-org/:id" component = {UpdateOrgComponent}></Route> */}


                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;