import React, { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import Pagination from "react-js-pagination";

export default function Messages() {
    const [message, setMessage] = useState([]);
    const [metaData, setMetaData]= useState([]);
    const [show, setShow] = useState(true);
    
   

    const getMessages=(pageNumber=1)=>{  
      axiosClient.get(`/epikkamsg?page=${pageNumber}`)
       .then(({data})=>{
        setMessage(data.data);
        setMetaData(data.meta);
          console.log(data.meta.total);
          if(data.meta.total <=5){
            setShow(false)
          }else{
            setShow(true)
          }
       })
    }
    const deleteMessage=(m)=>{
      if(!window.confirm("Estas seguro de eliminar este registro?")){
        return
      }
      axiosClient.delete(`/epikkamsg/${m.id}`)
       .then(()=>{
         getMessages()
         alert('mensaje eliminado...')
       })
    }

    const handleAction=(m)=>{
      Clipboard
    }
    useEffect(()=>{
      getMessages();
    }
    ,[])


    return(
        <div>
          
        {message.length ===0&&<div className="container empty">No hay mensajes en la bandeja de entrada...</div>}
        {message.length!==0&&<>{message.map(m=>(
            <div className="mt-5 p-2" key={m.id}>
                <div className="card" style={{ width: "18rem;"}}>
                    <div className="card-body">
                        <h5 className="card-title">{m.nombre} <i  onClick={() => {navigator.clipboard.writeText(m.nombre); alert('Copiado al portapapeles')}} className="fa-regular fa-clipboard copy-hover" data-toggle="tooltip" data-placement="top" title="Copiar"></i></h5>
                        <h6 className="card-subtitle mb-2 text-muted">{m.email} <i onClick={() => {navigator.clipboard.writeText(m.email); alert('Copiado al portapapeles')}} className="fa-regular fa-clipboard copy-hover" data-toggle="tooltip" data-placement="top" title="Copiar"></i></h6>
                        <p className="card-text">{m.telefono} <i onClick={() => {navigator.clipboard.writeText(m.telefono); alert('Copiado al portapapeles')}} className="fa-regular fa-clipboard copy-hover" data-toggle="tooltip" data-placement="top" title="Copiar"></i></p>
                        <p className="card-text"><b>Mensaje: </b>{m.mensaje}</p>
                        <button className="btn" onClick={ev=>deleteMessage(m)}><i className="fa-solid fa-trash-can"></i> Eliminar</button>
                    </div>
                </div>
            </div>
        ))}
       {show&&<Pagination
          activePage={metaData.current_page}
          totalItemsCount={metaData.total}
          itemsCountPerPage={metaData.per_page}
          onChange={(pageNumber)=> getMessages(pageNumber)}
          itemClass="page-item"
          linkClass="page-link"
          firstPageText="Primera"
          lastPageText="Última"
        />}
        </>
        }
           
        </div>
    )
}