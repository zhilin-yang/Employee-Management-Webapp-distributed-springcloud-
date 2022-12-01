import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import ListDepComponent from './components/department/ListDepComponent';
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
                          <Route path = "/department" exact component = {ListDepComponent}></Route>
                          <Route path = "/deps" component = {ListDepComponent}></Route>
                          <Route path = "/add-dep/:id" component = {CreateDepComponent}></Route>
                          <Route path = "/update-dep/:id" component = {UpdateDepComponent}></Route>
                          <Route path = "/view-dep/:id" component = {ViewDepComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;
