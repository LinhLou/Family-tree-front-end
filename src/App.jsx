import './sass/boostrap.scss';
import "bootstrap-icons/font/bootstrap-icons.css";

import {Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './page/login';
import Signup from './page/signup';
import Dashboard from './page/dashboard';
import Error from './page/error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/*" element={<Error />} />
    </Route>
  )
)

export default router

