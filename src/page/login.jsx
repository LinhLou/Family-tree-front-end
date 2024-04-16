import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import LoginForm from '../components/forms/loginForm.jsx';
// import FormInput from '../components/forms/FormInput.jsx';
import PasswordInput from '../features/Authentification/components/PasswordInput.jsx';

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
  const {submitCount, errors}=methods.formState;
  console.log(submitCount)



  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <div className='col-sm-8 col-md-6 col-lg-4'>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
            <PasswordInput {...{type:'text', name:'test', id:'testId', label:'Test', required:'it is required', validate:{
              isNumber: v => typeof(v)==='string' || 'it must be a number',
              lessThanFive: v=> parseInt(v)<5 || 'it must be smaller than 5',
              greaterThanTwo: v=>parseInt(v)>2 || 'it must be greater than two'
            }}}/>
            <input type="submit" />
          </form>
        </FormProvider>

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
