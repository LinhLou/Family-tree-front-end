import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from '../../../components/Form/FormInput';
import PasswordInput from './PasswordInput';
import ButtonSubmit from '../../../components/Form/ButtonSubmit'

export default function LoginForm() {
  const methods = useForm();
  const { isSubmitting } = methods.formState;
  
  function onSubmit(data){
    console.log(data);

  }


  
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <div className='mb-3'>
          <FormInput {...{type:'email', name:'email', label:"email", id:"idEmail",
            contraints:{
              required:"Email is required",
              pattern:{
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message:'Invalid email'
              }
            }
            }}/>
        </div>
        <div className='mb-3'>
          <PasswordInput {...{name:"password", label:"password", id:"idPassword",
            contraints:{
              required:"Invalid password"
            },
            validate:{
              fiveCharacterMinimum:(v)=>v.length>=5|| "Password must contain at least 5 characters"
            }
          }}/>
        </div>
        <div className='mb-3'>             
          <a href="#" className='link-primary fs-6'><small>Forget password?</small></a>
        </div>
        <div className="d-grid">
          <ButtonSubmit disabled={isSubmitting}>
            {isSubmitting ? 'Logging in':'Log in'}
          </ButtonSubmit>
        </div>
      </form>
    </FormProvider>
  )
}
