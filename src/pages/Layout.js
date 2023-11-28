import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div> 
       
       <nav class="navbar background"> 
           <ul class="nav-list"> 
               <div class="logo"> 
               <img src= 
"https://static-00.iconduck.com/assets.00/budget-accounting-icon-2048x2048-3s1ombbc.png" /> 
<h1>&nbsp;Application Tracking System</h1>
               </div> 
               
               <li><h2> </h2></li>
               <li><h2><Link to="/">Home</Link></h2></li> 
               <li><h2> <Link to="/Login">Login</Link></h2></li>
               <li><h2> <Link to="/Signup">Sign up</Link></h2></li>
               <li><h2><Link to="/About">About us</Link></h2></li>
               
           </ul> 

         
       </nav> 
       </div>
      

      <Outlet />
    </>
  )
};

export default Layout;