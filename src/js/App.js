import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/presentational/Navbar.jsx";
import LoginContainer from "./components/container/LoginContainer.jsx";
import RegisterContainer from "./components/container/RegisterContainer.jsx";
import Notfound from "./components/presentational/NotFound.jsx";
import PermissionCreate from "./components/presentational/role/PermissionCreate.jsx";
import Role from "./components/presentational/role/Index.jsx";
import UserAdmin from "./components/presentational/role/AssignUser.jsx";
import EditUser from "./components/presentational/role/EditUser.jsx";
import AppCss from "../css/App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={UserAdmin} />
        <Route path="/role" component={Role} />
        <Route path="/permission" component={PermissionCreate} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={RegisterContainer} />
        <Route path="/user" component={EditUser} />
        <Route component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;
