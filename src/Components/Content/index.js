import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginForm from "../../pages/LoginForm";
import Dashboard from "../../pages/Dashboard";
import DragonCreate from "../DragonCreate";
import DragonView from "../DragonView";
import DragonEdit from "../DragonEdit";

export default function index() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dragon/create" component={DragonCreate} />
        <Route path="/dragon/view/:dragonId" component={DragonView} />
        <Route path="/dragon/edit/:dragonId" component={DragonEdit} />
        <Route path="/home" component={Dashboard} />
        <Route path="/login" exact component={LoginForm} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
