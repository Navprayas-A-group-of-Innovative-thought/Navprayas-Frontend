import React from 'react';
import {
    Form, FormGroup,
    Input
}
    from 'reactstrap';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/Button';


const Login = () => {
    return (
    <>
        <Form className="signUpForm">
            <FormGroup>
                <Input className="signUpInput" type="email" name="email" id="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
                <Input className="signUpInput" type="password" name="password" id="password" placeholder="Password" />
            </FormGroup>
            <div className="signUpButtonDiv">
                <CustomButton className="signUpButton" buttonStyle="large curved">LOGIN</CustomButton>
            </div>
            <FormGroup>
                <Link className="signUpLink">Forgot Password?</Link>
            </FormGroup>
            <FormGroup>
                <p>Don't have an account ? <Link className="signUpLink" to="/signup">REGISTER HERE</Link></p>
            </FormGroup>
        </Form>
    </>

    );
}

export default Login;