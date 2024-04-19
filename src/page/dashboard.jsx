import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Dashboard() {
  const profile = useLoaderData();
  console.log(profile)

  return (
    <div>Dashboard</div>
  )
}

