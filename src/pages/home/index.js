/*
  This is our Landing page
*/

import React from "react";
import Sample from "../../components/sampleComponent/sample.component";
import RecentAcitivity  from "../../components/recentActivityComponent/recentActivity.component";
import Layout from "../Layout";
import { CardDeck } from "reactstrap";
import RecentActivity from "../../components/recentActivityComponent/recentActivity.component";

const Home = () => {
  return (
    <Layout>
      Home Page
      <Sample />
      <RecentActivity />
      
    </Layout>
  );
};

export default Home;
