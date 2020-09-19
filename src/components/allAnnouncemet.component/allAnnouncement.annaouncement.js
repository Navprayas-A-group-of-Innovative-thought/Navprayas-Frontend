import React from 'react';
import { Link } from "react-router-dom";

const Announcement = ({ announcement, year }) => {
    const linkComponent = announcement.map((a, i) => {
        return (
            <div key={i}>
                <div className="publish align-middle h-auto ml-3">
                    {a.publish}
                </div>
                <div className="announcementContent">
                    <Link to={"#"}>{a.announce}</Link>
                <hr className="announcementSeperator"></hr>
                </div>
            </div>
        );
    });
    return <div>{linkComponent}</div>;
}

export default Announcement;