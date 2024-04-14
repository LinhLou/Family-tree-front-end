import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {clientValidationElement , serverValidationElement, toggleStyleValidation} from '../../scripts/formValidation';
import { useSelector, useDispatch } from 'react-redux';
import fetchToken from '../../services/redux/thunk/fetchToken';
import { Modal } from 'bootstrap';
import SigupModal from '../modal';


export default function SigupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.login);

  const { register, handleSubmit, formState } = useForm();
  const modalRef = useRef();
  const usernameSectionRef = useRef();
  const emailSectionRef = useRef();
  const passwordSectionRef = useRef();
  const passwordAgainSectionRef = useRef();

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordAgainRef = useRef(null);
  const usernameReg = register('username');
  const emailReg = register('email');
  const passwordReg = register('password');
  const passwordAgainReg = register('passwordAgain');
  const eyePasswordRef = useRef();
  const eyePasswordAgainRef = useRef();
  const [ passwordErrorMes, setPasswordErrorMes ] = useState('');
  const [ usernameErrorMes, setUsernameErrorMes ] = useState('');
  const [ emailErrorMes, setEmailErrorMes ] = useState('');
  const [ passwordAgainErrorMes, setPasswordAgainErrorMes ] = useState('');

  const { isSubmitting } = formState;

  function togglePasswordVisibility(){
    eyePasswordRef.current.classList.toggle('bi-eye');
    if(eyePasswordRef.current.classList.contains('bi-eye')){
      passwordRef.current.type = "text";
    }else{
      passwordRef.current.type = "password";
    }
  }

  function togglePasswordAgainVisibility(){
    eyePasswordAgainRef.current.classList.toggle('bi-eye');
    if(eyePasswordAgainRef.current.classList.contains('bi-eye')){
      passwordAgainRef.current.type = "text";
    }else{
      passwordAgainRef.current.type = "password";
    }
  }
  
  async function onSubmit(data,e){
    e.preventDefault();
    eyePasswordRef.current.classList.add('pe-5');
    eyePasswordAgainRef.current.classList.add('pe-5');
    //  client side validation
    setPasswordErrorMes('Invalid password');
    setUsernameErrorMes('Invalid username');
    setEmailErrorMes('Invalid email');
    setPasswordAgainErrorMes('Invalid password');
    clientValidationElement(usernameRef.current,usernameSectionRef.current);
    clientValidationElement(passwordRef.current,passwordSectionRef.current);
    clientValidationElement(emailRef.current,emailSectionRef.current);
    clientValidationElement(passwordAgainRef.current,passwordAgainSectionRef.current);

    // server side validation
    if(e.target.checkValidity()){
      const res = await dispatch(fetchToken(data));
      if(!res.error){

        navigate("/login");

      }else{
        const errorMes = res.error.message;
        console.log(errorMes)

        if(errorMes.includes('Password')){
          setPasswordErrorMes(errorMes);
          serverValidationElement(passwordRef.current,passwordSectionRef.current);
        }else if(errorMes.includes('Username')){
          setUsernameErrorMes(errorMes);
          serverValidationElement(usernameRef.current, usernameSectionRef.current);
        }else{
          //  open a modal
          const modal = new Modal(modalRef.current);
          modal.show();
        }
      }
    }

  }


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='mb-3'>
          <div className="form-floating " ref = {usernameSectionRef}>
            <input type="text" name="username" minLength='3' className="form-control " id="floatingUsername" placeholder="username" required {...usernameReg} ref ={(e)=>{
              usernameReg.ref(e);
              usernameRef.current=e
            }} 
            onChange={(e,ele=usernameSectionRef.current)=>toggleStyleValidation(e,ele)}/>
            <label htmlFor="floatingUsername" className='d-flex align-items-center'>Username</label>
          </div>
          <div className='invalid-feedback mt-1'>{usernameErrorMes}
          </div>
        </div>

        <div className='mb-3'>
          <div className="form-floating " ref = {emailSectionRef}>
            <input type="email" name="email" className="form-control " id="floatingEamil" placeholder="email" required {...emailReg} ref ={(e)=>{
              emailReg.ref(e);
              emailRef.current=e
            }} 
            onChange={(e,ele=emailSectionRef.current)=>toggleStyleValidation(e,ele)}/>
            <label htmlFor="floatingUsername" className='d-flex align-items-center'>Email</label>
          </div>
          <div className='invalid-feedback mt-1'>{emailErrorMes}
          </div>
        </div>

        <div className='mb-3'>
          <div className="position-relative" ref={passwordSectionRef}>
            <div className="form-floating">
              <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="password" required {...passwordReg} 
              ref={(e)=>{
                passwordReg.ref(e); 
                passwordRef.current = e;
              }}
              onChange={(e,ele=passwordSectionRef.current)=>toggleStyleValidation(e,ele)}/>
              <label htmlFor="floatingPassword" className='d-flex align-items-center'>Password</label>
            </div>
            <span className="position-absolute top-50 end-0 translate-middle-y" onClick={togglePasswordVisibility} >
              <i className="bi bi-eye-slash pe-2" ref={eyePasswordRef}></i>
            </span>
          </div>
          <div className='invalid-feedback'>{passwordErrorMes}</div>
        </div>

        <div className='mb-1'>
          <div className="position-relative" ref={passwordAgainSectionRef}>
            <div className="form-floating">
              <input type="password" name="passwordAgain" className="form-control" id="floatingPasswordAgain" placeholder="password" required {...passwordAgainReg} 
              ref={(e)=>{
                passwordAgainReg.ref(e); 
                passwordAgainRef.current = e;
              }}
              onChange={(e,ele=passwordAgainSectionRef.current)=>toggleStyleValidation(e,ele)}/>
              <label htmlFor="floatingPassword" className='d-flex align-items-center'>Password Again</label>
            </div>
            <span className="position-absolute top-50 end-0 translate-middle-y" onClick={togglePasswordAgainVisibility} >
              <i className="bi bi-eye-slash pe-2" ref={eyePasswordAgainRef}></i>
            </span>
          </div>
          <div className='invalid-feedback'>{passwordAgainErrorMes}</div>
        </div>

        <div className="d-grid mt-3">
          <button disabled={isSubmitting} type="submit" className='btn btn-primary '>
            {isSubmitting ? 'Signing in':'Sign in'}
          </button>
        </div>
      </form>
      <SigupModal ref={modalRef}>
        <div className='fs-5 text-center'>
        Server connection error. <br />
        Please try again later!
        </div>
      </SigupModal>

    </>
  )
}
