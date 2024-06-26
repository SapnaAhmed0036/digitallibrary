import React from 'react'
import StdSidebar from '../StdSidebar'
import './Course_Detail.css'
import { useNavigate } from 'react-router-dom'
const Course_Detail = () => {
  const nav=useNavigate();
  return (
    <div>
      <div  id='std-dashboard'>
    <div id='std-sidebar-show'><StdSidebar/></div>
    <div id="std-content">
     <div id="std-dashboard-heading">
     <div id='books-content'> <button onClick={()=>{
        nav("/std-books")
     }}>Books</button></div>
     <div className='weekly-lesson-plan'> <button>Weekly Lesson plan</button></div>
      <div className='My-lesson-plan'><button>My Lesson Plan</button></div>
     </div> 
     </div>
    </div>
    </div>
  )
}

export default Course_Detail
