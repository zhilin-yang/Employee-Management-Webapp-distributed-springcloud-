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

import LoginComponent from './components/user/LoginComponent';
import SigninComponent from './components/user/SigninComponent';
import AuthRoute from './components/AuthRoute';
import userDetailComponent from './components/user/userDetailComponent';
import changePComponent from './components/user/changePComponent';

import ListSalaryComponent from "./components/salary/ListSalaryComponent";
import CreateSalaryComponent from './components/salary/CreateSalaryComponent';
import UpdateSalaryComponent from './components/salary/UpdateSalaryComponent';
import ViewSalaryComponent from './components/salary/ViewSalaryComponent';




function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <AuthRoute path = "/" exact component = {ListEmployeeComponent}></AuthRoute>
                          <AuthRoute path = "/employees" component = {ListEmployeeComponent}></AuthRoute>
                          <AuthRoute path = "/add-employee/:id" component = {CreateEmployeeComponent}></AuthRoute>
                          <AuthRoute path = "/update-employee/:id" component = {UpdateEmployeeComponent}></AuthRoute>
                          <AuthRoute path = "/view-employee/:id" component = {ViewEmployeeComponent}></AuthRoute>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}

                          <AuthRoute path = "/department" exact component = {ListDepComponent}></AuthRoute>
                          <AuthRoute path = "/deps" component = {ListDepComponent}></AuthRoute>
                          <AuthRoute path = "/add-dep/:id" component = {CreateDepComponent}></AuthRoute>
                          <AuthRoute path = "/update-dep/:id" component = {UpdateDepComponent}></AuthRoute>
                          <AuthRoute path = "/view-dep/:id" component = {ViewDepComponent}></AuthRoute>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}

                          <AuthRoute path = "/organization" exact component = {ListOrgComponent}></AuthRoute>
                          <AuthRoute path = "/orgs" component = {ListOrgComponent}></AuthRoute>
                          <AuthRoute path = "/add-org/:id" component = {CreateOrgComponent}></AuthRoute>
                          <AuthRoute path = "/update-org/:id" component = {UpdateOrgComponent}></AuthRoute>
                          <AuthRoute path = "/view-org/:id" component = {ViewOrgComponent}></AuthRoute>
                          {/* <Route path = "/update-org/:id" component = {UpdateOrgComponent}></Route> */}

                          <Route path = "/LoginForm" exact component = {LoginComponent}></Route>
                          <Route path = "/SigninForm" exact component = {SigninComponent}></Route>
                          <AuthRoute path = "/userDetail" component = {userDetailComponent}></AuthRoute>
                          <AuthRoute path = "/change-password/:email" component = {changePComponent}></AuthRoute>
                          
                          <AuthRoute path = "/salary" exact component = {ListSalaryComponent}></AuthRoute>
                          <AuthRoute path = "/salaries" component = {ListSalaryComponent}></AuthRoute>
                          <AuthRoute path = "/add-salary/:id" component = {CreateSalaryComponent}></AuthRoute>
                          <AuthRoute path = "/update-salary/:id" component = {UpdateSalaryComponent}></AuthRoute>
                          <AuthRoute path = "/view-salary/:id" component = {ViewSalaryComponent}></AuthRoute>
                          
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;