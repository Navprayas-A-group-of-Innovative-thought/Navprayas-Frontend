import React, { useState, useEffect, useRef } from "react";
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

  // const [color, setColor] = useState("transparent");

  const toggle = (e) => {
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);
    }
  };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  console.log(props);

  return (
    <>
      <div ref={menuRef}>
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
                    onClick={toggle}
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link"
                    activeStyle={{ color: "orange" }}
                    to={"/events"}
                    onClick={toggle}
                  >
                    Events
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link"
                    activeStyle={{ color: "orange" }}
                    to={"/gallery"}
                    onClick={toggle}
                  >
                    Gallery
                  </NavLink>
                </NavItem>

                <AuthLink
                  loggedIn={isAuth()}
                  logout={props.logout}
                  toggle={toggle}
                />
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    </>
  );
};

const AuthLink = ({ loggedIn, logout, toggle }) => {
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
            <NavLink className="nav-link" to="/signUp" onClick={toggle}>
              Sign Up
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/login" onClick={toggle}>
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
