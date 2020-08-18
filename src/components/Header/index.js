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

import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Header.css";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const changeBackground = () => {
    if(window.scrollY >= 430) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <Navbar light expand="md" className={navbar ? 'fixed-top scrolled' : 'fixed-top'}>
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
                <NavLink className="nav-link" to="/exam">
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
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
