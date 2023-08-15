import React, { useEffect, useState } from "react";
import axiosClient from "../axios-client";

export default function Profile() {

    const [user, setUser]=useState({});

    const getUserData=()=>{
        axiosClient.get('/user')
         .then(({data})=>{
            setUser(data);
         })
    }
    useEffect(()=>{
        getUserData();
    },[])

    return(
        <>
        <div className="container" style={{marginTop: "90px"}}>
        <div className="card" style={{width: "18rem"}}>
  <div className="card-header bg-success" style={{fontSize: "20px"}}>
    Perfil del Administrador
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Nombre: {user.name}</li>
    <li className="list-group-item">Email: {user.email}</li>
    <li className="list-group-item">Creado el: {user.created_at}</li>
  </ul>
</div>

        </div>
        </>
    )
    
}