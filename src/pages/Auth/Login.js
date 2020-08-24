import React from 'react';
import {
    Form, FormGroup
}
    from 'reactstrap';
import CustomInput from '../../components/Input'
import CustomButton from '../../components/Button';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
    <>
        <Form className="signUpForm">
            <FormGroup>
                <CustomInput type="email" name="email" id="email" label="Email"/>
            </FormGroup>
            <FormGroup>
                <CustomInput type="password" name="password" id="password" label="Password"/>
            </FormGroup>
            <div className="signUpButtonDiv">
                <CustomButton className="signUpButton" buttonStyle="large curved">LOGIN</CustomButton>
            </div>
            <FormGroup>
                <Link className="signUpLink" to={"/reset"}>Forgot Password?</Link>
            </FormGroup>
            <FormGroup>
                <p>Don't have an account ? <Link className="signUpLink" to="/signup">REGISTER HERE</Link></p>
            </FormGroup>
        </Form>
    </>

    );
}

export default Login;