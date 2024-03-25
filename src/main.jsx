import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Root/Roots.jsx';
import Home from './Components/Home/Home.jsx';
import Ststics from './Static/Ststics.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
     {
      path:'/statics',
      element:<Ststics></Ststics>,
     },
     {
      path:'/jobs',
      element: <AppliedJobs></AppliedJobs>,
      loader: ()=>fetch('/jobs.json'),
     },
     {
      path:'/blogs',
      element: <Blogs></Blogs>,
     },
     {
      path:'/job/:id',
      element: <JobDetails></JobDetails>,
      loader:()=>fetch('../jobs.json')
     },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
