import React from "react";
import "./global.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";

const App = () => {
  const currentUser = true;

  return (
    <>
      <Router>
        <Topbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/posts">
            <Home />
          </Route>

          <Route exact path="/single-post/:id">
            <Single />
          </Route>

          <Route exact path="/register">
            {currentUser ? <Home /> : <Register />}
          </Route>

          <Route exact path="/login">
            {currentUser ? <Home /> : <Login />}
          </Route>

          <Route exact path="/write">
            {currentUser ? <Write /> : <Login />}
          </Route>

          <Route exact path="/settings">
            {currentUser ? <Settings /> : <Login />}
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
