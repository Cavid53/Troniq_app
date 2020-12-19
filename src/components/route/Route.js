import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppNavbar from "../home/Navbar";
import Home from "../home/Home"
import Contact from "../contact/Contact"

const Routing = () => {
  return (
    <div>
      <AppNavbar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default Routing;
