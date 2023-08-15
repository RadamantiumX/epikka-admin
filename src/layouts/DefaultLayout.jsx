import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import Sidebar from "../components/SideBar";

export default function DefaultLayout() {
    const {token, notification}= useStateContext();
    if(!token){
        return <Navigate to="/login"/>
    }
    return(
        <>
        <main className="default">
            <Sidebar/>
            <Outlet/>
        </main>
        </>
    )
}