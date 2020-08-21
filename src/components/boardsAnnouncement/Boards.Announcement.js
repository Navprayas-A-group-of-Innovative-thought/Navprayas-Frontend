import React from "react";
import "./Boards.Announcement.css";
import BoardsAnnouncementLinks from "./Boards.Announcement.Links";

import { Card, Button, CardBody } from "reactstrap";

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
    <div className="announcementTitle">
      <h3 className="boardTitle title">ANNOUNCEMENTS</h3>
      <div className="line1"></div>
      <div className="line2"></div>
    </div>
      <Card>
        <CardBody>
          <BoardsAnnouncementLinks announcement={announcemets} />
          <CustomButton type="button" buttonStyle="pull-right">
            VIEW ALL ANNOUNCEMENTS
          </CustomButton>
        </CardBody>
      </Card>
    </>
  );
};

export default BoardsAnnouncement;
