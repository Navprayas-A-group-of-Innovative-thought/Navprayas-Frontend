import React, { useState } from "react";
// import { Form, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerSchema } from "../../shared/register";
import { registerValidation } from "../../util/registerValidation";
import TextError from "../../components/TextError";
import AlertModal from "../../components/Alert.component";
import Spinner from "../../components/spinner.component";
import { userActions } from "../../redux/actions/auth.actions";
import { alertActions } from "../../redux/actions/alert.actions";
import { connect } from "react-redux";

const SignUp = (props) => {
  const handleSubmit = (e) => {
    props.register(e);
  };

  const { isLoading } = props.isLoading;
  console.log("ISloading State", isLoading);
  return (
    <div>
      <div className="row">
        <div className="col col-md-8 offset-md-2">
          <AlertModal
            color={props.alert.type}
            isOpen={props.alert.show}
            toggle={() => props.clear()}
          >
            {props.alert.message}
            Karlo
          </AlertModal>
        </div>
      </div>

      <Formik
        initialValues={registerSchema}
        validationSchema={registerValidation}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          return (
            <Form className="signUpForm">
              <div className="row">
                <div className="col-12 col-md-4 offset-md-2">
                  <Field
                    className="form-control signUpInput"
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                  />
                  <ErrorMessage name="firstName" component={TextError} />
                </div>

                <div className="col-12 col-md-4">
                  <Field
                    className="form-control signUpInput"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                  />
                  <ErrorMessage name="lastName" component={TextError} />
                </div>
              </div>
              <div className="row">
                < div className = "col-12 col-md-8 offset-md-2" >
                  <Field
                    className="form-control signUpInput"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                  <ErrorMessage name="email" component={TextError} />
                </div>
              </div>

              <div className="row">
                < div className = "col-12 col-md-8 offset-md-2" >
                  <Field
                    className="form-control signUpInput"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" component={TextError} />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                  <Field
                    className="form-control signUpInput"
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                  />
                  <ErrorMessage name="confirmPassword" component={TextError} />
                </div>
              </div>

              <div className="row">
                < div className = "col-12 col-md-4 offset-md-2 dobLabel" >
                  <label htmlFor="dob">Date of Birth :</label>
                </div>

                < div className = "col-12 col-md-4" >
                  <Field
                    className="form-control signUpInput"
                    type="date"
                    id="dob"
                    name="dob"
                    placeholder="DOB"
                  />
                  <ErrorMessage name="dob" component={TextError} />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                  <Field
                    className="form-control signUpInput"
                    as="select"
                    id="gender"
                    name="gender"
                  >
                    <option value="" disabled>
                      Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="">Prefer not to disclose</option>
                  </Field>
                  <ErrorMessage name="gender" component={TextError} />
                </div>
              </div>

              <div className="row mb-1 mt-4">
                <div className="col-12 d-flex justify-content-center">
                  <Field
                    className="signUpCheckBox"
                    type="checkbox"
                    name="terms"
                    id="terms"
                  />
                  <label htmlFor="terms" className="signUpCheckText">
                    By clicking here, you accept the terms & conditions
                  </label>
                </div>

                <div className="col-12 d-flex justify-content-center">
                  <ErrorMessage name="terms" component={TextError} />
                </div>
              </div>

              <div className="row m-1">
                <div className="col d-flex justify-content-center">
                  <button
                    className="cbtn btn-lg"
                    type="submit"
                    disabled={!formik.isValid}
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
          );
        }}
      </Formik>
    </div>
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
