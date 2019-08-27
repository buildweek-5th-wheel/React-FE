import React from "react";
import LogoutHeader from "../components/logoutHeader";
import LoginHeader from "../components/loginHeader";

const signOut = e => {
  localStorage.removeItem("token");
};

const Header = props => {
  return (
    <div>
      {// check if user is logged in
      !localStorage.getItem("token") ? (
        <LogoutHeader signOut={signOut} />
      ) : (
        <LoginHeader />
      )}
    </div>
  );
};

export default Header;
