import React from "react";
import "./scss/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/login";
import Register from "./components/register";
import Homepage from "./pages/homepage";
import Navbar from "./components/navbar";
import PrivateRoute from "./redux/util/PrivateRoute";

const App = () => {
  return (
    <Router>
      {/* NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
      </Switch>
    </Router>
  );
};

export default App;
