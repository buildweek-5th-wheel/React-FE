import React from "react";
import { Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Route>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </Route>
    </>
  );
};

export default Navbar;
