import React from "react";
import { Link } from "react-router-dom";

const BoardAnnouncemetLinks = ({ announcement }) => {
  const linkComponent = announcement.map((a, i) => {
    return (
      <li key={i}>
        <i id="icon" className="fa fa-angle-double-right"></i>
        <Link to={"#"}>{a.announce}</Link>
        <p className="publishedDate">{a.publish}</p>
        <hr className="announcementSeperator"></hr>
      </li>
    );
  });
  return <div>{linkComponent}</div>;
};

export default BoardAnnouncemetLinks;
