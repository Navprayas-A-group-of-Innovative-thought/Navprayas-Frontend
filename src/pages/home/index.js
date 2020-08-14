/*
  This is our Landing page
*/

import React from "react";
import Sample from "../../components/sampleComponent/sample.component";
import Layout from "../Layout";
import BoardsAnnouncement from "../.././components/boardsAnnouncement/Boards.Announcement"

const Home = () => {
  return (
    <Layout>
      Home Page
      <Sample />
      <BoardsAnnouncement />
    </Layout>
  );
};

export default Home;
