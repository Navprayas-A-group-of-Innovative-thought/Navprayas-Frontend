/*
    Header File
    Task To-do
        - Header.css that contains all the css for this component and its children component
*/

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { NavLink, Redirect } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Header.css";
import { isAuth, signout } from "../../_helpers/auth";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  //const [color, setColor] = useState("transparent");

  const toggle = () => setIsOpen(!isOpen);

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
                <NavLink className="nav-link" to="/user/profile">
                  Examination
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
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Downloads
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Sample Paper</DropdownItem>
                  <DropdownItem>Result</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <AuthLink auth={isAuth()} />
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </>
  );
};

const AuthLink = ({ auth }) => {
  return (
    <>
      {auth ? (
        <>
          <NavItem>
            <NavLink className="nav-link" to="/profile">
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/">
              <button
                className="btn btn-outline-primary"
                onClick={() => signout(() => {})}
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

export default Header;
