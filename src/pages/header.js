import React from "react";
import Logout from "../components/logout";

const Header = props => {
  return (
    <div>
      <Logout {...props} />
    </div>
  );
};

export default Header;
