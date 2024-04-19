import React from 'react';
import { useNavigate } from 'react-router-dom';
import { resetStore } from '../services/redux/resetStore';

export default function LogoutButton() {
  const navigate = useNavigate();
  function handleClick(){
    resetStore();
    navigate('/');
  }
  return (
    <div className='btn btn-primary' onClick={handleClick}>Log out</div>
  )
}
