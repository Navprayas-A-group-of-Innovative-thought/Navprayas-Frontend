import React from 'react'
import {
    Form, FormGroup, Container, Input
}
    from 'reactstrap';

import CustomButton from '../../components/Button';
import { Link } from 'react-router-dom';

const forgotPassword = () => {

    return(
        <>
            <Container className="signUpContainer">
                <h1 className="signUpTitle title">Reset Password</h1>
                <div className="signUpline1"></div>
                <div className="signUpline2"></div>
                <Form className="signUpForm">
                    <p>Enter your email address below and we'll send you a link to reset your password.</p>
                    <FormGroup>
                        <Input className="signUpInput" type="email" name="email" id="email" placeholder="Email"/>
                    </FormGroup>
                    <div className="signUpButtonDiv">
                        <CustomButton className="signUpButton mt-4" buttonStyle="large curved">Reset Password</CustomButton>
                    </div>
                    <FormGroup className="text-center mt-4 mb-4">
                        <Link className="signUpLink" to={"/login"}>Login</Link> or <Link className="signUpLink" to={"/signup"}>Sign Up</Link>
                    </FormGroup>
                </Form>
            </Container>
        </>
    );

}

export default forgotPassword;