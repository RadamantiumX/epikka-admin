import React, { useRef, useState } from "react";
import Logo from '../assets/img/logoeppika.png';
import axiosClient from "../axios-client";

import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
import { useStateContext } from "../context/ContextProvider";

export default function Login() {
    const [message, setMessage] = useState('');
    const [data, setData] = useState(false);
    const {setUser, setToken}= useStateContext();

    const emailRef = useRef();
    const passwordRef = useRef();

    const onSubmit=(e)=>{
        e.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        axiosClient.post('/login',payload)
          .then(({data})=>{
             if(data.user['role']==='admin'){
                setToken(data.token);
                setUser(data.user);
                setData(false);
             }else{
                setData(true);
             }
          })
          .catch(err=>{
            const response = err.response;
            setData(true);
            console.log(response);
          })
    }

    return(
        <>
            <div className="auth-section"> 
                <div className="logo-box">
                    <img className="img-fluid" src={Logo} alt="Logo Epikka"/>
                    {data&&<div className="alert alert-danger w-25 flex alig-center" role="alert">
                        Ha ocurrido un error al intentar ingresar...
                    </div>}
                </div>
                <form onSubmit={onSubmit}>
                    
                    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                        <MDBInput ref={emailRef} className="text-white" wrapperClass='mb-4' label='Email address' id='emil' type='email' />
                        <MDBInput ref={passwordRef} wrapperClass='mb-4' label='Password' id='password' type='password' />
                        <MDBBtn className="mb-4">Ingresar</MDBBtn>
                    </MDBContainer>
                </form>
            </div>
        </>
    )
}