import React from 'react'
import StdSidebar from '../StdSidebar'
import "./Std_Books.css";
const Std_Books = () => {
  return (
    <div  id='std-dashboard'>
    <div id='std-sidebar-show'><StdSidebar/></div>
    <div id="std-content">
    <div id="head-section"><h2>All Books</h2></div>
    <div id='all-books'>
        {/* <div id='book'><img src="programmingfundamentals.jpeg" alt="nothern logo" id="logo1" /></div>
        <h2>Programming Fundamental</h2> */}
    </div>
    {/* <div id='courses'>
    <div id='subject' ><img src="programmingfundamentals.jpeg" alt="nothern logo" id="logo1" /></div>
      <h2>Programming Fundamental</h2>
     </div> */}
    
      {/* <div>
      <div id='subject2'>
      <div><img src="compilerconstruction.jpeg" alt="nothern logo" id="logo2" /></div>
      <div id='compiler'><h2>Compiler Construction</h2></div></div> */}
      {/* </div>
      <div>
      <div id='subject3'>
      <div><img src="artificialintelligence.jpeg" alt="nothern logo" className="logo3" /></div>
      <div><h2>Artificial Intelligence</h2></div></div>
      </div> */}

  
    </div>
   </div>
 
    
    
    
  )
}

export default Std_Books
