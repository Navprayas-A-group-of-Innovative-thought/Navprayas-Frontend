import React from 'react';
import TextError from './TextError';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './profileEdit.css';
import '../../pages/Auth/LoginRegister.css'

const FormEdit = ({initialValues, validationSchema, onSubmit}) => {
    return(
        <div className="container">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {formik => {
                    return (
                        <Form>
                            <div className="row">
                                <div className="col-12 col-md-4 offset-md-2">
                                    <label htmlFor="firstName">First Name<span style={{color:"red"}}>  *</span></label>
                                    <Field className="form-control signUpInput  mb-0 mt-2" type="text" id='firstName' name='firstName' placeholder="First Name" />
                                    <ErrorMessage name='firstName' component={TextError} />
                                </div>

                                <div className="col-12 col-md-4 mb-4">
                                    <label htmlFor="lastName">Last Name<span style={{ color: "red" }}>  *</span></label>
                                    <Field className="form-control signUpInput  mb-0 mt-2" type="text" id='lastName' name='lastName' placeholder="Last Name" />

                                    <ErrorMessage name='lastName' component={TextError} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-8 offset-md-2 mb-4">
                                    <label htmlFor="email">E-mail<span style={{ color: "red" }}>  *</span></label>
                                    <Field className="form-control signUpInput  mb-0 mt-2" type="email" id='email' name='email' placeholder="Email" />
                                    <ErrorMessage name='email' component={TextError} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-8 offset-md-2 mb-4">
                                    <label htmlFor="dob">DOB<span style={{ color: "red" }}>  *</span></label>
                                    <Field className="form-control signUpInput  mb-0 mt-2" type="date" id='dob' name='dob' />
                                    <ErrorMessage name='dob' component={TextError} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-8 offset-md-2 mb-4">
                                    <label htmlFor="gender">Gender<span style={{ color: "red" }}>  *</span></label>
                                    <Field className="form-control signUpInput  mb-0 mt-2" as="select" id='gender' name='gender'>
                                        <option value="">Select an option</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Field>
                                    <ErrorMessage name='gender' component={TextError} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-4 offset-md-2 mb-4">
                                    <label htmlFor="fatherName">Father Name<span style={{ color: "red" }}>  *</span></label>
                                    <Field className="form-control signUpInput  mb-0 mt-2" type="text" id='fatherName' name='fatherName' placeholder="Father Name" />

                                    <ErrorMessage name='fatherName' component={TextError} />
                                </div>

                                <div className="col-12 col-md-4 mb-4">
                                    <label htmlFor="motherName">Mother Name<span style={{ color: "red" }}>  *</span></label>
                                    <Field className="form-control signUpInput  mb-0 mt-2" type="text" id='motherName' name='motherName' placeholder="Mother Name" />

                                    <ErrorMessage name='motherName' component={TextError} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-4 offset-md-2 mb-4">
                                    <label htmlFor="contact">Contact<span style={{ color: "red" }}>  *</span></label>
                                    <Field className="form-control signUpInput  mb-0 mt-2" type="text" id='contact' name='contact' placeholder="Contact" />

                                    <ErrorMessage name='contact' component={TextError} />
                                </div>

                                <div className="col-12 col-md-4 mb-4">
                                    <label htmlFor="schoolOrUniv">School Or University<span style={{ color: "red" }}>  *</span></label>
                                    <Field className="form-control signUpInput  mb-0 mt-2" as="select" id='schoolOrUniv' name='schoolOrUniv'>
                                        <option value="">Select an option</option>
                                        <option value="school">School</option>
                                        <option value="university">University</option>
                                    </Field>
                                    <ErrorMessage name='schoolOrUniv' component={TextError} />
                                </div>
                            </div>
                            {
                                formik.values.schoolOrUniv !== '' ?
                                    (
                                        formik.values.schoolOrUniv === 'school' ?
                                            (
                                                <div className="row">
                                                    <div className="col-12 col-md-4 offset-md-2 mb-4">
                                                        <label htmlFor="class">Class<span style={{ color: "red" }}>  *</span></label>
                                                        <Field className="form-control signUpInput  mb-0 mt-2" type="text" id='class' name='class' placeholder="Class" />

                                                    </div>
                                                    <div className="col-12 col-md-4 mb-4">
                                                        <label htmlFor="board">Board<span style={{ color: "red" }}>  *</span></label>
                                                        <Field className="form-control signUpInput  mb-0 mt-2" type="text" id='board' name='board' placeholder="Board" />

                                                    </div>
                                                </div>
                                            ) :
                                            <div className="row">
                                                <div className="col-12 col-md-8 offset-md-2 mb-4">
                                                    <label htmlFor="year">Year<span style={{ color: "red" }}>  *</span></label>
                                                    <Field className="form-control signUpInput  mb-0 mt-2" type="text" id='year' name='year' placeholder='Year' />
                                                </div>
                                            </div>
                                    ) : null
                            }
                            <div className="row">
                                <div className="col-12 col-md-4 offset-md-2 mb-4">
                                    <label htmlFor="houseNumber">House Number<span style={{ color: "red" }}>  *</span></label>
                                    <Field className="form-control signUpInput  mb-0 mt-2" type="text" id='houseNumber' name='houseNumber' placeholder='House Number' />
                                    <ErrorMessage name='houseNumber' component={TextError} />
                                </div>

                                <div className="col-12 col-md-4 mb-4">
                                    <label htmlFor="addressLine1">Address Line 1<span style={{ color: "red" }}>  *</span></label>
                                    <Field className="form-control signUpInput  mb-0 mt-2" type="text" id='addressLine1' name='addressLine1' placeholder='Address Line 1' />
                                    <ErrorMessage name='addressLine1' component={TextError} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-8 offset-md-2 mb-4">
                                    <label htmlFor="addressLine2">Address Line 2</label>
                                    <Field className="form-control signUpInput  mb-0 mt-2" type="text" id='addressLine2' name='addressLine2' placeholder='Address Line 2' />

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-8 offset-md-2 mb-4">
                                    <label htmlFor="landmark">Landmark</label>
                                    <Field className="form-control signUpInput  mb-0 mt-2" type="text" id='landmark' name='landmark' placeholder='Landmark' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-4 offset-md-2 mb-4">
                                    <label htmlFor="district">District<span style={{ color: "red" }}>  *</span></label>
                                    <Field className="form-control signUpInput  mb-0 mt-2" type="text" id='district' name='district' placeholder='District' />
                                    <ErrorMessage name='district' component={TextError} />
                                </div>

                                <div className="col-12 col-md-4 mb-4">
                                    <label htmlFor="city">City<span style={{ color: "red" }}>  *</span></label>
                                    <Field className="form-control signUpInput  mb-0 mt-2" type="text" id='city' name='city' placeholder='City' />
                                    <ErrorMessage name='city' component={TextError} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-4 offset-md-2 mb-4">
                                    <label htmlFor="pincode">Pincode<span style={{ color: "red" }}>  *</span></label>
                                    <Field className="form-control signUpInput  mb-0 mt-2" type="text" id='pincode' name='pincode' placeholder='Pincode' />
                                    <ErrorMessage name='pincode' component={TextError} />
                                </div>

                                <div className="col-12 col-md-4 mb-4">
                                    <label htmlFor="country">Country<span style={{ color: "red" }}>  *</span></label>
                                    <Field className="form-control signUpInput  mb-0 mt-2" type="text" id='country' name='country' placeholder='Country' />
                                    <ErrorMessage name='country' component={TextError} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-8 offset-md-2 mb-4">
                                    <label htmlFor="facebookLink">Facebook Url</label>
                                    <Field className="form-control signUpInput  mb-0 mt-2" type="text" id='facebookLink' name='facebookLink' placeholder='https://www.facebook.com/profile.php?id=1234' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-8 offset-md-2 mb-4">
                                    <label htmlFor="lnkedinLink">LinkeIn Url</label>
                                    <Field className="form-control signUpInput  mb-0 mt-2" type="text" id='lnkedinLink' name='lnkedinLink' placeholder='https://www.linkedin.com/in/abcd' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-8 offset-md-2 mb-4">
                                    <label htmlFor="githubLink">Github url</label>
                                    <Field className="form-control signUpInput  mb-0 mt-2" type="text" id='githubLink' name='githubLink' placeholder='https://github.com/abcd' />
                                </div>
                            </div>
                            <div className="text-center mb-4">
                                <button type='reset' className="btn btnOutColor btn-lg mr-4">Reset</button>

                                <button
                                    className="cbtn btn-lg"
                                    type='submit'
                                    disabled={!formik.isValid || formik.isSubmitting}
                                >
                                    Submit
                                </button>
                            </div>
                        </Form>
                    )
                }}

            </Formik>
        </div>
    )
}

export default FormEdit;