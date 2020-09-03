/*
    Header File
    Task To-do
        - Header.css that contains all the css for this component and its children component
*/

import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink, useHistory, Redirect, withRouter } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Header.css";
import { userActions } from "../../redux/actions/auth.actions";
import { connect } from "react-redux";
import { isAuth } from "../../_helpers/auth";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [navbar, setNavbar] = useState(false);
  //const [color, setColor] = useState("transparent");

  const toggle = () => setIsOpen(!isOpen);
  // const [loggedIn, setloggedIn] = useState(false);

  // const changeBackground = () => {
  //   if(window.scrollY >= 80) {
  //     setNavbar(true);
  //   }
  //   else {
  //     setNavbar(false);
  //   }
  // };

  // const changeColor = (color) => {
  //   setColor(color);
  // }

  // window.addEventListener('scroll', changeBackground);

  // useEffect(() => {
  //   console.log("running...");
  //   if (isAuth()) {
  //     setloggedIn(true);
  //   } else {
  //     setloggedIn(false);
  //   }
  //   return () => <Redirect to="/" />;
  // }, []);

  console.log(props);

  return (
    <>
      <Navbar
        style={{ background: "#262F36" }}
        light
        expand="md"
        className="fixed-top"
      >
        <div className="container">
          <NavbarBrand href="/">
            <img
              src={logo}
              width="250"
              height="auto"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </NavbarBrand>
          <NavbarToggler className="custom-toggler" onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto"></Nav>
            <Nav className="d-flex justify-content-end" navbar>
              <NavItem>
                <NavLink
                  className="nav-link"
                  exact
                  activeStyle={{ color: "orange" }}
                  to={"/"}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link"
                  activeStyle={{ color: "orange" }}
                  to={"/events"}
                >
                  Events
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link"
                  activeStyle={{ color: "orange" }}
                  to={"/gallery"}
                >
                  Gallery
                </NavLink>
              </NavItem>
              <AuthLink loggedIn={isAuth()} logout={props.logout} />
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </>
  );
};

const AuthLink = ({ loggedIn, logout }) => {
  const history = useHistory();
  const handleLogout = () => {
    logout();
    console.log("logged Out");
    history.push("/");
  };

  return (
    <>
      {loggedIn ? (
        <>
          <NavItem>
            <NavLink className="nav-link" to="/profile/show">
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/">
              <button
                className="cbtn btn-outline-primary p-1"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </NavLink>
          </NavItem>
        </>
      ) : (
        <>
          <NavItem>
            <NavLink className="nav-link" to="/signUp">
              Sign Up
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </NavItem>
        </>
      )}
    </>
  );
};

const mapDispatchToprops = (dispatch) => ({
  logout: () => dispatch(userActions.logout),
});

export default withRouter(connect(null, mapDispatchToprops)(Header));
