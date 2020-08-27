import React, { useState } from "react";
import { Form, FormGroup, Container, Input, Row, Col } from "reactstrap";
import CustomButton from "../../components/Button";
import AlertModal from "../../components/Alert.component";
import axios from "axios";
import { url } from "../../redux/api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [alertMsg, setAlertMsg] = useState({
    show: false,
    color: "",
    msg: "",
  });

  const { show, color, msg } = alertMsg;

  const handleSubmit = (e) => {
    console.log(email);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      email,
    });

    axios
      .put(url + "/forgotpassword", body, config)
      .then((res) => {
        setAlertMsg({
          ...alertMsg,
          color: "success",
          show: true,
          msg: res.data.responseData,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        setAlertMsg({
          ...alertMsg,
          color: "danger",
          show: true,
          msg: err.response.data.errorDetails,
        });
      });

    e.preventDefault();
  };

  return (
    <>
      <Container className="signUpContainer">
        <h1 className="signUpTitle title">Reset Password</h1>
        <div className="signUpline1"></div>
        <div className="signUpline2"></div>
        <Row>
          <Col xs={{ size: 6, offset: 3 }}>
            <AlertModal
              color={color}
              isOpen={show}
              toggle={() => setAlertMsg({ ...alertMsg, show: !show })}
            >
              {msg}
            </AlertModal>
          </Col>
        </Row>

        <Form className="signUpForm" onSubmit={handleSubmit}>
          <p>
            Enter your email address below and we'll send you a link to reset
            your password.
          </p>
          <FormGroup>
            <Input
              className="signUpInput"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </FormGroup>
          <div className="signUpButtonDiv">
            <CustomButton
              className="signUpButton mt-4"
              buttonStyle="large curved"
            >
              Reset Password
            </CustomButton>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default ForgotPassword;
