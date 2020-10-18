import HomepageImg from './Components/HomepageImg'
import React from "react";
import { Route, Switch, Link, NavLink }  from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import NotFound from './Components/NotFound'

function App() {
  return (
    <Switch>
    <Route path="/" exact component={HomepageImg} />
    <Route path="/login" exact component={LoginForm} />
    <Route component={NotFound} />
  </Switch>

  );
}

export default App;
