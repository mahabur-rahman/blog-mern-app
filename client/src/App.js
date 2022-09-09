import React from "react";
import "./global.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Topbar from "./components/Topbar/Topbar";

const App = () => {
  return (
    <>
      <Router>
        <Topbar />
      </Router>
    </>
  );
};

export default App;
