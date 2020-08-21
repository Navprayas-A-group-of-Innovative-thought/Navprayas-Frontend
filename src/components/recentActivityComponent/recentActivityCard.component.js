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
import pic from "../../assets/react.svg";
import pic1 from "./532650.jpg";
import CustomButton from "../Button";

const RecentActivityCard = (props) => {
  return (
    <Card className="card">
      <CardImg top width="100%" height="100%" src={pic1} />
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
        <CustomButton buttonStyle="curved">Learn More</CustomButton>
      </CardBody>
    </Card>
  );
};

export default RecentActivityCard;
