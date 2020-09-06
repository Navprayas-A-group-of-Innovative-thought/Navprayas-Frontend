import React from "react";
import TextError from "./TextError";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./profileEdit.css";
import "../../pages/Auth/LoginRegister.css";
import { initialValues } from '../../shared/mtse.initialValues';
import validationSchema from '../../util/registrationForm.validationSchema';

const onSubmit = (initialvalues, onSubmitProps) => {
    console.log("Form data", initialvalues);
    onSubmitProps.setSubmitting(false);
};

const Mtse = () => {
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
                            <h4 className="col-12 col-md-4 offset-md-2 mb-4">Personal Info</h4>
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
                                < div className = "col-12 col-md-4 offset-md-2" >
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
                                < div className = "col-12 col-md-4 mb-4" >
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
                                        name="fatherName"
                                        placeholder="Father Name"
                                    />

                                    <ErrorMessage name="fatherName" component={TextError} />
                                </div>

                                <div className="col-12 col-md-4 mb-4">
                                    <label htmlFor="motherName">
                                        Mother Name<span style={{ color: "red" }}> *</span>
                                    </label>
                                    <Field
                                        className="form-control signUpInput  mb-0 mt-2"
                                        type="text"
                                        id="motherName"
                                        name="motherName"
                                        placeholder="Mother Name"
                                    />

                                    <ErrorMessage name="motherName" component={TextError} />
                                </div>
                            </div>
                            <h4 className="col-12 col-md-4 offset-md-2 mb-4">Education</h4>
                            <div className="row">
                                <div className="col-12 col-md-8 offset-md-2 mb-4">
                                    <label htmlFor="school">
                                        School<span style={{ color: "red" }}> *</span>
                                    </label>
                                    <Field
                                        className="form-control signUpInput  mb-0 mt-2"
                                        type="text"
                                        id="school"
                                        name="education.school"
                                        placeholder="School"
                                    />
                                    <ErrorMessage name="education.school" component={TextError} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-4 offset-md-2 mb-4">
                                    <label htmlFor="primary">
                                        Class<span style={{ color: "red" }}> *</span>
                                    </label>
                                    <Field
                                        className="form-control signUpInput  mb-0 mt-2"
                                        type="text"
                                        id="class"
                                        name="education.class"
                                        placeholder="Class"
                                    />

                                    <ErrorMessage name="education.class" component={TextError} />
                                </div>
                                <div className="col-12 col-md-4 mb-4">
                                    <label htmlFor="board">
                                        Board<span style={{ color: "red" }}> *</span>
                                    </label>
                                    <Field
                                        className="form-control signUpInput  mb-0 mt-2"
                                        type="text"
                                        id="board"
                                        name="education.board"
                                        placeholder="CBSE"
                                    />

                                    <ErrorMessage name="education.board" component={TextError} />
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
                                        type="text"
                                        id="primary"
                                        name="user.contact.primary"
                                        placeholder="1234567890"
                                    />

                                    <ErrorMessage name="user.contact.primary" component={TextError} />
                                </div>
                                <div className="col-12 col-md-4 mb-4">
                                    <label htmlFor="other">
                                        Other
                                    </label>
                                    <Field
                                        className="form-control signUpInput  mb-0 mt-2"
                                        type="text"
                                        id="other"
                                        name="user.contact.other"
                                        placeholder="1234567890"
                                    />

                                    <ErrorMessage name="user.contact.other" component={TextError} />
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
                                        name="address.houseNumber"
                                        placeholder="House Number"
                                    />
                                    <ErrorMessage name="address.houseNumber" component={TextError} />
                                </div>

                                <div className="col-12 col-md-4 mb-4">
                                    <label htmlFor="addressLine1">
                                        Address Line 1<span style={{ color: "red" }}> *</span>
                                    </label>
                                    <Field
                                        className="form-control signUpInput  mb-0 mt-2"
                                        type="text"
                                        id="addressLine1"
                                        name="address.addressLine1"
                                        placeholder="Address Line 1"
                                    />
                                    <ErrorMessage name="address.addressLine1" component={TextError} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-8 offset-md-2 mb-4">
                                    <label htmlFor="addressLine2">Address Line 2</label>
                                    <Field
                                        className="form-control signUpInput  mb-0 mt-2"
                                        type="text"
                                        id="addressLine2"
                                        name="address.addressLine2"
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
                                        name="address.landmark"
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
                                        name="address.district"
                                        placeholder="District"
                                    />
                                    <ErrorMessage name="address.district" component={TextError} />
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
                                        name="address.state"
                                        placeholder="State"
                                    />
                                    <ErrorMessage name="address.state" component={TextError} />
                                </div>

                                <div className="col-12 col-md-4 mb-4">
                                    <label htmlFor="city">
                                        City<span style={{ color: "red" }}> *</span>
                                    </label>
                                    <Field
                                        className="form-control signUpInput  mb-0 mt-2"
                                        type="text"
                                        id="city"
                                        name="address.city"
                                        placeholder="City"
                                    />
                                    <ErrorMessage name="address.city" component={TextError} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-4 offset-md-2 mb-4">
                                    <label htmlFor="pincode">
                                        Pincode<span style={{ color: "red" }}> *</span>
                                    </label>
                                    <Field
                                        className="form-control signUpInput  mb-0 mt-2"
                                        type="text"
                                        id="pincode"
                                        name="address.pincode"
                                        placeholder="Pincode"
                                    />
                                    <ErrorMessage name="address.pincode" component={TextError} />
                                </div>

                                <div className="col-12 col-md-4 mb-4">
                                    <label htmlFor="country">
                                        Country<span style={{ color: "red" }}> *</span>
                                    </label>
                                    <Field
                                        className="form-control signUpInput  mb-0 mt-2"
                                        type="text"
                                        id="country"
                                        name="address.country"
                                        placeholder="Country"
                                    />
                                    <ErrorMessage name="address.country" component={TextError} />
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

export default Mtse;
