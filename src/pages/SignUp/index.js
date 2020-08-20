import React from 'react';
import { Col, Row, Button,
        Form, FormGroup, Label,
        Input,
        Container}
from 'reactstrap';
import './SignUp.css';
import { Link } from 'react-router-dom';


const SignUp = () => {
    return(
        <>
        <Container className="signUpContainer">
            <h1 className="signUpTitle title">Create new account</h1>
            <div className="signUpline1"></div>
            <div className="signUpline2"></div>
            <Form className="signUpForm">
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Input className="signUpInput" type="text" name="firstName" id="firstName" placeholder="First Name" />
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Input className="signUpInput" type="text" name="lastName" id="lastName" placeholder="Last Name" />
                    </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Input className="signUpInput" type="email" name="email" id="email" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    <Input className="signUpInput" type="password" name="password" id="password" placeholder="Password"/>
                </FormGroup>
                <FormGroup>
                    <Input className="signUpInput" type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" />
                </FormGroup>
                <div className="last">
                    <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Input className="signUpInput" type="date" name="DOB" id="DOB" placeholder="DOB" onfocus="(this.type='date')"/>
                                </FormGroup>
                            </Col>
                        <Col md={6}>
                            <FormGroup>
                                    <Input className="signUpInput" type="select" name="gender" id="gender" placeholder="Gender">
                                        <option value="" disabled selected>Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
                <FormGroup className="signUpTerms" check>
                    <Input className="signUpCheckBox" type="checkbox" name="check" id="signUpCheck"/>
                    <Label  className="signUpCheckText" for="signUpCheck" check>By clicking here, you accept the terms & conditions</Label>
                </FormGroup>
                <div className="signUpButtonDiv">
                    <Button className="signUpButton">REGISTER</Button>
                </div>

                <FormGroup>
                    <p>Already have an account ? <Link className="signUpLink" to="/login">LOGIN</Link></p>
                </FormGroup>
            </Form>
            </Container>
        </>

    );
}

export default SignUp;