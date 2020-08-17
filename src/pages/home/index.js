/*
  This is our Landing page
*/

import React from "react";
import Sample from "../../components/sampleComponent/sample.component";
import Carousel from "../../components/Carousel/Carousel.component";

import Quicklinks from "../../components/Quicklinks/quicklinks.component";

import BoardsAnnouncement from "../.././components/boardsAnnouncement/Boards.Announcement";

const Home = () => {
  return (
    <>
      Home Page
      <Carousel />
      <Sample />
      <Quicklinks />
      <BoardsAnnouncement />
    </>
  );
};

export default Home;
