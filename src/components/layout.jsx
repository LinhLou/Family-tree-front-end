import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export  function Layout() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="./src/assets/react.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            Tree Family
          </Link>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  )
}
