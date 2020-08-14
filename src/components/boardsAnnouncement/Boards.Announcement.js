import React from 'react';
import "./Boards.Announcement.css"
import BoardsAnnouncementLinks from "./Boards.Announcement.Links"

import {
  		Card, 
  		Button, 
  		CardTitle, 
  		CardText, 
  		CardDeck,
  		CardSubtitle, 
  		CardBody,
  		Container, 
  		Row, 
  		Col
} from 'reactstrap';

//Sample Announcement Object
const announcemets = [{announce:"Application for MTSE start on dd-mm-yy. Students from class V to X can apply.",
 						publish:"published on:- 31-02-1999"},
 						{announce:"Application for Rangotsav start on dd-mm-yy. Students from class V to X can apply.",
 						publish:"published on:- 31-02-1999"},
 						{announce:"Application for SyncWithDance start on dd-mm-yy. Students from class V to X can apply.",
 						publish:"published on:- 31-02-1999"}]

//Boards Announcement Start-------
const BoardsAnnouncement = (props) => {
	return (
	    <Container fluid>
				<Col xs="6" sm="4">
				    <h3 className="boardTitle">ANNOUNCEMENTS</h3>
				    <div className="line1"></div>
				    <div className="line2"></div>
				    	<Card>
					        <CardBody>
					        	<BoardsAnnouncementLinks announcement={announcemets}/>
					        	<Button className="announcementButton pull-right">VIEW ALL ANNOUNCEMENTS</Button>
					        </CardBody>
				     	</Card>
				</Col>
	    </Container>
  	);
};

export default BoardsAnnouncement;







