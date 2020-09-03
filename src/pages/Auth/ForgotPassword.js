import React, { useState } from "react";
import { Form, Input } from "reactstrap";

// import CustomButton from "../../components/Button";

import AlertModal from "../../components/Alert.component";
import axios from "axios";
// import { url } from "../../redux/api";
import Spinner from "../../components/spinner.component";

const url = process.env.REACT_APP_API_URL;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [alertMsg, setAlertMsg] = useState({
    show: false,
    color: "",
    msg: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { show, color, msg } = alertMsg;

  const handleSubmit = (e) => {
    if (email !== "") {
      setIsLoading(true);
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
          setIsLoading(false);
          setAlertMsg({
            ...alertMsg,
            color: "success",
            show: true,
            msg: res.data.responseData,
          });
        })
        .catch((err) => {
          setIsLoading(false);
          setAlertMsg({
            ...alertMsg,
            color: "danger",
            show: true,
            msg: err.response.data.errorDetails,
          });
        });

      e.preventDefault();
    }
  };

  return (
    <>
      <div className="signUpContainer container">
        <h1 className="signUpTitle title">Reset Password</h1>
        <div className="signUpline1"></div>
        <div className="signUpline2"></div>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
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
          <div className="row">
            <div className="col d-flex justify-content-center">
              <p>
                Enter your email address below and we'll send you a link to
                reset your password.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-8 offset-md-2">
              <Input
                className="signUpInput"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col d-flex justify-content-center">
              <button

                className="cbtn signUpButton btn-lg"

                disabled={email === ""}
              >
                {!isLoading ? <span>Reset</span> : <Spinner text="Loading.." />}
              </button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ForgotPassword;
