import React from "react";
import "./scss/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./pages/header";
import SignupComponent from "./components/signUpComponent";
import Homepage from "./pages/homepage";
import Navbar from "./components/navbar";
import PrivateRoute from "./util/PrivateRoute";
import LoginComponents from "./components/loginComponent";
import userAccount from "./components/userAccountComponent";
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
        <Route exact path="/login" component={LoginComponents} />
        <Route path="/register" component={SignupComponent} />

        <PrivateRoute path="/account" component={userAccount} />
        <PrivateRoute path="/listing" component={myListing} />
      </Switch>
    </Router>
  );
};

export default App;
