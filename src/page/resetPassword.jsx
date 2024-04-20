import React from 'react';
import { ResetPasswordForm } from '../features/Authentification';
import { useParams } from 'react-router-dom';


export default function ResetPassword() {
  let { token } = useParams();

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <div className='col-sm-8 col-md-6 col-lg-4'>
          <ResetPasswordForm token={token}/>
        </div>
      </div>
    </div>
  )
}
