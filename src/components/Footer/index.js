/*
    Footer main file
    Task Todo 
        complete this component
        add Footer.css in this folder if any custom css is required
*/

import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg"

const Footer = () => {
  return <section>
    <footer class="footer-distributed ">

      <div class="footer-left ">
        <h3>
          <img
            src={logo}
            width="250"
            height="auto"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </h3>

        <p class="footer-links ">
          <a href="# " class="link-1 ">ABOUT US</a>

          <a href="# ">OUR TEAM</a>
        </p>
      </div>

      <div class="footer-center ">

        <div>
          <i class="fa fa-map-marker "></i>
          <p><span>1st floor Durga Asthan Market</span>Manpur Patwatoli, Gaya PIN-823003<span>Bihar, India</span></p>
        </div>
        <div>
          <i class="fa fa-envelope "></i>
          <p><a href="mailto:support@company.com ">navprayas.np2000@gmail.com</a></p>
        </div>

        <div>
          <i class="fa fa-phone "></i>
          <p>9876543210</p>
        </div>



      </div>

      <div class="footer-right ">

        <div class="footer-icons ">

          <a href="https://www.facebook.com/navprayas.np "><i class="fa fa-facebook "></i></a>
          <a href="https://www.instagram.com/navprayas.np "><i class="fa fa-instagram "></i></a>
          <a href="https://www.linkedin.com/company/navprayas "><i class="fa fa-linkedin "></i></a>
          <a href="# "><i class="fa fa-youtube "></i></a>

        </div>

      </div>

    </footer>
    <p className="footer-bottom">© 2020 ALL RIGHTS RESERVED.</p>
  </section>
};

export default Footer;
