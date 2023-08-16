import { Navigate, createBrowserRouter } from "react-router-dom";

import GuestLayout from "./layouts/GuestLayout";
import Login from "./pages/Login";

import DefaultLayout from "./layouts/DefaultLayout";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChar";


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
                path: '/analytics/line-chart',
                element: <LineChart/>
            },
            {
                path: '/analytics/bar-chart',
                element: <BarChart/>
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

