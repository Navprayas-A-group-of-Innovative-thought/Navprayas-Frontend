import React, { useState } from "react";
import { Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import CustomButton from "../../components/Button";
import axios from "axios";
import { url } from "../../redux/api";
// import Input from "../../components/Input";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    textChange: "Sign Up",
  });
  const [terms, setTerms] = useState(false);

  // HandleChange of each input
  const handlechange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    dob,
    gender,
  } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    const all =
      firstName &&
      lastName &&
      email &&
      password &&
      confirmPassword &&
      dob &&
      gender;
    if (all) {
      if (confirmPassword === password) {
        setFormData({ ...formData, textChange: "Submitting" });
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        //Request Body
        const body = JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          dob,
          gender,
        });
        axios
          .post(`${url}/signup`, body, config)
          .then((res) => {
            setFormData({
              ...formData,
              firstname: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
              dob: "",
              gender: "",
              textChange: "Submitted",
            });
            console.log(res.data);
          })
          .catch((err) => {
            setFormData({
              ...formData,
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
              dob: "",
              gender: "",
              textChange: "Sign Up",
            });
            console.log(err.response);
          });
      } else {
        console.error("Passwords don't match");
      }
    } else {
      console.error("Please fill all fields");
    }
  };

  return (
    <>
      <Form className="signUpForm">
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                label="First Name"
                placeholder="First Name"
                value={firstName}
                onChange={handlechange("firstName")}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                label="Last Name"
                placeholder="Last Name"
                value={lastName}
                onChange={handlechange("lastName")}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handlechange("email")}
            label="Email"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            id="password"
            label="Password"
            value={password}
            onChange={handlechange("password")}
            placeholder="Password"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            onChange={handlechange("confirmPassword")}
            placeholder="Confirm Password"
          />
        </FormGroup>
        <div className="last">
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Input
                  className="signUpInput"
                  type="date"
                  name="dob"
                  value={dob}
                  onChange={handlechange("dob")}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <select
                  className="signUpInput"
                  type="select"
                  name="gender"
                  value={gender}
                  onChange={handlechange("gender")}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </FormGroup>
            </Col>
          </Row>
        </div>
        <FormGroup className="signUpTerms" check>
          <Input
            className="signUpCheckBox"
            type="checkbox"
            name="check"
            onChange={() => setTerms(!terms)}
          />
          <Label className="signUpCheckText" for="signUpCheck" check>
            By clicking here, you accept the terms & conditions
          </Label>
        </FormGroup>
        <div className="signUpButtonDiv">
          <CustomButton
            className="signUpButton"
            disabled={!terms}
            buttonStyle="large curved"
            onClick={handleSubmit}
          >
            {formData.textChange}
          </CustomButton>
        </div>

        <FormGroup>
          <p>
            Already have an account ?{" "}
            <Link className="signUpLink" to="/login">
              LOGIN
            </Link>
          </p>
        </FormGroup>
      </Form>
    </>
  );
};

export default SignUp;
