import React,{useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import LinkToResetPassword from '../../../components/UI/link';
import FormInput from '../../../components/Form/FormInput';
import PasswordInput from './PasswordInput';
import ButtonSubmit from '../../../components/Form/ButtonSubmit';
import { Modal } from 'bootstrap';
import ModalServerError from '../../../components/UI/modalServerError';
import { fetchUserProfile } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

export default function LoginForm() {
  const modalRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const methods = useForm();
  const { isSubmitting } = methods.formState;
  
  async function onSubmit(data){
    try {
      const res = await dispatch(fetchUserProfile(data));
      if(res.error){
        throw new Error(res.error.message);
      }
      navigate('/dashboard');
    } catch (error) {
      if(error.message.includes('username')){
        methods.setError('username',{
          message:'username is incorrect'
        })
      }else if(error.message.includes('password')){
        methods.setError('password',{
          message:"password is incorrect"
        })
      }else{
        const modal = new Modal(modalRef.current);
        modal.show();
      }
    }

  }
  
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <div className='mb-3'>
            <FormInput {...{type:'text', name:'username', label:"username", id:"idUsername",
              contraints:{
                required:"user is required"
              }
              }}/>
          </div>
          <div className='mb-3'>
            <PasswordInput {...{name:"password", label:"password", id:"idPassword",
              contraints:{
                required:"password is required"
              }
            }}/>
          </div>
          <div className='mb-3'>             
            <LinkToResetPassword path={"/resetPassword"}><small>Forget password?</small></LinkToResetPassword>
          </div>
          <div className="d-grid">
            <ButtonSubmit disabled={isSubmitting}>
              {isSubmitting ? 'Loading':'Log in'}
            </ButtonSubmit>
          </div>
        </form>
      </FormProvider>
      <ModalServerError ref={modalRef}/>
    </>
  )
}
