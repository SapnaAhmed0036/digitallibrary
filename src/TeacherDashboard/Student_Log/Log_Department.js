import React from 'react'
import TeacherSidebar from '../TeacherSidebar';
import './Log_Department.css';
import { useNavigate } from 'react-router-dom';
import Logout from '../../AdminComponenet/Teacher/Logout';
const Log_Department = () => {
    const navigate=useNavigate();
  return (
    <div  id='teacher-dashboard'>
    
    <div id='teacher-sidebar-show'><TeacherSidebar/></div>
  
    <div id="teacher-content">
    
    <div id="teacher-dashboard-heading">
    <div id='logout'><Logout/></div>
     <h3>All Departments</h3></div>
     
     <div id='computer-science' onClick={()=>navigate("/Student-logs")}><h3>Computer Science</h3></div>
     <div id='bba'><h3>BBA</h3></div>
     <div id='english'><h3>English</h3></div>

     </div>

     </div>
  )
}

export default Log_Department
