/*
  This is our Landing page
*/

import React from "react";
import Carousel from "../../components/Carousel/Carousel.component";
import Announcements from "../../components/Announcements";
// import RecentActivity from "../../components/recentActivityComponent/recentActivity.component";
import Timeline from "../../components/Timeline";
import Faq from "../../components/Faq";
import ProfileEdit from "../../components/FormUI/profileEdit";

const Home = () => {
  return (
    <>
      <Carousel />
      <Announcements />
      <Timeline />
      <Faq />
      <ProfileEdit / >
    </>
  );
};

export default Home;
