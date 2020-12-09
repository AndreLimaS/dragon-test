import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginForm from "./pages/LoginForm";
import LoginCreate from "./pages/LoginCreate";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginForm} />
        <Route path="/criar" component={LoginCreate} />
      </Switch>
    </BrowserRouter>
  );
}
