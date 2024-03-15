import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
          
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/contact">
            <h1>Contact</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
