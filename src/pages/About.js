import './About.css';
import './LoginUi.css';
import Footer_div from './Footer.js';
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import avatar from "./avatar.png";
import background from "./background.jpg";
function About() {
   
  return (
    <body class="">
    <div> 

    <div class="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<div class="about_sec">
<h2 class="header">Our Team</h2>
<div class="row2">
  <div class="column">
    <div class="card">
      <img class="avatar" src={avatar} alt="Jane"/>
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img class="avatar"src={avatar} alt="Mike"/>
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img class="avatar" src={avatar} alt="John"/>
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
      </div>
    </div>
  </div>
  
  </div>
  
  
</div>


            <Footer_div />
        </div>
        </body>

    
  );
}

export default About;