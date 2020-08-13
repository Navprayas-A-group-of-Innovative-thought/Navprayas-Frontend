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

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
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
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
