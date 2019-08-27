import React from "react";
import "./scss/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./pages/header";
import SignupComponent from "./components/signUp";
import Homepage from "./pages/homepage";
import Navbar from "./components/navbar";
import PrivateRoute from "./util/PrivateRoute";
import Login from "./components/login";
import userAccount from "./components/profile";
import myListing from "./components/myListing";

//Testing Area for Components
import DumbPost from "./components/DummyPostListing";
//Testing Area Components
const App = () => {
  return (
    <Router>
      {/* NAVBAR */}
      <Header />
      <Navbar />
      <DumbPost />

      {/* ROUTES */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={SignupComponent} />

        <PrivateRoute path="/account" component={userAccount} />
        <PrivateRoute path="/listing" component={myListing} />
      </Switch>
    </Router>
  );
};
export default App;
