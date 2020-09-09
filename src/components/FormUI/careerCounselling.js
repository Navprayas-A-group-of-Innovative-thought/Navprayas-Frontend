import React from "react";
import TextError from "../TextError";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../ProfileUI/profileEdit.css";
import "../../pages/Auth/LoginRegister.css";
import { initialValues } from "../../shared/careerCounselling.initialValues";
import validationSchema from "../../util/registrationForm.validationSchema";

const onSubmit = (initialvalues, onSubmitProps) => {
  console.log("Form data", initialvalues);
  onSubmitProps.setSubmitting(false);
};

const CareerCounselling = () => {
  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <h4 className="col-12 col-md-4 offset-md-2 mb-4">
                Personal Info
              </h4>
              <div className="row">
                <div className="col-12 col-md-4 offset-md-2">
                  <label htmlFor="firstName">
                    First Name<span style={{ color: "red" }}> *</span>
                  </label>
                  <Field
                    className="form-control signUpInput  mb-0 mt-2"
                    type="text"
                    id="firstName"
                    name="user.firstName"
                    placeholder="First Name"
                  />
                  <ErrorMessage name="user.firstName" component={TextError} />
                </div>

                <div className="col-12 col-md-4 mb-4">
                  <label htmlFor="lastName">
                    Last Name<span style={{ color: "red" }}> *</span>
                  </label>
                  <Field
                    className="form-control signUpInput  mb-0 mt-2"
                    type="text"
                    id="lastName"
                    name="user.lastName"
                    placeholder="Last Name"
                  />

                  <ErrorMessage name="user.lastName" component={TextError} />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-8 offset-md-2 mb-4">
                  <label htmlFor="email">
                    E-mail<span style={{ color: "red" }}> *</span>
                  </label>
                  <Field
                    className="form-control signUpInput  mb-0 mt-2"
                    type="email"
                    id="email"
                    name="user.email"
                    placeholder="Email"
                  />
                  <ErrorMessage name="user.email" component={TextError} />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4 offset-md-2">
                  <label htmlFor="dob">
                    DOB<span style={{ color: "red" }}> *</span>
                  </label>
                  <Field
                    className="form-control signUpInput  mb-0 mt-2"
                    type="date"
                    id="dob"
                    name="user.dob"
                  />
                  <ErrorMessage name="user.dob" component={TextError} />
                </div>
                <div className="col-12 col-md-4 mb-4">
                  <label htmlFor="gender">
                    Gender<span style={{ color: "red" }}> *</span>
                  </label>
                  <Field
                    className="form-control signUpInput  mb-0 mt-2"
                    as="select"
                    id="gender"
                    name="user.gender"
                  >
                    <option value="">Select an option</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Field>
                  <ErrorMessage name="user.gender" component={TextError} />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CareerCounselling;
