import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../components/Form/signupForm.jsx';



export default function Signup() {

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <div className='col-sm-8 col-md-6 col-lg-4'>
          <SignupForm />
          <div className="d-flex  justify-content-between mt-3">
            <small>Already registered? </small>
            <Link to="/login" className='link-primary fs-6'><small>Log in</small></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
