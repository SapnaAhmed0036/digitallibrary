import React from 'react'
import StdSidebar from './StdSidebar'
import './stdDashboard.css'
 import Sidebarbootstrap from './Course/Sidebarbootstrap'

const StdDashboard = () => {
  return (
    <div  className='std-dashboard'>
    <div className='std-sidebar-show'><Sidebarbootstrap /></div>
    <div id="std-content">
    <div>Welcome to Student Dashboard...</div>
     </div>
    </div>
  )
}

export default StdDashboard
