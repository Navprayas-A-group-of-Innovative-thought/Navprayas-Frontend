import React from "react";
import "./Boards.Announcement.css";
import BoardsAnnouncementLinks from "./Boards.Announcement.Links";

import { Card, CardBody } from "reactstrap";

import CustomButton from "../Button/index";

//Sample Announcement Object
const announcemets = [
  {
    announce:
      "Application for MTSE start on dd-mm-yy. Students from class V to X can apply.",
    publish: "published on:- 31-02-1999",
  },
  {
    announce:
      "Application for Rangotsav start on dd-mm-yy. Students from class V to X can apply.",
    publish: "published on:- 31-02-1999",
  },
  {
    announce:
      "Application for SyncWithDance start on dd-mm-yy. Students from class V to X can apply.",
    publish: "published on:- 31-02-1999",
  },
];

//Boards Announcement Start-------
const BoardsAnnouncement = (props) => {
  return (
    <>
    <div className="mt-3 w-100 ml-4">
      <h3 className="boardTitle title font-weight-bold">ANNOUNCEMENTS</h3>
      <div className="line1"></div>
      <div className="line2"></div>
    </div>
      <div className="card">
        <div className="card-body">
          <BoardsAnnouncementLinks announcement={announcemets} />
          <CustomButton className="btn">
            VIEW ALL ANNOUNCEMENTS
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default BoardsAnnouncement;
