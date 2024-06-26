import React from 'react'
import TeacherSidebar from '../TeacherSidebar'
import './Std_logs.css'
import { useNavigate } from 'react-router-dom'
const TeacherDashboard = () => {
    const naviagte=useNavigate();
  return (
    <div  id='teacher-dashboard'>
    <div id='teacher-sidebar-show'><TeacherSidebar/></div>
    <div id="teacher-content">
    
     <div id="teacher-dashboard-heading">
     <h1>Student Logs</h1></div>
     <div className='logs'>
     <div id='first' onClick={()=>naviagte("/check-logs")}><h2>1st Semester</h2></div>
     <div id='second'onClick={()=>naviagte("/check-logs")}><h2>2nd Semester</h2></div>
     <div id='third'><h2>3rd Semester</h2></div>
     <div id='fourth'><h2>4th Semester</h2></div>
     </div>
      
     </div>
    </div>
  )
}

export default TeacherDashboard
