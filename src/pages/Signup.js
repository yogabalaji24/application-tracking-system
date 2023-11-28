import './Home.css';
import './LoginUi.css';
import Footer_div from './Footer.js';
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {
    // React States
    const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "admin",
      password: "12345678"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    
    //Prevent page reload
    event.preventDefault();

   
        alert("Form submitted Successfully");
        navigate('/');
        
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Name </label>
          <input type="text" name="uname" required />
         
        </div>
        
        <div className="input-container">
          <label>E-mail ID </label>
          <input type="text" name="email" required />
        </div>
        <div className="input-container">
          <label>Mobile No </label>
          <input type="number" name="number" required />
         
        </div>
        <div className="input-container">
          <label>Primary Skill</label>
          <select type="number" name="number" required >
            <option>Machine Learning</option>
            <option>Python</option>
            <option>MATLAB</option>
            <option>C Programming</option>
          </select>
        </div>
        <div className="input-container">
          <label>Resume </label>
          <input type="file" name="email" required />
        </div>
        <div className="button-container">
       
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  return (
    <body>
    <div> 
       
           
         <div class="left_div">   <div className="app">
      <div className="login-form">
        <div className="title">Sign Up</div>
        {isSubmitted ? <div></div> : renderForm}
        
      </div>
    </div>

    
</div>
       
           
            <Footer_div />
        </div>
        </body>

    
  );
}

export default Signup;