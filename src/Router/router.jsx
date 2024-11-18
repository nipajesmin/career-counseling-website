import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout';
import Error from '../Components/Error';
import SeviceDetails from '../Components/SeviceDetails';

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
        element: <SeviceDetails></SeviceDetails>,
      },
      {
        path: "/auth",
        element: <h2>login</h2>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
  ]);

export default router;