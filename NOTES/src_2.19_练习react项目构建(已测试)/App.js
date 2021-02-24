import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routers from "./config/routers";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div id="box"></div>
        {routers.map((i) => {
          return (
            <Route
              key={i.path}
              path={i.path}
              component={i.component}
              exact={i.exact}
            ></Route>
          );
        })}
      </Router>
    );
  }
}
