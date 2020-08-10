/*
  This component consists all the Components which is common to every page
  Replace h1 tag of header component with its header component
  Replace h4 tag of Footer component with its Footer component
*/

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = (props) => {
  return (
    <>
      {/*Header Component */}
      <Header />
      <div>
        {/* Main Content of Page */}
        {props.children}
      </div>
      {/* Footer component */}
      <Footer />
    </>
  );
};

export default Layout;
