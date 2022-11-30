import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListOrgComponent from './components/organizaition/ListOrgComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
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
                          <Route path = "/" exact component = {ListOrgComponent}></Route>
                          <Route path = "/orgs" component = {ListOrgComponent}></Route>
                          <Route path = "/add-org/:id" component = {CreateOrgComponent}></Route>
                          <Route path = "/update-org/:id" component = {UpdateOrgComponent}></Route>
                          <Route path = "/view-org/:id" component = {ViewOrgComponent}></Route>
                          {/* <Route path = "/update-org/:id" component = {UpdateOrgComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
