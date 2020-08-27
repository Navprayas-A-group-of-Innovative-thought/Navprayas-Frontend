import React, { useState } from "react";
import { Form, Input } from "reactstrap";
import CustomButton from "../../components/Button";
import { Link } from "react-router-dom";
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
    axios
      .put(url + "/forgotpassword", email)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
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
            <AlertModal color="success">Yepp</AlertModal>
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
          <div className="form-group text-center mt-4 mb-4">
            <Link className="signUpLink" to={"/login"}>
              Login
            </Link>{" "}
            or{" "}
            <Link className="signUpLink" to={"/signup"}>
              Sign Up
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ForgotPassword;
