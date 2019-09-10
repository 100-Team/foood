import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import "./App.css";

class Ahmad extends Component {
  render() {
    return (
      <Router basename="/home">
        <div className="App">
          <div className="App__Aside">
          </div>

          <div className="App__Form">
            <div className="FormTitle">
              <NavLink
                to="/sign-in"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/" component={SignUp}></Route>
            <Route path="/sign-in" component={SignIn}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default Ahmad;
