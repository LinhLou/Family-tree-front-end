import React from 'react';
import { VerifyEmailForm } from '../features/Authentification';


export default function VerifyEmail() {

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <div className='col-sm-8 col-md-6 col-lg-4'>
          <div className="h2 text-center mb-4">Reset your password</div>
          <p className='mb-4 text-center'>Enter your email address and we will send you instructions to reset your password.</p>
          <VerifyEmailForm />
        </div>
      </div>
    </div>
  )
}
