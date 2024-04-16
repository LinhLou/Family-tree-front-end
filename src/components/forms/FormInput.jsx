import React from 'react';
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function FormInput(props) {
    const  { register, formState:{errors, submitCount}  } = useFormContext() ;

    return (
      <>
        <div className="form-floating is-invalid" >
          <input type={props.type} className={ `form-control ${!submitCount? '': errors[props.name]? ' is-invalid':' is-valid'} `} id={props.id} placeholder={props.name} {...register(props.name,{
            required:props.required,
            validate:props.validate
          })}/>
          <label htmlFor={props.id} className='d-flex align-items-center'>{props.label}</label>
        </div>
        <ErrorMessage
          errors={errors}
          name={props.name}
          render={({ message }) => <p className='invalid-feedback'>{message}</p>}
        />
      </>
    )
  }

