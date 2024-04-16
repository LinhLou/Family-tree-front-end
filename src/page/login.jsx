import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../features/Authentification/components/LoginForm';



export default function Login() {


  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <div className='col-sm-8 col-md-6 col-lg-4'>
        <LoginForm />
        <div className="d-flex  justify-content-between mt-3">
          <small>You don't have account yet? </small>
          <Link to="/signup" className='link-primary fs-6'><small>Create account</small></Link>
        </div>
        </div>
      </div>
    </div>
  )
}
