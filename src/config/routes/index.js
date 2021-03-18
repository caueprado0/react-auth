import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import signIn from "src/pages/signIn";
import signUp from "src/pages/signUp";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={signIn} />
      <Route exact path="/sign-in" component={signIn} />
      <Route path="/sign-up" component={signUp} />
    </Switch>
  </Router>
);

export default Routes;
