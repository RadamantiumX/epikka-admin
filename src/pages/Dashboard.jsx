import React, { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const [report, setReport] = useState(0);
    const [total, setTotal] = useState(0);
   
    const getReport =()=>{
        axiosClient.get('/report')
         .then(({data})=>{
            setReport(data.data.length)
            console.log(data.data);
         })
         .catch(err=>{
            const response = err.response;
           
            console.log(response);
          })
    }

    const getTotalMessages = ()=>{
        axiosClient.get('/epikkamsg')
         .then(({data})=>{
            setTotal(data.meta.total)
            console.log(data.meta.total);
         })
    }
useEffect(()=>{
    getReport()
    getTotalMessages()
},[])
    return(
        <>
            <div className="container" style={{marginTop: "90px"}}>
              
                <div className="card mt-5 bg-black" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title text-light">Mensajes recibidos</h5>
                        <p className="card-text display-2 text-light"><i className="fa-solid fa-envelope fa-lg"></i> {total}</p>
                        <Link to="/messages"><a href="#" className="btn btn-primary"><i className="fa-solid fa-eye"></i> Ver</a></Link>
                    </div>
                </div>

                <div className="card mt-5" style={{width: "18rem"}}>
                    <div className="card-body bg-black">
                        <h5 className="card-title text-light">Total Visitas</h5>
                        <p className="card-text display-2 text-light"><i className="fa-solid fa-globe fa-lg"></i> {report}</p>
                        <Link to='/analytics'><a href="#" className="btn btn-primary"><i className="fa-solid fa-eye"></i> Ver</a></Link>
                    </div>
                </div>

                <Link to='/profile' className="btn btn-info mt-5"><i className="fa-solid fa-user"></i> Ver perfil</Link>

                <div className="info-txt"><p>Dominio:</p><a href="https://epikka.com.ar" target="new">epikka.com.ar</a></div>

            </div>
        </>
    )
}