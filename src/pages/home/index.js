/*
  This is our Landing page
*/

import React from "react";
import Carousel from "../../components/Carousel/Carousel.component";
import Announcements from "../../components/Announcements";
import RecentActivity from "../../components/recentActivityComponent/recentActivity.component";
const Home = () => {
  return (
    <>
      <Carousel />
      <Announcements />
      <RecentActivity />
    </>
  );
};

export default Home;
