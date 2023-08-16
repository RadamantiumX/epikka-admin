import React, { useState } from "react";
import LineChart from "../components/LineChar";
import BarChart from "../components/BarChart";
import { Link } from "react-router-dom";






export default function Analytics() {

  

  
   

  return (
    <div className="container mt-5">
      
    <div className="charts">
     <div className="d-flex justify-content-around mt-5">
      <Link to="/analytics/line-chart" className="btn btn-info display-1" > <i className="fa-solid fa-chart-line fa-lg"></i> Visitas por día</Link>
      <Link to="/analytics/bar-chart" className="btn btn-info display-1" ><i className="fa-solid fa-chart-bar fa-lg"></i> Cantidad por sección</Link>
      </div> 
     
    </div>
    
  </div>
     
    
  );
}