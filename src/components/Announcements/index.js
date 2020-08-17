import React from "react";
import { Container, Row, Col } from "reactstrap";
import BoardsAnnouncement from "../boardsAnnouncement/Boards.Announcement";

const Announcements = () => {
  return (
    <section
      style={{
        margin: "15px auto",
        padding: "10px",
        backgroundColor: "#ffe6ff",
        height: "auto",
      }}
    >
      <Container fluid>
        <Row>
          <Col xs="12" md="4">
            <BoardsAnnouncement />
          </Col>
          <Col xs="12" md="4">
            <BoardsAnnouncement />
          </Col>
          <Col xs="12" md="4">
            <BoardsAnnouncement />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Announcements;
