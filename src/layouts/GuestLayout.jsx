import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

export default function GuestLayout() {
 const {token} = useStateContext();
 
 if(token){
    return <Navigate to='/' />
 }

    return(
        <>
        <div className="guest">
            <Outlet/>
        </div>
        </>
    )
}