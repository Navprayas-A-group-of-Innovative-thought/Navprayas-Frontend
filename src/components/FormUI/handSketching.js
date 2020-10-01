import React from "react";
import TextError from "../TextError";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../ProfileUI/profileEdit.css";
import "../../pages/Auth/LoginRegister.css";
import { initialValues } from "../../shared/handSketching.initialValues";
import validationSchema from "../../util/registrationForm.validationSchema";

const onSubmit = (initialvalues, onSubmitProps) => {
  console.log("Form data", initialvalues);
  onSubmitProps.setSubmitting(false);
};

const HandSketching = () => {
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

              <div className="row">
                <div className="col-12 col-md-4 offset-md-2 mb-4">
                  <label htmlFor="fatherName">
                    Father Name<span style={{ color: "red" }}> *</span>
                  </label>
                  <Field
                    className="form-control signUpInput  mb-0 mt-2"
                    type="text"
                    id="fatherName"
                    name="user.fatherName"
                    placeholder="Father Name"
                  />

                  <ErrorMessage name="user.fatherName" component={TextError} />
                </div>

                <div className="col-12 col-md-4 mb-4">
                  <label htmlFor="motherName">
                    Mother Name<span style={{ color: "red" }}> *</span>
                  </label>
                  <Field
                    className="form-control signUpInput  mb-0 mt-2"
                    type="text"
                    id="motherName"
                    name="user.motherName"
                    placeholder="Mother Name"
                  />

                  <ErrorMessage name="user.motherName" component={TextError} />
                </div>
              </div>

              <h4 className="col-12 col-md-4 offset-md-2 mb-4">Contact</h4>
              <div className="row">
                <div className="col-12 col-md-4 offset-md-2 mb-4">
                  <label htmlFor="primary">
                    Primary<span style={{ color: "red" }}> *</span>
                  </label>
                  <Field
                    className="form-control signUpInput  mb-0 mt-2"
                    type="number"
                    id="primary"
                    name="user.contact.primary"
                    placeholder="1234567890"
                  />

                  <ErrorMessage
                    name="user.contact.primary"
                    component={TextError}
                  />
                </div>
                <div className="col-12 col-md-4 mb-4">
                  <label htmlFor="other">Other</label>
                  <Field
                    className="form-control signUpInput  mb-0 mt-2"
                    type="number"
                    id="other"
                    name="user.contact.other"
                    placeholder="1234567890"
                  />

                  <ErrorMessage
                    name="user.contact.other"
                    component={TextError}
                  />
                </div>
              </div>
              <h4 className="col-12 col-md-4 offset-md-2 mb-4">Address</h4>
              <div className="row">
                <div className="col-12 col-md-4 offset-md-2 mb-4">
                  <label htmlFor="houseNumber">
                    House Number<span style={{ color: "red" }}> *</span>
                  </label>
                  <Field
                    className="form-control signUpInput  mb-0 mt-2"
                    type="text"
                    id="houseNumber"
                    name="user.address.houseNumber"
                    placeholder="House Number"
                  />
                  <ErrorMessage
                    name="user.address.houseNumber"
                    component={TextError}
                  />
                </div>

                <div className="col-12 col-md-4 mb-4">
                  <label htmlFor="addressLine1">
                    Address Line 1<span style={{ color: "red" }}> *</span>
                  </label>
                  <Field
                    className="form-control signUpInput  mb-0 mt-2"
                    type="text"
                    id="addressLine1"
                    name="user.address.addressLine1"
                    placeholder="Address Line 1"
                  />
                  <ErrorMessage
                    name="user.address.addressLine1"
                    component={TextError}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-8 offset-md-2 mb-4">
                  <label htmlFor="addressLine2">Address Line 2</label>
                  <Field
                    className="form-control signUpInput  mb-0 mt-2"
                    type="text"
                    id="addressLine2"
                    name="user.address.addressLine2"
                    placeholder="Address Line 2"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4 offset-md-2 mb-4">
                  <label htmlFor="landmark">Landmark</label>
                  <Field
                    className="form-control signUpInput  mb-0 mt-2"
                    type="text"
                    id="landmark"
                    name="user.address.landmark"
                    placeholder="Landmark"
                  />
                </div>
                <div className="col-12 col-md-4 mb-4">
                  <label htmlFor="district">
                    District<span style={{ color: "red" }}> *</span>
                  </label>
                  <Field
                    className="form-control signUpInput  mb-0 mt-2"
                    type="text"
                    id="district"
                    name="user.address.district"
                    placeholder="District"
                  />
                  <ErrorMessage name="user.address.district" component={TextError} />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4 offset-md-2 mb-4">
                  <label htmlFor="state">
                    State<span style={{ color: "red" }}> *</span>
                  </label>
                  <Field
                    className="form-control signUpInput  mb-0 mt-2"
                    type="text"
                    id="state"
                    name="user.address.state"
                    placeholder="State"
                  />
                  <ErrorMessage name="user.address.state" component={TextError} />
                </div>

                <div className="col-12 col-md-4 mb-4">
                  <label htmlFor="city">
                    City<span style={{ color: "red" }}> *</span>
                  </label>
                  <Field
                    className="form-control signUpInput  mb-0 mt-2"
                    type="text"
                    id="city"
                    name="user.address.city"
                    placeholder="City"
                  />
                  <ErrorMessage name="user.address.city" component={TextError} />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4 offset-md-2 mb-4">
                  <label htmlFor="pincode">
                    Pincode<span style={{ color: "red" }}> *</span>
                  </label>
                  <Field
                    className="form-control signUpInput  mb-0 mt-2"
                    type="number"
                    id="pincode"
                    name="user.address.pincode"
                    placeholder="Pincode"
                  />
                  <ErrorMessage name="user.address.pincode" component={TextError} />
                </div>

                <div className="col-12 col-md-4 mb-4">
                  <label htmlFor="country">
                    Country<span style={{ color: "red" }}> *</span>
                  </label>
                  <Field
                    className="form-control signUpInput  mb-0 mt-2"
                    type="text"
                    id="country"
                    name="user.address.country"
                    placeholder="Country"
                  />
                  <ErrorMessage name="user.address.country" component={TextError} />
                </div>
              </div>
              <div className="text-center mb-4">
                <button type="reset" className="btn btnOutColor btn-lg mr-4">
                  Reset
                </button>

                <button
                  className="cbtn btn-lg"
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default HandSketching;
