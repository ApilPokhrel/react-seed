import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/presentational/Navbar.jsx";
import LoginContainer from "./components/container/LoginContainer.jsx";
import RegisterContainer from "./components/container/RegisterContainer.jsx";
import Notfound from "./components/presentational/NotFound.jsx";
import PermissionCreate from "./components/presentational/role/PermissionCreate.jsx";
import AppCss from "../css/App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={PermissionCreate} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={RegisterContainer} />
        <Route component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;
