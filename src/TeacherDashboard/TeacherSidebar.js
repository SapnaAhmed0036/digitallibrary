// import { NavLink } from "react-router-dom";
// import "./TeacherSidebar.css"
// import React from 'react'
// import LocalLibraryTwoToneIcon from '@mui/icons-material/LocalLibraryTwoTone';
// import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
// import PersonIcon from '@mui/icons-material/Person';
// import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import HistoryIcon from '@mui/icons-material/History';


// const TeacherSidebar = () => {
//   return (
    
//       <div className=" teacher-Sidebar">
      
//       <div className="teacher-elements">
//       <div className="teacher-center">
//       <div className="teacher-library-icon"><LocalLibraryTwoToneIcon  style={{ fontSize: 60 }}/></div>
//      <div className="teacher-text"> <h3>Teacher Dashboard</h3></div>
//       </div>
      
//     <ul className="teacher-element">
//     <div className="for-space"></div>
//     <div className="teacher-hoja">
    
//       <div className="teacher-user-icon"><MenuBookIcon/></div>
//       <div className="teacher-StdManagment">
      
//        <li className="teacher-first">
        
//         <NavLink to={"/departments-students"} isActive={() => location.pathname === "/departments-students"} id="active">Courses</NavLink>
        
//         </li></div>
// </div>
      
//        <div className="teacher-Course-icon-both">
//        <div className="teacher-course-icon"><LibraryBooksOutlinedIcon/></div>
//        <div className="teacher-courseManagement"><li className="teacher-Third"> <NavLink to={"/allcouses"} > Library Books</NavLink></li></div>
//        </div>

//        <div className="teacher-book-icon-both">
//          <div className="teacher-book-icon"><CollectionsBookmarkIcon/></div>
//        <div className="teacher-book"><li className="teacher-fouth"> <NavLink to={"/allbooks"} >My Books List</NavLink></li></div>
//        </div>
        
//        <div className="teacher-log-icon-both">
//          <div className="teacher-log-icon"><HistoryIcon/></div>
//        <div id="std-log"><li className="teacher-fouth"> <NavLink to={"/logs-departments"} >Students Log</NavLink></li></div>
//        </div>




//         <div className="teacher-profile-icon-both">
//         <div className="teacher-profile-icon"><PersonIcon/></div>
//        <div className="teacher-profile"><li className="teacher-fifth"> <NavLink to={"/teacher-profile"} >Profile</NavLink></li></div>
//        </div>

//        <div className="teacher-sty-1"></div>
//     </ul>
//     </div>
    
//     </div>





    
//   )
//  }

// export default TeacherSidebar

import React from 'react'


 import 'bootstrap/dist/css/bootstrap.css';
 import 'bootstrap/dist/js/bootstrap.bundle.js';
//  import '../AdminComponenet/Sidebarbootstrap.css'
 import { NavLink } from "react-router-dom";
const TeacherSidebar = () => {
  return (
    <div>
     <nav className="navbar navbar-dark custom-bg-cyan fixed-top">
  <div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <button type="button" class="btn text-white" >Logout</button>
    
     
    <div className="offcanvas offcanvas-start white-bg" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Details are all here</h5>
        <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
          <NavLink className='btn text-light' to={"/teachercourses"} id="active">Course</NavLink>
          </li>
          <li className="nav-item">
          <NavLink  className='btn text-light'
       to={"/libraryallbooks"} > Library Books</NavLink>
          </li>
         
         <li className='nav-item'><NavLink className='btn text-light' to={"/allbooks"} >My Course Items</NavLink></li>

         <li className='nav-item'><NavLink className='btn text-light' to={"/allbooks"} >Student logs</NavLink></li>

         <li className='nav-item'> <NavLink className='btn text-light'  to={"/std_profile"} >Profile</NavLink></li>
        </ul>
        
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default TeacherSidebar
