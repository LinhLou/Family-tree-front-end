import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  const user = useSelector(state=>state.user);
  console.log(user);
  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
      <div className='d-flex justify-content-center align-items-center gap-5 mt-5 w-50'>
        <a className="btn btn-primary d-block w-50" href="/login" role="button">Log in</a>
        <a className="btn btn-primary d-block w-50" href="/signup" role="button">Sign up</a>
      </div>
    </div>
  )
}
