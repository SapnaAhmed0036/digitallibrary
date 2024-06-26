import React from 'react'
import TeacherSidebar from '../TeacherSidebar'
import "./Individual_Sem_Std_logs.css"
import { useNavigate } from 'react-router-dom'
const Individual_Sem_Std_logs = () => {
    const naviagte=useNavigate();
  return (
    <div  id='teacher-dashboard'>
    <div id='teacher-sidebar-show'><TeacherSidebar/></div>
    <div id="teacher-content">
    
     <div id="teacher-dashboard-heading">
     <h3>1st Semester Students</h3></div>
     <div id='students'>
    
        <div className='sapna' onClick={()=>naviagte("/student-individual-log")}><h3>Sapna Ahmad</h3>
        <p>202-NUN-0036</p></div>
        <div className='mehran'><h3>Mehran</h3>
        <p>202-NUN-0036</p>
        </div>
     </div>
     </div>
     </div>
  )
}

export default Individual_Sem_Std_logs
