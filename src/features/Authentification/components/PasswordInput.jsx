import React, { useRef } from 'react';
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function PasswordInput(props) {
    const  { register, formState:{errors, submitCount}  } = useFormContext() ;
    const eyeRef = useRef();
    const passwordRef = useRef(null);
    const { ref } = register(props.name);

    function togglePasswordVisibility(){
      eyeRef.current.classList.toggle('bi-eye');
      if(eyeRef.current.classList.contains('bi-eye')){
        passwordRef.current.type = "text";
      }else{
        passwordRef.current.type = "password";
      }
    }

    return (
      <>
        <div className="position-relative is-invalid" >
          <div className="form-floating" >
            <input type="password" className={ `form-control ${!submitCount? '': errors[props.name]? ' is-invalid':' is-valid'} `} id={props.id} placeholder={props.name} {...register(props.name,{
              required:props.required,
              validate:props.validate
            })} ref={(e)=>{ref(e); passwordRef.current = e}}/>
            <label htmlFor={props.id} className='d-flex align-items-center'>{props.label}</label>
          </div>
          <span className={`position-absolute top-50 end-0 translate-middle-y pe-4`} onClick={togglePasswordVisibility} >
            <i className="bi bi-eye-slash pe-2" ref={eyeRef}></i>
          </span>
        </div>
        <ErrorMessage
          errors={errors}
          name={props.name}
          render={({ message }) => <p className='invalid-feedback'>{message}</p>}
        />
      </>
    )
  }

