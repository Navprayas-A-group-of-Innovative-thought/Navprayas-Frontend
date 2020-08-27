import React from 'react';
import { Form, FormGroup, Input, Col, Row, Label, Container } from "reactstrap";
import CustomButton from "../../components/Button";
import { Link } from "react-router-dom";

const BasicInfo = () => {
    return(
        <>
            <Container className="profileContainer">
                <Form>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Input
                                    className="signUpInput"
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    placeholder="First Name"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Input
                                    className="signUpInput"
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    placeholder="Last Name"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Input
                            className="signUpInput"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                        />
                    </FormGroup>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input
                                            className="signUpInput"
                                            type="date"
                                            name="dob"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <select
                                            className="signUpInput profile-gender"
                                            type="select"
                                            name="gender"
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </FormGroup>
                                </Col>
                            </Row>
                    <FormGroup>
                        <Input
                            className="signUpInput"
                            type="text"
                            name="fatherName"
                            id="fatherName"
                            placeholder="Father's Name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            className="signUpInput"
                            type="text"
                            name="motherName"
                            id="motherName"
                            placeholder="Mother's Name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            className="signUpInput"
                            type="number"
                            name="mobileNumber"
                            id="mobileNumber"
                            placeholder="Mobile Number"
                        />
                    </FormGroup>
                    <FormGroup>
                        <CustomButton className="signUpButton save-button pull-left mr-5 " buttonStyle="curved">
                            SAVE
                        </CustomButton>
                    </FormGroup>
                    <FormGroup>
                        <CustomButton className="signUpButton pull-left" buttonStyle="curved">
                            CANCEL
                        </CustomButton>
                    </FormGroup>
                </Form>
            </Container>

        </>
    );
}

export default BasicInfo;