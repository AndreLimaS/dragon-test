import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginForm from "./pages/LoginForm";
import Dashboard from "./pages/Dashboard";
import DragonCreate from "./Components/DragonCreate";
import DragonView from "./Components/DragonView";
import DragonEdit from "./Components/DragonEdit";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dragon/create" component={DragonCreate} />
        <Route path="/dragon/view/:dragonId" component={DragonView} />
        <Route path="/dragon/edit/:dragonId" component={DragonEdit} />
        <Route path="/home" component={Dashboard} />
        <Route path="/" exact component={LoginForm} />
      </Switch>
    </BrowserRouter>
  );
}
