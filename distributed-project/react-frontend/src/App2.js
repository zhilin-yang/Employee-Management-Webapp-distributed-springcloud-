import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListDepComponent from './components/department/ListDepComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateDepComponent from './components/department/CreateDepComponent';
import UpdateDepComponent from './components/department/UpdateDepComponent';
import ViewDepComponent from './components/department/ViewDepComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListDepComponent}></Route>
                          <Route path = "/deps" component = {ListDepComponent}></Route>
                          <Route path = "/add-dep/:id" component = {CreateDepComponent}></Route>
                          <Route path = "/update-dep/:id" component = {UpdateDepComponent}></Route>
                          <Route path = "/view-dep/:id" component = {ViewDepComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
