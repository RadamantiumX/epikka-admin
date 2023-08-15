import React, { useEffect, useState } from "react";
import Logo from '../assets/img/logoeppika.png';
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const {user, setUser,token, setToken} = useStateContext()

  const getUser = ()=>{
     axiosClient.get('/user')
      .then(({data})=>{
        setUser(data);
      })
  }
  
  const onLogout=()=>{
     axiosClient.post('/logout')
      .then(()=>{
         setUser({});
         setToken(null);
      })
  }

  useEffect(()=>{
       getUser();
  },[])

  return (
    <>
      
<header>
 
  <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
    <div className="position-sticky">
      <div className="list-group list-group-flush mx-3 mt-4">
        <Link to="/dashboard" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
          <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Dashboard</span>
        </Link>
        <Link to="/messages" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
        <i className="fa-solid fa-envelope me-3"></i><span>Mensajes</span>
        </Link>
        <Link to="/analytics" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
        <i className="fa-solid fa-chart-simple me-3"></i><span>Analiticas</span>
        </Link>
        
      </div>
    </div>
  </nav>
  

 
  <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">

    <div className="container-fluid">
    
      <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu"
        aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
      </button>

     
      <Link to="/dashboard" className="navbar-brand">
        <img src={Logo} height="30" width="100" alt="Epikka Logo"
          loading="lazy" />
      </Link>
      
      

     
      <div className="dropdown">
  <button
    className="btn btn-primary dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
    {user.name}
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a className="dropdown-item" href="#" onClick={onLogout}>Salir</a></li>
    
  </ul>
</div>
    </div>
   
  </nav>

</header>



<main style={{marginTop: '58px;'}}>
  <div className="container pt-4"></div>
</main>

    </>
  );
}