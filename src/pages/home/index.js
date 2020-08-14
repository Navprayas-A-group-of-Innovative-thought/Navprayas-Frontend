/*
  This is our Landing page
*/

import React from "react";
import Sample from "../../components/sampleComponent/sample.component";
import RecentAcitivity  from "../../components/recentActivityComponent/recentActivity.component";
import Layout from "../Layout";
import { CardDeck } from "reactstrap";

const Home = () => {
  return (
    <Layout>
      Home Page
      <Sample />
      <CardDeck>
        <RecentAcitivity />
        <RecentAcitivity />
        <RecentAcitivity />
      </CardDeck>
      
    </Layout>
  );
};

export default Home;
