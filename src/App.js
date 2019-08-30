import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./scss/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./pages/header";
import SignupComponent from "./forms/SignUpForm";
//import Homepage from "./pages/homepage";
import Navbar from "./components/NavBar";
import PrivateRoute from "./util/PrivateRoute";
import Login from "./forms/LoginForm";
import Profile from "./components/ProfilePage";
import ListingsPage from "./components/ListingsPage";
import OwnerListing from "./components/LandOwner";
import Footer from "./components/Footer";
import BookingsPage from "./components/BookingsPage";

const App = () => {
  localStorage.removeItem("token");
  return (
    <Router>
      <Navbar />
      <Header />

      {/* ROUTES */}
      <Switch>
        <Route exact path="/" component={ListingsPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={SignupComponent} />
        <PrivateRoute path="/userListing" component={OwnerListing} />
        <PrivateRoute path="/booking" component={BookingsPage} />
        {/** PLACE A PRIVATE ROUTE AFTER */}
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/listing" component={ListingsPage} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;

//remove to in link, remove route on line 41, line 14 as well
