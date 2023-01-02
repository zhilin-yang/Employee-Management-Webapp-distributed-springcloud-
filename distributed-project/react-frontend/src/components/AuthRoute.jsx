import React, {useContext, createContext, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import jwt from '../components/user/jwt';
const AuthRoute = ({component: Component, ...res}) => {
    return <Route
        {...res}
        render={props => {
            const isLoging = jwt.isLoggedIn();
            if (isLoging) {
                return <Component {...props}/>
            } else {
                return <Redirect to={{
                    pathname: "/login",
                    state: {
                        form: props.location,
                    }
                }}/>
            }
        }}/>
}
export default AuthRoute;