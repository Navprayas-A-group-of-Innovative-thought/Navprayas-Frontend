import React, { useState } from "react";
import { Form, Input } from "reactstrap";
import CustomButton from "../../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";
// import { url } from "../../redux/api";
import AlertModal from "../../components/Alert.component";

const url = process.env.REACT_APP_API_URL;

const Login = () => {
  console.log(url);
  const [data, setData] = useState({
    email: "",
    password: "",
    textChange: "LOGIN",
  });

  const [alertMsg, setAlertMsg] = useState({
    show: false,
    msg: "",
    color: "",
  });

  const { show, msg, color } = alertMsg;

  const handleChange = (text) => (e) => {
    setData({
      ...data,
      [text]: e.target.value,
    });
  };

  const { email, password, textChange } = data;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      setData({ ...data, textChange: "Logging In" });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({
        email,
        password,
      });

      // request to api
      axios
        .post(`${url}/login`, body, config)
        .then((res) => {
          setData({
            ...data,
            email: "",
            password: "",
          });
          setAlertMsg({
            ...alertMsg,
            show: true,
            color: "success",
            msg: "Logged in Successfully",
          });
          console.log(res.data);
        })
        .catch((err) => {
          setData({
            ...data,
            textChange: "LOGIN",
          });
          setAlertMsg({
            ...alertMsg,
            show: true,
            color: "danger",
            msg: err.response.data.errorDetails,
          });

          console.log(err.response.data);
        });
    }
  };

  return (
    <>
      <Form className="signUpForm" onSubmit={handleSubmit}>
        <AlertModal
          color={color}
          isOpen={show}
          toggle={() => setAlertMsg({ ...alertMsg, show: !show })}
        >
          {msg}
        </AlertModal>
        <div className="form-group">
          <Input
            className="signUpInput"
            type="email"
            name="email"
            value={email}
            onChange={handleChange("email")}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <Input
            className="signUpInput"
            type="password"
            name="password"
            value={password}
            onChange={handleChange("password")}
            placeholder="Password"
            label="Password"
          />
        </div>
        <div className="signUpButtonDiv">
          <CustomButton className="signUpButton" buttonStyle="large curved">
            {textChange}
          </CustomButton>
        </div>
        <div className="form-group">
          <Link className="signUpLink" to={"/reset"}>
            Forgot Password?
          </Link>
        </div>
        <div className="form-group">
          <p>
            Don't have an account ?{" "}
            <Link className="signUpLink" to="/signup">
              REGISTER HERE
            </Link>
          </p>
        </div>
      </Form>
    </>
  );
};

export default Login;
