import '../assets/scss/customizeBootstrap.scss';
import "bootstrap-icons/font/bootstrap-icons.css";
import {Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import LayoutVisiter from '../layout/layoutVisiter';
import LayoutUser from '../layout/layoutUser';
import Login from '../page/login';
import Signup from '../page/signup';
import Home from '../page/home';
import Dashboard from '../page/dashboard';
import Error from '../page/error';
import { fetchUserProfile } from '../features/Authentification';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route element={<LayoutVisiter />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route element={<LayoutUser/> }>
        <Route path="/dashboard" 
          loader={fetchUserProfile}
          element={<Dashboard />} />
      </Route>

      <Route path="/*" element={<Error />} />
    </Route>
  )
)

export default router

