import React, { useRef } from 'react';
import PasswordInput from "./PasswordInput";
import ButtonSubmit from '../../../components/Form/ButtonSubmit';
import LinkToLogin from '../../../components/UI/link';
import { Modal } from 'bootstrap';
import ModalServerError from '../../../components/UI/modalServerError';
import ModalSuccess from '../../../components/UI/modal';
import { useForm,FormProvider } from 'react-hook-form';
import resetPassword from '../services/resetPassword';

export default function ResetPasswordForm({ token }) {
  console.log(token)
  const modalServerErrorRef = useRef();
  const modalSuccesRef = useRef();
  const methods = useForm();
  const { isSubmitting } = methods.formState;
  async function onSubmit(data){
    try {
      const res = await resetPassword(data);
      console.log(res)
      const modal = new Modal(modalSuccesRef.current);
      modal.show();
    } catch (error) {
      console.log(error.message)
      const modal = new Modal(modalServerErrorRef.current);
      modal.show();
    }
  }
  
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
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
          <input {...methods.register("token", { value: token })} type="hidden" />

          <div className="d-grid">
            <ButtonSubmit disabled={isSubmitting}>
              {isSubmitting ? 'Sending':'Send'}
            </ButtonSubmit>
          </div>
        </form>
      </FormProvider>
      <ModalServerError ref={modalServerErrorRef}/>
      <ModalSuccess ref={modalSuccesRef}>
        <div className='fs-5 text-center'>
          Your password has been successfully reset! <br />
          <LinkToLogin path="/login"> 
          <p data-bs-dismiss="modal">Log in</p>
          </LinkToLogin>
        </div>
      </ModalSuccess>
    </>
  )
}
