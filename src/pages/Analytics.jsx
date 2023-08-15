import React, { useEffect, useState } from "react";
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





export default function Analytics() {
   const [data, setData] = useState({});

  
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

   const getData = () => {
    axiosClient
      .get("/hour")
      .then(({ data }) => {
         console.log(data);
         data.map(i=>(
          setData({
            labels: i.my_date,
            data: i.total_display,
            fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
          })
         ))
        
      })
      .catch((err) => {
        const res = err.response;
        console.log(res);
      });
  }


  


  
  useEffect(() => {
     getData();
    
  }, []);

  return (
    <div>
    <h2>Gráfico de Líneas</h2>
    <div>
    <Line data={data} options={options} />
    </div>
    
  </div>
     
    
  );
}