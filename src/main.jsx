import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Component/Header/Navbar/Navbar';
import Header from './Component/Header/Header';
import Dashboard from './Component/Header/dashboartd/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children:[
      {
        path:'/navbar',
        element:<Navbar></Navbar>,
      },
      {
        path:'/sao',
        element:<Dashboard></Dashboard>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
