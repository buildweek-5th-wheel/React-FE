import React from "react";
import "./scss/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./pages/header";
import SignupComponent from "./components/signUpComponent";
import Homepage from "./pages/homepage";
import Navbar from "./components/navbar";
import data from "./components/DummyData.js";
import LandCard from "./components/CardListings.js";
import PrivateRoute from "./util/PrivateRoute";
import LoginComponents from "./components/loginComponent";

const App = () => {
  return (
    <Router>
      {/* NAVBAR */}
      <Header />
      <Navbar />

      {/* ROUTES */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <PrivateRoute exact path="/login" component={LoginComponents} />
        <PrivateRoute path="/register" component={SignupComponent} />
      </Switch>
    </Router>
  );
};

export default App;
