import React from 'react';
import LoginForm from '../components/forms/loginForm.jsx';

export default function Login() {

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <div className='col-sm-8 col-md-6 col-lg-4'>
        <LoginForm />
        </div>
      </div>
    </div>
  )
}
