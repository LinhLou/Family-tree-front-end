import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { resetStore } from '../services/redux/resetStore';
import logo from '../assets/react.svg'

export default function Layout() {
  resetStore()
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            Name App
          </Link>
        </div>
      </nav>
      <div className='container'>
        <Outlet />
      </div>
    </>
  )
}
