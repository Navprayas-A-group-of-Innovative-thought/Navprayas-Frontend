import React, { useState } from "react";
import { Form, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

import AlertModal from "../../components/Alert.component";
import Spinner from "../../components/spinner.component";
import { userActions } from "../../redux/actions/auth.actions";
import { alertActions } from "../../redux/actions/alert.actions";
import { connect } from "react-redux";

const SignUp = (props) => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "Male",
  });

  const [terms, setTerms] = useState(false);

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

  // HandleChange of each input
  const handlechange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (all) {
      if (confirmPassword === password) {
        props.register(formData);
        setFormData({
          ...formData,
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          dob: "",
          gender: "Male",
        });
      }
    } else {
      props.error("All fields are required");
    }
  };

  console.log("isLoading", props.isLoading);
  const { isLoading } = props.isLoading;
  return (
    <>
      <Form className="signUpForm" noValidate>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <AlertModal
              color={props.alert.type}
              isOpen={props.alert.show}
              toggle={() => props.clear()}
            >
              {props.alert.message}

            </AlertModal>
          </div>
        </div>

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
              placeholder="Gender"
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
                <Spinner text="Loading..." />
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


const mapStateToprops = (state) => {
  return {
    isLoading: state.registration,
    alert: state.alert,
  };
};

const mapDispatchToProps = (dispatch) => ({
  register: (user) => dispatch(userActions.register(user)),
  error: (msg) => dispatch(alertActions.error(msg)),
  clear: () => dispatch(alertActions.clear()),
});

export default connect(mapStateToprops, mapDispatchToProps)(SignUp);

