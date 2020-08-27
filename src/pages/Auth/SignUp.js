import React, { useState } from "react";
import { Form, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import CustomButton from "../../components/Button";
import axios from "axios";
import { url } from "../../redux/api";
import AlertModal from "../../components/Alert.component";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "Male",
    textChange: "Sign Up",
  });
  const [alertMsg, setAlertMsg] = useState({
    show: false,
    color: "",
    msg: "",
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

  const { show, color, msg } = alertMsg;
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
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
              dob: "",
              gender: "",
              textChange: "Submitted",
            });
            setAlertMsg({
              ...alertMsg,
              show: true,
              msg: res.data.responseData,
              color: "success",
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
            setAlertMsg({
              ...alertMsg,
              show: true,
              msg: err.response.data.errorDetails,
              color: "danger",
            });
            console.log(err.response);
          });
      } else {
        setAlertMsg({
          ...alertMsg,
          show: true,
          msg: "Password did not match",
          color: "danger",
        });
      }
    } else {
      setAlertMsg({
        ...alertMsg,
        show: true,
        msg: "All Fields are required",
        color: "danger",
      });
    }
  };

  return (
    <>
      <Form className="signUpForm">
        <AlertModal
          color={color}
          isOpen={show}
          toggle={() => setAlertMsg({ ...alertMsg, show: !show })}
        >
          {msg}
        </AlertModal>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <Input
                className="signUpInput"
                type="text"
                name="firstName"
                id="firstName"
                label="First Name"
                placeholder="First Name"
                value={firstName}
                onChange={handlechange("firstName")}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <Input
                className="signUpInput"
                type="text"
                name="lastName"
                id="lastName"
                label="Last Name"
                placeholder="Last Name"
                value={lastName}
                onChange={handlechange("lastName")}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <Input
            className="signUpInput"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handlechange("email")}
            label="Email"
          />
        </div>
        <div className="form-group">
          <Input
            className="signUpInput"
            type="password"
            name="password"
            id="password"
            label="Password"
            value={password}
            onChange={handlechange("password")}
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <Input
            className="signUpInput"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            onChange={handlechange("confirmPassword")}
            placeholder="Confirm Password"
          />
        </div>
        <div className="last">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <Input
                  className="signUpInput"
                  type="date"
                  name="dob"
                  value={dob}
                  placeholder="DOB"
                  onChange={handlechange("dob")}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <select
                  className="signUpInput signUpGender"
                  type="select"
                  name="gender"
                  value={gender}
                  onChange={handlechange("gender")}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="signUpTerms form-group form-check">
          <Input
            className="signUpCheckBox"
            type="checkbox"
            name="check"
            onChange={() => setTerms(!terms)}
          />
          <Label className="signUpCheckText" for="signUpCheck" check>
            By clicking here, you accept the terms & conditions
          </Label>
        </div>
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

        <div className="form-group">
          <p>
            Already have an account ?{" "}
            <Link className="signUpLink" to="/login">
              LOGIN
            </Link>
          </p>
        </div>
      </Form>
    </>
  );
};

export default SignUp;
