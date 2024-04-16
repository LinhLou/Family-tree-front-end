import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from '../../../components/forms/FormInput';

export default function LoginForm() {
  const methods = useForm();
  function onSubmit(data){
    console.log(data);

  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormInput {...{type:'email', name:'email', label:"email", id:"idEmail", placeholder:"email",
          contraints:{
            required:"Email is required",
          }, 
          validate:{

          }}}/>
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  )
}
