import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import LogoutButton from './LogoutButton';

export default function LayoutUser() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="./src/assets/react.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            Name App
          </Link>
          <LogoutButton />
        </div>
      </nav>
      <div className='container'>
        <Outlet />
      </div>
    </>
  )
}
