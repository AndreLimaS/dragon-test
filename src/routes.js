import React from "react";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import { isAuthenticated } from "./services/auth";
import Content from "./Components/Content";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <PrivateRoute path="/home" component={Content} exact />
        <Route>
          <LoginForm />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Routes;
