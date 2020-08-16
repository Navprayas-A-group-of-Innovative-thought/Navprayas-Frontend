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

import { Link } from "react-router-dom";
import logo from "../../assets/namedLogo.png";

import { NavLink } from "react-router-dom";
import logo from "../../assets/navprayasLogo.svg";
import "./Header.css";


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>

      <Navbar color="light" light expand="md">

      <Navbar light expand="md">

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
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto"></Nav>
            <Nav className="d-flex justify-content-end" navbar>
              <NavItem>

                <Link className="nav-link" activeClassName="active" to={"/"}>
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="#">
                  Examination
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  activeClassName="active"
                  to={"/events"}
                >
                  Events
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" activeClassName="active" to={"/#"}>
                  Gallery
                </Link>

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

                <Link className="nav-link" to="#">
                  Sign Up
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="#">
                  {" "}
                  Login{" "}
                </Link>

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
    </div>
  );
};

export default Header;
