import React from 'react';
import { Container } from 'reactstrap';
import SignUp from './SignUp';
import Login from './Login';
import './LoginRegister.css';


const LoginRegister = ({ title, formType }) => {
    return(
        <>
            <Container className="signUpContainer">
                <h1 className="signUpTitle title">{ title }</h1>
                <div className="signUpline1"></div>
                <div className="signUpline2"></div>
                {formType === 'login' ? <Login></Login> : <SignUp></SignUp>}
            </Container>
        </>
    );
};

export default LoginRegister;