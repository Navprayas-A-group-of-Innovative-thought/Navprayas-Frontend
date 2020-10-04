import React from 'react'
import SignUp from './SignUp'
import Login from './Login'
import './LoginRegister.css'

const LoginRegister = ({ title, formType }) => {
  return (
    <>
      <div className='container signUpContainer'>
        <h1 className='signUpTitle title'>{title}</h1>
        <div className='signUpline1'></div>
        <div className='signUpline2'></div>
        {formType === 'login' ? <Login /> : <SignUp />}
      </div>
    </>
  )
}

export default LoginRegister
