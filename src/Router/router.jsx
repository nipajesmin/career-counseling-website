import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout';
import Error from '../Components/Error';
import SeviceDetails from '../Components/SeviceDetails';
import AuthLayout from '../Layout/AuthLayout';
import Register from '../Layout/Register';
import Login from '../Layout/Login';
import PrivateRoute from './PrivateRoute';
import MyProfile from '../Profile/MyProfile';
import ConsultationForm from '../Private/ConsultationForm';
import AboutUs from '../Components/AboutUs';
import ForgotPassword from '../Layout/ForgotPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/career",
    element: <h2>career layout</h2>,
  },
  {
    path: "/services/:id",
    element: <PrivateRoute><SeviceDetails></SeviceDetails></PrivateRoute>,

  },
  {
    path: "/myProfile",
    element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,

  },
  {
    path: "/consultationForm",
    element: <PrivateRoute><ConsultationForm></ConsultationForm></PrivateRoute>,

  },
  {
    path: "/aboutUs",
    element: <AboutUs></AboutUs>,

  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
        
      },
      {
        path: "/auth/register",
        element: <Register></Register>
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword></ForgotPassword>
      },
    ]
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;