import React, {useState} from 'react';
import Archive from "../../components/allAnnouncemet.component/allAnnouncement.archive";
import Announcement from "../../components/allAnnouncemet.component/allAnnouncement.annaouncement";
import { announcemets } from "../../shared/announcement"
import "./allAnnouncement.css"

const ViewAllAnnouncement = () => {
    const [year, setYear] = useState(announcemets[0].publish.split("-")[2])
    const changeContent = (e) => {
        setYear(e);
    }
    const filtered = announcemets.filter(a => {
        return a.publish.split("-")[2].includes(year);
    })
    console.log("filtered",filtered);
    console.log("year",year);
    return(
        <section style={{marginTop:"70px", height:"auto", marginBottom:"30px"}}>
            <div className="container-lg">
                <h1 className="display-4 text-center">ANNOUNCEMENTS</h1>
                <div className="row">
                    <div className="col-12 col-md-3 position-relative text-center archive">
                        <Archive announcement={announcemets} changeContent={changeContent}/>
                    </div>
                    <div className="col-12 col-md-8 border border-warning rounded-lg pt-4 pl-2 shadow-lg announcement">
                        <Announcement announcement={filtered}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ViewAllAnnouncement;