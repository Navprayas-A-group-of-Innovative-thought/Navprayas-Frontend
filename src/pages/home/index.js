/*
  This is our Landing page
*/

import React from "react";
import Sample from "../../components/sampleComponent/sample.component";
import Quicklinks from "../../components/Quicklinks/quicklinks.component";
const Home = () => {
  return (
    <>
      Home Page
      <Sample />
        <Quicklinks />
    </>
  );
};

export default Home;
