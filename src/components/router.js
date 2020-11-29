import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginComponent from './login/login';
import Dashboard from "./dashboard/dashboard";
class RouterComponent extends Component {
    render() {
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <LoginComponent />
            </Route>
            <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
        </BrowserRouter>
      )
    };
}
export default RouterComponent;