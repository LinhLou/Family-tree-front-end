import React, { useRef } from 'react';
import FormInput from '../../../components/Form/FormInput';
import ButtonSubmit from '../../../components/Form/ButtonSubmit';
import { Modal } from 'bootstrap';
import ModalServerError from '../../../components/UI/modalServerError';
import ModalSuccess from '../../../components/UI/modal';
import { useForm,FormProvider } from 'react-hook-form';
import verifyEmail from '../services/verifyEmail';

export default function VerifyEmailForm() {
  const modalServerErrorRef = useRef();
  const modalSuccesRef = useRef();
  const methods = useForm();
  const { isSubmitting } = methods.formState;
  async function onSubmit(data){
    try {
      const res = await verifyEmail(data);
    } catch (error) {
      if(error.message==='email is inexist!'){
        methods.setError('email',{
          message:"This email address is not registered."
        })
      }else {
        const modal = new Modal(modalServerErrorRef.current);
        modal.show();
      }

    }

  }
  
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <FormInput {...{type:"email", name:"email", label:"email", id:"idEmail",
            contraints:{
              required: "email is required",
              pattern:{
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message:'Invalid email'
              }
            }
          }}/>
          <div className="d-grid mt-3">
            <ButtonSubmit disabled={isSubmitting}>
              {isSubmitting ? 'Sending':'Send'}
            </ButtonSubmit>
          </div>
        </form>
      </FormProvider>
      <ModalServerError ref={modalServerErrorRef}/>
      <ModalSuccess ref={modalSuccesRef}>
        <div className='fs-5 text-center '>
          A link has been sent to your email to reset your password! <br />
          Please check your email!
        </div>
      </ModalSuccess>
    </>
  )
}
