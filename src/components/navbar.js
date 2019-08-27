import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState({
    activeItem: "Account Settings"
  });

  const Nav = props => <NavLink exact {...props} activeClassName="active" />;

  const handleClick = ({ name }) => {
    setActive({ activeItem: name });
  };

  return (
    <>
      <Menu>
        <Menu.Item
          name="listing"
          active={active.activeItem === "listing"}
          onClick={handleClick}
          as={Nav}
          to={`/listing`}
        />
        <Menu.Item
          name="RV spots"
          active={active.activeItem === "RV spots"}
          onClick={handleClick}
          as={Nav}
          to={`/`}
        />
        <Menu.Item
          name="Account Settings"
          active={active.activeItem === "Account Settings"}
          onClick={handleClick}
          as={Nav}
          to={`/account`}
        />
      </Menu>
    </>
  );
};

export default Navbar;
