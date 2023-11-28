import './Dashboard.css';
import './LoginUi.css';
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import {useEffect, useState} from "react";
import image from "./images.jpg"

const columns = [
  {
    name: "name",
    selecter:row=>row.id
  },
  {
    name: "name",
    selecter:row=>row.name
  },
  {
    name: "name",
    selecter:row=>row.email
  },
]
function Settings() {
  const [column, setColumn] = useState([])
  const [records, setRecords] = useState([])

  useEffect(()=>{
    fetch('data.json')
    .then(res =>res.json())
    .then(data=>{
      setColumn(Object.keys(data.users[0]))
      setRecords(data.users)
    })
  },[])
  console.log(records);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
      
        //Prevent page reload
        event.preventDefault();
        navigate("/");
    };
  return (
    <body>
        <div> 
       
        <div class="wrapper">
        <div class="section">
            <div class="top_navbar">
                <div class="hamburger">
                <img class="admin_image topright1" src={image}></img>
                <div class="topright">&nbsp;&nbsp;<span>Welcome admin</span></div>
                </div>
            </div>

        </div>
        <div class="sidebar">
        <div class="profile">
                <img src={image} alt="profile_picture"/>
                <h3>Admin</h3>
                <p>Maintanance</p>
               <button class="logout_admin"type="button"onClick={handleSubmit}> Logout</button>
            </div>
            <div>
                <ul>
                <li>
                    <a href="dashboard">
                        <span class="icon"><i class="fas fa-home"></i></span>
                        <span class="item">All Applications</span>
                    </a>
                </li>
                <li>
                    <a href="Machine" >
                        <span class="icon"><i class="fas fa-desktop"></i></span>
                        <span class="item">Machine Learning</span>
                    </a>
                </li>
                <li>
                    <a href='Python' >
                        <span class="icon"><i class="fas fa-user-friends"></i></span>
                        <span class="item">python</span>
                    </a>
                </li>
                <li>
                    <a href="Matlab">
                        <span class="icon"><i class="fas fa-tachometer-alt"></i></span>
                        <span class="item">MATLAB</span>
                    </a>
                </li>
                <li>
                    <a href="Cpro" >
                        <span class="icon"><i class="fas fa-database"></i></span>
                        <span class="item">C Programming</span>
                    </a>
                </li>
                <li>
                    <a href="Settings" class="active">
                        <span class="icon"><i class="fas fa-cog"></i></span>
                        <span class="item">Settings</span>
                    </a>
                </li>
            </ul>
        </div>
        </div>

    </div>
       <div class="centered">  <h1 class="header">Welcome To The Dashboard .You have Logged in successfully! </h1> <div className="app new">
    <div className="login-form1">
      
    <div className="form">
    <div>
   

<div class='main'>
    <div class='main__header'>
      <h2>Your Settings</h2>
    </div>
    <div class='main__content'>
      <div class='main__avatar'>
        <div class='main__avatar--overlay'>
          John Doe
        </div>
      </div>
      <div class='main__settings-form'>
        <form action='#' method='post'/>
          <label class='main__input-label'>Your name:</label>
          <input class='main__input' placeholder='Admin' type='text'/>
          <label class='main__input-label'>Your e-mail:</label>
          <input class='main__input' placeholder='johndoe@gmail.com' type='text'/>
          <label class='main__input-label'>Your e-mail for notifications:</label>
          <input class='main__input' placeholder='johndoe@gmail.com' type='text'/>
        
        <button class='btn main__save-button' onClick={()=>{alert("Saved")}}>Save</button>
        <button class='btn main__cancel-button'onClick={()=>{alert("Cancelled")}}>Cancel</button>
      </div>
    </div>
  </div>
      </div> 
    </div>
    </div>
    </div>

    
</div>
       
        </div>
        </body>

    
  );
}

export default Settings;