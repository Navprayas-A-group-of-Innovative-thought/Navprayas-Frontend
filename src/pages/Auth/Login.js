import React, { useState } from "react";
import { Form, Input } from "reactstrap";

// import CustomButton from "../../components/Button";

import { Link, Redirect } from "react-router-dom";
import axios from "axios";
// import { url } from "../../redux/api";
import AlertModal from "../../components/Alert.component";
import Spinner from "../../components/spinner.component";

import { isAuth } from "../../_helpers/auth";
import { userActions } from "../../redux/actions/auth.actions";
import { alertActions } from "../../redux/actions/alert.actions";
import { connect } from "react-redux";

const url = process.env.REACT_APP_API_URL;

const Login = (props) => {

  const [data, setData] = useState({
    email: "",
    password: "",
  });



  const handleChange = (text) => (e) => {
    setData({
      ...data,
      [text]: e.target.value,
    });
  };

  const { email, password } = data;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {

      props.login(email, password);
    }
  };

  const { isLoading, loggedIn } = props.loginState;
  console.log("isLoading", isLoading);
  console.log("loggedIn log in", loggedIn);

  if (isAuth()) return <Redirect to="/" />;
  else {
    return (
      <>

        <Form className="signUpForm container" onSubmit={handleSubmit}>
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
            <div className="col-12 col-md-8 offset-md-2">
              <Input
                className="form-control signUpInput"
                type="email"
                name="email"
                value={email}
                onChange={handleChange("email")}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2">
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
          </div>
          <div className="signUpButtonDiv">
            <button className="cbtn btn-lg mt-4">
              {!isLoading ? <span>Log in</span> : <Spinner text="Logging In" />}
            </button>
          </div>
          <div className="row mt-2">
            <div className="col d-flex justify-content-center">
              <Link className="signUpLink" to={"/reset"}>
                Forgot Password?
              </Link>
            </div>
          </div>
          <div className="row m-1">
            <div className="col d-flex justify-content-center">
              <p>
                Don't have an account ?{" "}
                <Link className="signUpLink" to="/signup">
                  REGISTER HERE
                </Link>
              </p>
            </div>
          </div>
        </Form>

      </>
    );
  }
};

const mapStateToprops = (state) => {
  return {
    loginState: state.authentication,
    alert: state.alert,
  };
};

const mapDispatchToprops = (dispatch) => ({
  login: (email, password) => dispatch(userActions.login(email, password)),
  clear: () => dispatch(alertActions.clear()),
});

export default connect(mapStateToprops, mapDispatchToprops)(Login);


