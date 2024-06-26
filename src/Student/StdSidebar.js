import { NavLink } from "react-router-dom";
import "./StdSidebar.css"
import React from 'react'
import LocalLibraryTwoToneIcon from '@mui/icons-material/LocalLibraryTwoTone';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import PersonIcon from '@mui/icons-material/Person';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const StdSidebar = () => {
  return (
    
      <div className=" std-Sidebar">
      
      <div className="std-elements">
      <div className="std-center">
      <div className="std-library-icon"><LocalLibraryTwoToneIcon  style={{ fontSize: 60 }}/></div>
     <div className="std-text"> <h3>Student Dashboard</h3></div>
      </div>
      
    <ul className="std-element">
    <div className="for-space"></div>
    <div className="std-hoja">
    
      <div className="std-user-icon"><MenuBookIcon/></div>
      <div className="std-StdManagment">
      
       <li className="std-first">
        {/* <NavLink to={"/departments-students"}> Student Management</NavLink> */}
        <NavLink to={"/student-courses"} isActive={() => location.pathname === "/student-courses"} id="active">Course</NavLink>
        
        </li></div>
</div>
      
       <div className="std-Course-icon-both">
       <div className="std-course-icon"><LibraryBooksOutlinedIcon/></div>
       <div className="std-courseManagement"><li className="std-Third">
        <NavLink 
       to={"/libraryallbooks"} > Library Books</NavLink>

       </li></div>
       </div>

       <div className="std-book-icon-both">
         <div className="std-book-icon"><CollectionsBookmarkIcon/></div>
       <div className="std-book"><li className="std-fouth"> <NavLink to={"/allbooks"} >My Course Items</NavLink></li>
       </div>
       </div>
        
        <div className="std-profile-icon-both">
        <div className="std-profile-icon"><PersonIcon/></div>
       <div className="std-profile">
       <li className="std-fifth"> <NavLink to={"/std_profile"} >Profile</NavLink></li>
       
       </div>
       </div>

       <div className="std-sty-1"></div>
    </ul>
    </div>
    
    </div>
    
  )
}

export default StdSidebar
