import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Dashboard() {
  const state =  useSelector(state=>state.login);
  console.log(state)
  return (
    <div>Dashboard</div>
  )
}
