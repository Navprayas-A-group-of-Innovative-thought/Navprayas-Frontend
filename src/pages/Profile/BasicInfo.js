import React from 'react';
import { Form, FormGroup, Input, Col, Row, Label, Container } from "reactstrap";
import CustomButton from "../../components/Button";
import { Link } from "react-router-dom";

const BasicInfo = () => {
    return(
        <>
            <div className="container profileContainer">
                <div className="form" id="basicInfo" href="/basicInfo">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <Input
                                    className="signUpInput"
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    placeholder="First Name"
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
                                    placeholder="Last Name"
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
                        />
                    </div>
                            <div className="form-row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <Input
                                            className="signUpInput"
                                            type="date"
                                            name="dob"
                                            placeholder="DOB"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <select
                                            className="signUpInput profile-gender"
                                            type="select"
                                            name="gender"
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                    <div className="form-group">
                        <Input
                            className="signUpInput"
                            type="text"
                            name="fatherName"
                            id="fatherName"
                            placeholder="Father's Name"
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            className="signUpInput"
                            type="text"
                            name="motherName"
                            id="motherName"
                            placeholder="Mother's Name"
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            className="signUpInput"
                            type="number"
                            name="mobileNumber"
                            id="mobileNumber"
                            placeholder="Mobile Number"
                        />
                    </div>
                    <div className="form-group">
                        <CustomButton className="signUpButton save-button pull-left mr-5 " buttonStyle="curved">
                            SAVE
                        </CustomButton>
                    </div>
                    <div className="form-group">
                        <CustomButton className="signUpButton pull-left" buttonStyle="curved">
                            CANCEL
                        </CustomButton>
                    </div>
                </div>
            </div>

        </>
    );
}

export default BasicInfo;