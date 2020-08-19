import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./recentActivity.css";

const RecentActivityCard = (props) => {
  const pic = "http://navprayas.in/static/img/a3.png";
  return (
    <Card className="card">
      <CardImg top width="100%" height="100%" src={pic} />
      <div className="activityLine"></div>
      <CardBody className="activityCardBody">
        <CardTitle className="activityCardTitle">Rangotsav</CardTitle>
        <CardSubtitle className="activityCardSubtitle">
          Rangoli Competition
        </CardSubtitle>
        <CardText className="activityCardText">
          Lorem Ispum is dummy text for testing <br></br>text data. It is used
          globally to fill space where <br></br>some text can be replaced.
        </CardText>
        <Button className="activityButton">Learn More</Button>
      </CardBody>
    </Card>
  );
};

export default RecentActivityCard;
