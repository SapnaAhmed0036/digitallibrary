// import React from 'react'
// import Sidebar from './Sidebar'
// import { useState } from 'react';
// import "./Admin.css"
// import MenuIcon from '@mui/icons-material/Menu';
// const Admin = () => {
//   const [sidebarActive, setSidebarActive] = useState(false);

//   const toggleSidebar = () => {
//       setSidebarActive(!sidebarActive);
//   };

//   return (
//     <div  id='hiii'>
    
//     <div id='sii' className={`Sidebar ${sidebarActive ? 'active' : ''}`}><Sidebar/></div>
//     <div id="content">
//     <div className='menu' onClick={toggleSidebar}><MenuIcon  style={{ fontSize: 45 }}/></div> 
//      <div id="for-moving"><h4>Welcome to the Admin Dashboard.</h4></div> 
//      </div>
//     </div>
//   )
// }

// export default Admin


// import React, { useState, useEffect } from 'react';
// import Sidebar from './Sidebar';
// import MenuIcon from '@mui/icons-material/Menu';
// import './Admin.css';

// const Admin = () => {
//   const [sidebarActive, setSidebarActive] = useState(false);
  

//   const toggleSidebar = () => {
//     setSidebarActive(!sidebarActive);
//   };

  


//   return (
//     <div id="hiii">
//       <div 
      
//         className={`Sidebar11 ${sidebarActive ? 'active' : ''} `}
//        >
//         <Sidebar />
//       </div>
//       <div id="content">
       
//         <button className="menu" onClick={toggleSidebar}><MenuIcon style={{ fontSize: 45 }} /></button>
          
        
//         <div id="for-moving">
//           <h4>Welcome to the Admin Dashboard.</h4>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;


import React, { useState } from 'react';
// import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.css';
import SidebarAdmin from './SidebarAdmin';
import './Admin.css';
import Department from './Department.js'
const Admin = () => {
 

  return (
    <div id="container-fluid">
      <div className="row">
    <div className='col'><SidebarAdmin/></div>
    <h5 id="teacher-heading">All departments are here..</h5>
    <div><Department/></div>
     
     </div>
     
      
    </div>
  );
};

export default Admin;

