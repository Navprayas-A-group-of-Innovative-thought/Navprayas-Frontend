/*
    Footer main file
    Task Todo 
        complete this component
        add Footer.css in this folder if any custom css is required
*/

import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <section>
      <footer className="footer-distributed ">
        <div className="footer-left ">
          <h3>
            <img
              src={logo}
              width="250"
              height="auto"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </h3>

          <p className="footer-links ">
            <a href="# " className="link-1 ">
              ABOUT US
            </a>

            <a href="# ">OUR TEAM</a>
          </p>
        </div>

        <div className="footer-center ">
          <div>
            <i id="icon" className="fa fa-map-marker "></i>
            <p>
              <span>1st floor Durga Asthan Market</span>Manpur Patwatoli, Gaya
              PIN-823003<span>Bihar, India</span>
            </p>
          </div>
          <div>
            <i id="icon" className="fa fa-envelope "></i>
            <p>
              <a href="mailto:support@company.com ">
                navprayas.np2000@gmail.com
              </a>
            </p>
          </div>

          <div>
            <i id="icon" className="fa fa-phone "></i>
            <p>9876543210</p>
          </div>
        </div>

        <div className="footer-right ">
          <div className="footer-icons ">
            <a href="https://www.facebook.com/navprayas.np ">
              <i id="icon" className="fa fa-facebook "></i>
            </a>
            <a href="https://www.instagram.com/navprayas.np ">
              <i id="icon" className="fa fa-instagram "></i>
            </a>
            <a href="https://www.linkedin.com/company/navprayas ">
              <i id="icon" className="fa fa-linkedin "></i>
            </a>
            <a href="# ">
              <i id="icon" className="fa fa-youtube "></i>
            </a>
          </div>
        </div>
      </footer>
      <p className="footer-bottom">© 2020 ALL RIGHTS RESERVED.</p>
    </section>
  );
};

export default Footer;
