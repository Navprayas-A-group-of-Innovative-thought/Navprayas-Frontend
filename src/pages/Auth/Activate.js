import React, { useState, useEffect } from "react";
import axios from "axios";
// import jwt from "jsonwebtoken";
import { Link, Redirect } from "react-router-dom";
import { url } from "../../redux/api";
import { Container, Row, Col, Alert } from "reactstrap";
import CustomButton from "../../components/Button";
import AlertModal from "../../components/Alert.component";

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
    name: "",
    email: "",
  });

  const [alertMsg, setAlertMsg] = useState({
    show: false,
    color: "",
    msg: "",
  });

  useEffect(() => {
    console.log(match);
    let token = match.params.token;
    // let { email } = jwt.decode();
    if (token) {
      setFormData({ ...formData, token });
    }

    console.log(token);
  }, []);

  const { token, name, email } = formData;
  const { show, msg, color } = alertMsg;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting");
    axios
      .post(`${url}/activation`, {
        token,
      })
      .then((res) => {
        setAlertMsg({
          ...alertMsg,
          show: true,
          color: "success",
          msg: res.data.errorDetails,
        });
        setFormData({
          ...formData,
          name: res.data.user.firstName,
          email: res.data.user.email,
        });
        console.log(res.data);
      })
      .catch((err) => {
        setAlertMsg({
          ...alertMsg,
          show: true,
          color: "danger",
          msg: err.response.data.errorDetails,
        });
      });
  };

  return (
    <section
      style={{
        height: "60vh",
        marginTop: "82px",
        backgroundColor: "#f6f4f2",
        padding: "10px",
      }}
    >
      <Container fluid>
        <Row>
          <Col xs="12" className="d-flex justify-content-center p-5">
            <AlertModal
              color={color}
              isOpen={show}
              toggle={() => setAlertMsg({ ...alertMsg, show: !show })}
            >
              {msg}
            </AlertModal>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="text-center">
            <h3>Welcome {name}</h3>
          </Col>
          <Col xs="12" className="d-flex justify-content-center p-3 ">
            <form onSubmit={handleSubmit}>
              <CustomButton type="submit">
                Verify Your Email Address
              </CustomButton>
            </form>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="d-flex text-center justify-content-center">
            <h5>
              If You think this is not your email , please try{" "}
              <Link to="/signUp">
                <span style={{ color: "#F69925" }}>sign up</span>
              </Link>{" "}
              again
            </h5>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Activate;
