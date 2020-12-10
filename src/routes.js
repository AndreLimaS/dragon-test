import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginForm from "./pages/LoginForm";
import Dashboard from "./pages/Dashboard";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginForm} />
        <Route path="/home" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
