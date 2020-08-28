import React, { useState } from "react";
import { Form, Input } from "reactstrap";
import CustomButton from "../../components/Button";
import AlertModal from "../../components/Alert.component";
import axios from "axios";
// import { url } from "../../redux/api";

const url = process.env.REACT_APP_API_URL;

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
      <div className="signUpContainer container">
        <h1 className="signUpTitle title">Reset Password</h1>
        <div className="signUpline1"></div>
        <div className="signUpline2"></div>
        <div className="row">
          <div className="col-6 offset-3">
            <AlertModal
              color={color}
              isOpen={show}
              toggle={() => setAlertMsg({ ...alertMsg, show: !show })}
            >
              {msg}
            </AlertModal>
          </div>
        </div>

        <Form className="signUpForm" onSubmit={handleSubmit}>
          <p>
            Enter your email address below and we'll send you a link to reset
            your password.
          </p>
          <div className="form-group">
            <Input
              className="signUpInput"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="signUpButtonDiv">
            <CustomButton
              className="signUpButton mt-4"
              buttonStyle="large curved"
            >
              Reset Password
            </CustomButton>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ForgotPassword;
