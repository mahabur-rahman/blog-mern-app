import React from "react";
import "./global.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <Router>
        <Topbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
