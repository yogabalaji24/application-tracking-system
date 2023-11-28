import './Home.css';

import Footer_div from './Footer.js';
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import background from "./background.jpg";



function Home() {
   
  return (
    <body >
      
    <div > 
    <div class="row1">
     
<div class="column1">  <img class="image" src={background}></img>

</div>
<div style={{marginTop: "-73px;"}} class="column2">  <h1>Welcome To The Application Tracking System ! </h1><br/>    <p>An applicant tracking system is a software application that enables the electronic handling of recruitment and hiring needs. An ATS can be implemented or accessed online at enterprise- or small-business levels, depending on the needs of the organization; free and open-source ATS software is also available.
  
</p>
<p>An applicant tracking system (ATS) is software for recruiters and employers to track candidates throughout the recruiting and hiring process.</p>
</div>
</div>
<Footer_div />
        </div>
        
 
        </body>

    
  );
}

export default Home;