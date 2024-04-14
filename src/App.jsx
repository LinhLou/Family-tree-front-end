import './sass/boostrap.scss';
import "bootstrap-icons/font/bootstrap-icons.css";

import {Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './components/layout';
import Login from './page/login';
import Signup from './page/signup';
import Dashboard from './page/dashboard';
import Error from './page/error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route element={ <Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/*" element={<Error />} />
    </Route>
  )
)

export default router

