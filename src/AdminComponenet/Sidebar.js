import { NavLink } from "react-router-dom";
import React from 'react'
 import "./Sidebar.css"
import LocalLibraryTwoToneIcon from '@mui/icons-material/LocalLibraryTwoTone';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

  const navigate=useNavigate();
  const Student_Management=()=>{
   navigate( "/departments-students");

  }
  const Teacher_management = () => {
    navigate('/departments-teacher');
  };

 const Course_Management=()=>{
    navigate( "/allcouses");
 
   }

   const Book_management=()=>{
    navigate( "/allbooks")
   }

  const Profile=()=>{
    navigate("/profile")
  } 
  return (
    
      <div className="Sidebar">
      
      <div className="elements">
      <div className="center">
      <div className="library-icon"><LocalLibraryTwoToneIcon  style={{ fontSize: 60 }}/></div>
     <div className="text"> <h3>Admin Dashboard</h3></div>
      </div>
    <ul className="element">
    <div className="hoja" onClick={Student_Management}>
      <div className="user-icon"><SchoolOutlinedIcon style={{ fontSize: 30 }}/> </div>
      <div className="StdManagment">
      
       <li className="first">
       
        <NavLink to={"/departments-students"} id="active">Student Management</NavLink>
        
        </li></div>
</div>
      <div className="Teacher-icon-both" onClick={Teacher_management}>
     
      <div className="Teacher-icon"><Groups2OutlinedIcon style={{ fontSize: 30 }}/></div>
       <div className="TManagement">
       <li className="second"> 
       <NavLink to={"/departments-teacher"} className="NavLink"> Teacher Management</NavLink>
       </li>
       </div>
       </div>
       <div className="Course-icon-both" onClick={Course_Management}>
       <div className="course-icon"><LibraryBooksOutlinedIcon style={{ fontSize: 30 }}/></div>
       <div className="courseManagement"><li className="Third"> 
       <NavLink to={"/allcouses"} > Course Management</NavLink>
       </li></div>
       </div>

       <div className="book-icon-both" onClick={Book_management}>
         <div className="book-icon"><MenuBookTwoToneIcon style={{ fontSize: 30 }}/></div>
       <div className="book"><li className="fouth"> <NavLink to={"/allbooks"} > Book Management</NavLink></li></div>
       </div>
       
        <div className="profile-icon-both" onClick={Profile}>
        <div className="profile-icon">
        <PersonIcon style={{ fontSize: 30 }}/>
       </div>
       <div className="profile"><li className="fifth"> <NavLink to={"/profile"} >Profile</NavLink></li></div>
       </div>
      

       <div className="sty-1"></div>
    </ul>
    </div>
    
    </div>
    
  )
}

export default Sidebar
