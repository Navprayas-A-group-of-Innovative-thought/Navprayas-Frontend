import React from "react";
import { Container, Row, Col } from "reactstrap";
import BoardsAnnouncement from "../boardsAnnouncement/Boards.Announcement";

const Announcements = () => {
  return (
    <section
      style={{
        padding: "10px",
        backgroundColor: "#f6f4f2",
        height: "auto",
        textAlign: "left",
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
