import React, { useState } from "react";
import { Form, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
// import { url } from "../../redux/api";
import AlertModal from "../../components/Alert.component";

const url = process.env.REACT_APP_API_URL;

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "Male",
  });
  const [alertMsg, setAlertMsg] = useState({
    show: false,
    color: "",
    msg: "",
  });
  const [isLoading, setIsLoading] = useState(false);
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

  const all =
    firstName &&
    lastName &&
    email &&
    password &&
    confirmPassword &&
    dob &&
    gender;

  const { show, color, msg } = alertMsg;
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

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
            setIsLoading(false);
            setFormData({
              ...formData,
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
              dob: "",
              gender: "",
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
            setIsLoading(false);
            // setFormData({
            //   ...formData,
            //   textChange: "Sign Up",
            // });
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
          <div className="col-12 col-md-4 offset-md-2">
            <Input
              className="form-control signUpInput"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={handlechange("firstName")}
              required
            />
          </div>

          <div className="col-12 col-md-4">
            <Input
              className="form-control signUpInput"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handlechange("lastName")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <Input
              className="form-control signUpInput"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handlechange("email")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <Input
              className="form-control signUpInput"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlechange("password")}
              placeholder="Password"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <Input
              className="form-control signUpInput"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handlechange("confirmPassword")}
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
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
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <select
              className="form-control signUpInput"
              type="select"
              name="gender"
              value={gender}
              onChange={handlechange("gender")}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div className="row mb-1">
          <div className="col d-flex justify-content-center">
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
        </div>

        <div className="row m-1">
          <div className="col d-flex justify-content-center">
            <button
              className="cbtn btn-lg"
              type="submit"
              disabled={!terms}
              onClick={handleSubmit}
            >
              {!isLoading ? (
                <span>Sign Up</span>
              ) : (
                <span>
                  <span
                    className="spinner-border spinner-border-sm mr-3 p-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col d-flex justify-content-center">
            <p>
              Already have an account ?{" "}
              <Link className="signUpLink" to="/login">
                LOGIN
              </Link>
            </p>
          </div>
        </div>
      </Form>
    </>
  );
};

export default SignUp;
