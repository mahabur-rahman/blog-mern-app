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
  return (
    <>
      <Router>
        <Topbar />

        <Switch>
          <Route exact path="/">
            <Single />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
