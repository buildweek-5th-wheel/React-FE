import React from "react";
import "./scss/App.scss";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Header from "./pages/header";
import SignupComponent from "./forms/SignUpForm";
import Homepage from "./pages/homepage";
import Navbar from "./components/NavBar";
import PrivateRoute from "./util/PrivateRoute";
import Login from "./forms/LoginForm";
import Profile from "./components/ProfilePage";
import ListingsPage from "./components/ListingsPage";

//Testing Area for Components
import DumbPost from "./components/DummyPostListing";
//Testing Area Components

const App = () => {
  return (
    <Router>
      {/* NAVBAR */}
      <Header />
      <Link to="/">Homepage </Link>
      <br />
      <Link to="/profile">TESTING:User Profile </Link>
      <br />
      <Link to="">TESTING:Land Owner Listings </Link>
      <br />
      <Link to="/listing">TESTING: ALL LISTINGS </Link>
      <br />
      <Link to="/dumb">DON'T ENTER HERE </Link>

      {/* ROUTES */}
      <Switch>
        <Route path="/dumb" component={DumbPost} />
        <Route exact path="/" component={ListingsPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={SignupComponent} />

        {/** PLACE A PRIVATE ROUTE AFTER */}
        <Route path="/profile" component={Profile} />
        <Route path="/listing" component={ListingsPage} />
      </Switch>
    </Router>
  );
};
export default App;
