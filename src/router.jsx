import { Navigate, createBrowserRouter } from "react-router-dom";

import GuestLayout from "./layouts/GuestLayout";
import Login from "./pages/Login";

import DefaultLayout from "./layouts/DefaultLayout";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";


const router = createBrowserRouter([
    {
          path:'/',
          element: <DefaultLayout/>,
          children:[
            {
                path:'/',
                element: <Navigate to='/dashboard'/>
            },
            {
                path:'/dashboard',
                element: <Dashboard/>  
            },
            {
                path:'/messages',
                element: <Messages/>
            },
            {
                path: '/analytics',
                element: <Analytics/>
            },
            {
                path: '/profile',
                element: <Profile/>
            }
          ]
    },
    {
          path: '/',
          element: <GuestLayout/>,
          children:[
            
            {
                path:'/login',
                element: <Login/>
           }
          ]
    }
]);

export default router;

