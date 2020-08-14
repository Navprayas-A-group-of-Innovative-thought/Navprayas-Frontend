import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./recentActivity.css";

const RecentActivityCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="./logo.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Rangotsav</CardTitle>
          <CardSubtitle>Rangoli Competition</CardSubtitle>
          <CardText>Lorem Ispum is dummy text for testing <br></br>text data. It is used globally to fill space where <br></br>some text can be replaced.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default RecentActivityCard;