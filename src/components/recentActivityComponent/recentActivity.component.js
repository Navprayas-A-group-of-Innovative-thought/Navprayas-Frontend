import React from "react";
import { Col, Row, Container } from "reactstrap";
import "./recentActivity.css";
import RecentActivityCard from "./recentActivityCard.component";

const RecentActivity = () => {
  return (
    <section className="activity-section" style={{ height: "100vh", padding: "10px" }}>
      <Container >
        <Row>
          <Col className="text-center">
            <h3 className="title">Recent Activities</h3>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="4">
            <RecentActivityCard />
          </Col>
          <Col xs="12" md="4">
            <RecentActivityCard />
          </Col>
          <Col xs="12" md="4">
            <RecentActivityCard />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RecentActivity;
