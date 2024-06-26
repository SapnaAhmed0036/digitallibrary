import React from 'react'
// import './Sidebarbootstrap.css'
 import 'bootstrap/dist/css/bootstrap.css';
 import 'bootstrap/dist/js/bootstrap.bundle.js';
 import { NavLink } from "react-router-dom";
 import Logout from './Teacher/Logout';
 import'./SidebarAdmin.css';
const SidebarAdmin = () => {
  return (
    <div>
     <nav className="navbar navbar-dark custom-bg-cyan fixed-top p-0" style={{height:'100px'}}>
  <div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <button type="button" class="btn text-white" ><Logout/>
    </button>
    
     
    <div className="offcanvas offcanvas-start white-bg" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Details are all here</h5>
        <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
          <NavLink  className='btn text-light' to={"/departments-students"} >Student Management</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className='btn text-light' to={"/departments-teacher"} > Teacher Management</NavLink>
          </li>
         
         <li className='nav-item'><NavLink className='btn text-light' to={"/allcouses"} > Course Management</NavLink></li>

         <li className='nav-item'> <NavLink className='btn text-light'  to={"/allbooks"} > Book Management</NavLink></li>

         <li className='nav-item'> <NavLink className='btn text-light' to={"/profile"} >Profile</NavLink></li>
        </ul>
        
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default SidebarAdmin

