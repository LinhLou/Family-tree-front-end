import React,{ useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from '../../../components/Form/FormInput';
import PasswordInput from './PasswordInput';
import ButtonSubmit from '../../../components/Form/ButtonSubmit';
import signup from '../services/signup';
import SignupModal from '../../../components/UI/modal';
import ModalServerError from '../../../components/UI/modalServerError';
import { Modal } from 'bootstrap';
import LinkToLogin from '../../../components/UI/link';


export default function SignupForm() {
  const modalSuccessRef = useRef();
  const modalFailRef = useRef();
  const methods = useForm();
  const { isSubmitting } = methods.formState;

  async function onSubmit(data){
    try {
      await signup(data);
      const modal = new Modal(modalSuccessRef.current);
      modal.show();
    } catch (error) {
      if(error.message.includes('email')){
        methods.setError('email',{
          message:'This email is aldready registered!'
        });
      }else if(error.message.includes('username')){
        methods.setError('username',{
          message:'This username is aldready registered!'
        })
      }else{
        const modal = new Modal(modalFailRef.current);
        modal.show();
      }
    }
  }

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <div className='mb-3'>
            <FormInput {...{ type:'email', id:'idEmail', label:'email',name:'email',
              contraints:{
                required: "email is required",
                pattern:{
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message:'Invalid email'
                }
              }
            }}/>
          </div>
          <div className='mb-3'>
            <FormInput {...{ type:'text', id:'idUsername', label:'username',name:'username',
              contraints:{
                required: "username is required",
              }
            }}/>
          </div>
          <div className='mb-3'>
            <PasswordInput {...{type:'password', id:'idPassword', label:'password',name:'password',
              contraints:{
                required: "password is required"
              },
              validate:{
                fiveCharacterMinimum:(v)=>v.length>=5|| "Password must contain at least 5 characters"
              }
            }}/>
          </div>
          <div className='mb-3'>
            <PasswordInput {...{type:'password', id:'idPasswordRepeat', label:'repeat password',name:'passwordRepeat',
              contraints:{
                required: "password is required"
              },
              validate:{
                samePassword:(v)=>v===methods.getValues('password')|| "Invalid password"
              }
            }}/>
          </div>
          <div className="d-grid">
            <ButtonSubmit disabled={isSubmitting}>
              {isSubmitting ? 'Loading':'Sign up'}
            </ButtonSubmit>
          </div>
        </form>
      </FormProvider>
      <ModalServerError ref={modalFailRef} />
      <SignupModal ref={modalSuccessRef}>
        <div className='fs-5 text-center'>
          Your account has been successfully created! <br />
          <LinkToLogin path="/login"> 
          <p data-bs-dismiss="modal">Log in</p>
          </LinkToLogin>
        </div>
      </SignupModal>
    </>
  )
}
