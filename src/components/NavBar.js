import React, { useState, useEffect } from "react";
import { Menu, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import NavImg from "../images/logo-blue.png";
import "../scss/NavBar.scss";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";

const Navbar = props => {
  const [active, setActive] = useState({
    activeItem: "setting"
  });


  const Nav = props => <NavLink exact {...props} activeClassName="active" />;

  const handleClick = ({ name }) => {
    setActive({ activeItem: name });
  };

  const token = localStorage.getItem("token");

  return (
    <>
      {props.isAuth && token ? (
        <Menu>
          <Image src={NavImg} />
          <div className="items">
            <Menu.Item
              name="My Listings"
              active={active.activeItem === "My Listings"}
              onClick={handleClick}
              as={Nav}
              to={`/userListing`}
            />
            <Menu.Item
              name="My Bookings"
              active={active.activeItem === "My Bookings"}
              onClick={handleClick}
              as={Nav}
              to={`/booking`}
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
              name="Logout"
              active={active.activeItem === "Logout"}
              onClick={() => {
                localStorage.removeItem("token");
                props.history.push("/")
              }}
              as={Nav}
              to={`/listing`}
            />
          </div>
        </Menu>
      ) : (
        <Menu>
          <Image src={NavImg} />
          <div className="items">
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
          </div>
        </Menu>
      )}
    </>
  );
};

const mapsStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

export default withRouter(connect(mapsStateToProps)(Navbar));
