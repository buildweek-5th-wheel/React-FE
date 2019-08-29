import React, { useState } from "react";
import { Menu, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import NavImg from "../images/logo-blue.png"

const Navbar = () => {
  const [active, setActive] = useState({
    activeItem: "Account Settings"
  });

  const Nav = props => <NavLink exact {...props} activeClassName="active" />;

  const handleClick = ({ name }) => {
    setActive({ activeItem: name });
  };

  const token = localStorage.getItem("token");

  return (
    <> 
      {token ? (
        <Menu>
          <img src={NavImg} />
          <Menu.Item
            name="My Listings"
            active={active.activeItem === "My Listings"}
            onClick={handleClick}
            as={Nav}
            to={`/userListing`}
          />
          <Menu.Item
            name="Marketplace"
            active={active.activeItem === "Marketplace"}
            onClick={handleClick}
            as={Nav}
            to={`/listing`}
          />
          <Menu.Item
            name="Profile"
            active={active.activeItem === "Profile"}
            onClick={handleClick}
            as={Nav}
            to={`/profile`}
          />
          <Menu.Item
            name="Bookings"
            active={active.activeItem === "Bookings"}
            onClick={handleClick}
            as={Nav}
            to={`/booking`}
          />
        </Menu>
      ) : (
        <Menu>
          <img src={NavImg} />
          <Menu.Item
            name="Marketplace"
            active={active.activeItem === "Marketplace"}
            onClick={handleClick}
            as={Nav}
            to={`/listing`}
          />
          <Menu.Item
            name="Login"
            active={active.activeItem === "login"}
            onClick={handleClick}
            as={Nav}
            to={`/login`}
          />
          <Menu.Item
            name="Register"
            active={active.activeItem === "register"}
            onClick={handleClick}
            as={Nav}
            to={`/register`}
          />
        </Menu>
      )}
    </>
  );
};

export default Navbar;
