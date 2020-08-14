/*
  This is our Landing page
*/

import React from "react";
import Sample from "../../components/sampleComponent/sample.component";

import BoardsAnnouncement from "../.././components/boardsAnnouncement/Boards.Announcement";

const Home = () => {
  return (
    <>
      Home Page
      <Sample />
      <BoardsAnnouncement />
    </>
  );
};

export default Home;
