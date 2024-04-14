import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import checkValidationElement,{toggleStyleValidation} from './scripts/formValidation';
import UserService from '../../services/userService';


export default function LoginForm() {
  const { register, handleSubmit, formState } = useForm();
  const usernameSectionRef = useRef();
  const passwordSectionRef = useRef();
  const usernameRef = useRef(null);
  const eyeRef = useRef();
  const passwordRef = useRef(null);
  const usernameReg = register('username');
  const passwordReg = register('password');

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
    checkValidationElement(usernameRef,usernameSectionRef);
    checkValidationElement(passwordRef,passwordSectionRef);
    e.target.classList.add('was-validated');

    console.log(data)
    console.log(JSON.stringify(data))

    // server side validation
    if(e.target.checkValidity()){
      const user = new UserService('mockApiSuccess');
      try {

        const token = await user.loginUser(data);
        console.log(token);

      } catch (error) {
        if(error.name=='TypeError'){
          const errorMessage = error.message;
          // console.log(errorMessage);
          console.error('server problem');
          console.log(error)
        }else{
          console.log(error.message)
        }
      }
    }

  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>

      <div className='mb-3'>
        <div className="form-floating " ref = {usernameSectionRef}>
          <input type="text" name="username" minLength='3' className="form-control " id="floatingUsername" placeholder="username" required {...usernameReg} ref ={(e)=>{
            usernameReg.ref(e);
            usernameRef.current=e
          }} 
          onChange={(e,ele=usernameSectionRef)=>toggleStyleValidation(e,ele)}/>
          <label htmlFor="floatingUsername" className='d-flex align-items-center'>Username</label>
        </div>
        <div className='invalid-feedback mt-1'>Invalid username
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
            onChange={(e,ele=passwordSectionRef)=>toggleStyleValidation(e,ele)}/>
            <label htmlFor="floatingPassword" className='d-flex align-items-center'>Password</label>
          </div>
          <span className="position-absolute top-50 end-0 translate-middle-y" onClick={togglePasswordVisibility} >
            <i className="bi bi-eye-slash pe-2" ref={eyeRef}></i>
          </span>
        </div>
        <div className='invalid-feedback'>Invalid Password</div>
      </div>

      <div className='mb-3'>             
        <a href="#" className='link-primary fs-6'><small>Forget password?</small></a>
      </div>
      
      <div className="d-grid mb-3">
        <button type="submit" className='btn btn-primary '>Log in</button>
      </div>

      <div className="d-flex  justify-content-between">
        <small>You don't have account yet? </small>
        <a href="#" className='link-primary fs-6'><small>Create account</small></a>
      </div>
    </form>
  )
}
