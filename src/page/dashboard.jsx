import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function Dashboard() {
  // const profile = useLoaderData();
  const userProfile = useSelector(state=>state.user.profile)
  console.log(userProfile)


  return (
    <div>Dashboard</div>
  )
}

