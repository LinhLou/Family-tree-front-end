import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {clientValidationElement , serverValidationElement, toggleStyleValidation} from '../../scripts/formValidation';
import { useSelector, useDispatch } from 'react-redux';
import fetchToken from '../../services/redux/thunk/fetchToken';
import { Modal } from 'bootstrap';
import LoginModal from '../modal';



export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.login);



  const { register, handleSubmit, formState } = useForm();
  const modalRef = useRef();
  const usernameSectionRef = useRef();
  const passwordSectionRef = useRef();
  const usernameRef = useRef(null);
  const eyeRef = useRef();
  const passwordRef = useRef(null);
  const usernameReg = register('username');
  const passwordReg = register('password');
  const [ passwordErrorMes, setPasswordErrorMes ] = useState('');
  const [ usernameErrorMes, setUsernameErrorMes ] = useState('');

  const { isSubmitting } = formState;

  function togglePasswordVisibility(){
    eyeRef.current.classList.toggle('bi-eye');
    if(eyeRef.current.classList.contains('bi-eye')){
      passwordRef.current.type = "text";
    }else{
      passwordRef.current.type = "password";
    }
  }


  
  async function onSubmit(data,e){
    e.preventDefault();
    eyeRef.current.classList.add('pe-5');

    //  client side validation
    setPasswordErrorMes('Invalid password');
    setUsernameErrorMes('Invalid username');
    clientValidationElement(usernameRef.current,usernameSectionRef.current);
    clientValidationElement(passwordRef.current,passwordSectionRef.current);

    // server side validation
    if(e.target.checkValidity()){
      const res = await dispatch(fetchToken(data));
      if(!res.error){
        console.log('login successful');
        navigate("/dashboard");
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

        <div className='mb-1'>
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
              <i className="bi bi-eye-slash pe-2" ref={eyeRef}></i>
            </span>
          </div>
          <div className='invalid-feedback'>{passwordErrorMes}</div>
        </div>

        <div className='mb-3'>             
          <a href="#" className='link-primary fs-6'><small>Forget password?</small></a>
        </div>
        
        <div className="d-grid mb-3">
          <button disabled={isSubmitting} type="submit" className='btn btn-primary '>
            {isSubmitting ? 'Logging in':'Log in'}
          </button>
        </div>

        <div className="d-flex  justify-content-between">
          <small>You don't have account yet? </small>
          <a href="#" className='link-primary fs-6'><small>Create account</small></a>
        </div>
      </form>
      <LoginModal ref={modalRef}>
        <div className='fs-5 text-center'>
        Server connection error. <br />
        Please try again later!
        </div>
      </LoginModal>

    </>
  )
}
