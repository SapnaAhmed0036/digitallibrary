import React from 'react'
import TeacherSidebar from '../TeacherSidebar'
import './Individual_logs.css'
const Individual_log = () => {
  return (
    <div  id='teacher-dashboard'>
    <div id='teacher-sidebar-show'><TeacherSidebar/></div>
    <div id="teacher-content">
    
     <div id="teacher-dashboard-heading"><h2>Logs</h2></div>
     <div id='logs'>
     <div id='head1'><h2>Week-3</h2>
     <p>Start-Time:8:30pm</p>
     <p>End-Time:9:30pm</p>
     <p>Activity:Reading</p></div>
     </div>

     <div id='head2'><h2>Week-4</h2>
     <p>Start-Time:7:30pm</p>
     <p>End-Time:8:30pm</p>
     <p>Activity:Download</p></div>
     </div>
     </div>
     
  )
}

export default Individual_log
