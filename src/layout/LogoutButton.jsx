import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const navigate = useNavigate();
  function handleClick(){
    navigate('/');
  }
  return (
    <div className='btn btn-primary' onClick={handleClick}>Log out</div>
  )
}
