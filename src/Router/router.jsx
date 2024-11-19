import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout';
import Error from '../Components/Error';
import SeviceDetails from '../Components/SeviceDetails';
import AuthLayout from '../Layout/AuthLayout';
import Register from '../Layout/Register';
import Login from '../Layout/Login';
import PrivateRoute from './PrivateRoute';

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
        element:<PrivateRoute><SeviceDetails></SeviceDetails></PrivateRoute>,
        
      },
      {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children:[
          {
            path: "/auth/login",
            element: <Login></Login>
          },
          {
            path: "/auth/register",
            element: <Register></Register>
          }
        ]
      },
      {
        path: "*",
        element: <Error></Error>,
      },
  ]);

export default router;