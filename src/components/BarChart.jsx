import React,{useEffect} from "react";
import axiosClient from "../axios-client";
import { Bar } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Link } from "react-router-dom";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export default function BarChart() {
    var seccion = [];
   var numeros = [];
  
  const options = {
  
    scales: {
        responsive: true,
      
    }
  }

   const getData2 = () => {
    axiosClient
      .get("/url")
      .then(({ data }) => {

        for(let i=0;i<data.length;i++){
             seccion.push(data[i].section);
            numeros.push(parseInt(data[i].total));
          }
        
      })
      .catch((err) => {
        const res = err.response;
        console.log(res);
      });
  }

 
  


var miData = {
    labels: seccion,
    datasets:[{
       label: 'Click para desplegar',
       data: numeros,
       tension: 0.5,
       fill: true,
       borderColor: 'rgb(53, 162, 235)',
       pointRadius:5,
       
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }]
}


  
  useEffect(() => {
     getData2();
    
  }, []);

    return(
    <>
    <div className="container">
      <div className="charts">
      <Link to="/analytics/line-chart" className="btn btn-info"><i className="fa-solid fa-arrow-left"></i> Ir a visitas por día</Link>
      <Bar data={miData} options={options}/>
     </div>
     </div>
    </>
    )
}