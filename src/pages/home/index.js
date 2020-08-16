/*
  This is our Landing page
*/

import React from "react";
import Sample from "../../components/sampleComponent/sample.component";
import Layout from "../Layout";
import Carousel from "../../components/Carousel/Carousel.component";


const Home = () => {
  return (
    <Layout>
      Home Page
      <Carousel />
      <Sample />
    </Layout>
  );
};

export default Home;
