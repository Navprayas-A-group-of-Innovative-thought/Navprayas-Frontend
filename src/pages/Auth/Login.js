import React, { useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";

import CustomButton from "../../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../../redux/api";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    textChange: "LOGIN",
  });

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
          console.log("Logged In");
          console.log(res.data);
        })
        .catch((err) => {
          console.log("Login Error");
          console.log(err.response.data);
        });
    }
  };

  return (
    <>
      <Form className="signUpForm" onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            className="signUpInput"
            type="email"
            name="email"
            value={email}
            onChange={handleChange("email")}
            placeholder="Email"

          />
        </FormGroup>
        <FormGroup>
          <Input
            className="signUpInput"
            type="password"
            name="password"
            value={password}
            onChange={handleChange("password")}
            placeholder="Password"
            label="Password"
          />
        </FormGroup>
        <div className="signUpButtonDiv">
          <CustomButton className="signUpButton" buttonStyle="large curved">
            {textChange}
          </CustomButton>
        </div>
        <FormGroup>
          <Link className="signUpLink" to={"/reset"}>Forgot Password?</Link>
        </FormGroup>
        <FormGroup>
          <p>
            Don't have an account ?{" "}
            <Link className="signUpLink" to="/signup">
              REGISTER HERE
            </Link>
          </p>
        </FormGroup>
      </Form>
    </>
  );
};

export default Login;
