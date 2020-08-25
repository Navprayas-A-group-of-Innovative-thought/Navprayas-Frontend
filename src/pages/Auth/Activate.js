import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import { Link, Redirect } from "react-router-dom";
import { url } from "../../redux/api";
import { Container, Row, Col } from "reactstrap";

// const ShowDetails = ({ User, otherDetails }) => {
//   if (User) {
//     return (
//       <>
//         <h1>Welcome {User.firstName}</h1>
//         <h1>{User.email}</h1>
//         <h1>{otherDetails.isMember}</h1>
//       </>
//     );
//   }
// };

const Activate = ({ match }) => {
  const [formData, setFormData] = useState({
    token: "",
    show: true,
  });

  const [res, setRes] = useState({});

  useEffect(() => {
    console.log(match);
    let token = match.params.token;

    if (token) {
      setFormData({ ...formData, token });
    }

    console.log(token);
  }, []);

  const { token, show } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting");
    axios
      .post(`${url}/activation`, {
        token,
      })
      .then((res) => {
        setRes({
          ...res.data,
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <section style={{ height: "auto", marginTop: "82px" }}>
      <Container fluid>
        <Row>
          <Col xs="12" className="text-center">
            <h1>Click on Email Verify</h1>
          </Col>
          <Col xs="12" className="d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
              <button type="submit">Verify Your Email Address</button>
              <h1>or Sign Up Again</h1>
              <Link to="/signup">Sign Up</Link>
            </form>
          </Col>
        </Row>
        <Row>
          {
            //   res.errorDetails == "Signup success" ? (
            //   <ShowDetails User={res.user} otherDetails={res.otherDetails} />
            // ) : null
          }
        </Row>
      </Container>
    </section>
  );
};

export default Activate;
