import React,{useEffect} from "react";
import axiosClient from "../axios-client";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Link } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function LineChart() {
    var fechas = [];
   var numeros = [];
  
  const options = {
    scales: {
        responsive: true,
      
    }
  }

   const getData = () => {
    axiosClient
      .get("/date")
      .then(({ data }) => {
         for(let i=0;i<data.length;i++){
            fechas.push(data[i].my_date);
            numeros.push(parseInt(data[i].total_display));
         }
         
      })
      .catch((err) => {
        const res = err.response;
        console.log(res);
      });
  }

 
  


var miData = {
    labels: fechas,
    datasets:[{
       label: 'Click para desplegar',
       data: numeros,
       tension: 0.5,
       fill: true,
       borderColor: 'rgb(255,99,132)',
       pointRadius:5,
       pointBorderColor: 'rgba(255,99,132)',
       pointBackgroundColor: 'rgba(255,99,132)'
    }]
}


  
  useEffect(() => {
     getData();
    
  }, []);

    return(
    <>
    <div className="container">
     
      <div className="charts">
        <Link to="/analytics/bar-chart" className="btn btn-info"><i className="fa-solid fa-arrow-left"></i> Ir a visitas por sección</Link>
      <Line data={miData} options={options}/>
     </div>
     </div>
    </>
    )
}