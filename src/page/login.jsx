import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import LoginForm from '../components/forms/loginForm.jsx';
// import FormInput from '../components/forms/FormInput.jsx';
import LoginForm from '../features/Authentification/components/LoginForm';
import { useForm, FormProvider } from "react-hook-form";



export default function Login() {
  // const [ submitStatus, setSubmitStatus ]
  const methods = useForm();
  const onSubmit = (data) => {
    console.log(typeof(data.test))
    try {
      throw new Error()
    } catch (error) {
      methods.setError ("test",{
        message:'problem server'
      })
    }
  }



  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <div className='col-sm-8 col-md-6 col-lg-4'>
        <LoginForm />

          {/* <LoginForm /> */}
          <div className="d-flex  justify-content-between mt-3">
            <small>You don't have account yet? </small>
            <Link to="/signup" className='link-primary fs-6'><small>Create an account</small></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
