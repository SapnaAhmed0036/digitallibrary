// import React from "react";
// import axios from "axios";
// import baseurl from "../Constants";
// import { useEffect } from "react";
// import { useState } from "react";
// import Swal from 'sweetalert2';
// import './AddStudent.css'
// const AddStudent = ({ onClose }) => {

// const [departments, setDepartments] = useState([]);

// useEffect(() => {
//   axios.get(`${baseurl}/department/allDepartment`)
//     .then(response => {
//       setDepartments(response.data.data);
//       console.log(response.data.data);
       
//     })
//     .catch(error => console.log(error));
// }, []);

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const formData = {
    
//     regNo:e.target.regNo.value,
//     name: e.target.name.value,
//     password: e.target.password.value,
//     phoneNo: e.target.phoneNumber.value,
//     department: e.target.department.value,
//     role: "Student"
//   };

//   try {
//     const response = await axios.post(`${baseurl}/user/RegisterUser`, formData);
//    console.log(response);
//    if (response.data.status === "Success") {
//     Swal.fire("The user is successfully added");
//   }
// } catch (error) {
//   console.error("Error adding user:", error);
//   Swal.fire("Error adding user", error.message, "error");
   
//   }
// };


// const handleDeaprtmnt = async () => {
//   const { value: text } = await Swal.fire({
//     input: "text",
//     inputLabel: "Add Department",
//     inputPlaceholder: "Enter Department...",
//     inputAttributes: {
//       "aria-label": "Enter Department"
//     },
//     confirmButtonText: "Add",
//     showCancelButton: true,
    
    
//   });
  
//   if (text) {
//     const newDepartment = {
//       departmentId: departments.length + 1,
//       departmentName: text
//     };

//     setDepartments(prevDepartments => [...prevDepartments, newDepartment]); 
//   }
// };


//  return (
//     <div className="popup">
//       <div className="popup-inner">
//         <button className="close-btn" onClick={onClose}>X</button>
//        <div className="Add-user"> <h2>Add User</h2></div>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" required />
         
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" name="password" required />
//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input type="text" id="phoneNumber" name="phoneNumber" required />
//           <label htmlFor="regNo">Registration Number:</label>
//           <input type="text" id="regNo" name="regNo" required />
//           <label htmlFor="department">Department:</label>
//           <select id="department" name="department" required>
//   <option value="">Select Department</option>
//   {departments.map(department => (
//           <option key={department.departmentId} value={department.departmentName}>
//             {department.departmentName}
//           </option>
//         ))}
// </select>
//         <button onClick={handleDeaprtmnt}>AddDepartmnt</button>
//         <button type="submit">Add User</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddStudent;



import React, { useEffect, useState } from "react";
import axios from "axios";
import baseurl from "../Constants";
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.css';
import SidebarAdmin from "./SidebarAdmin";

const AddStudent = ({ onClose }) => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get(`${baseurl}/department/allDepartment`)
      .then(response => {
        setDepartments(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username: e.target.regNo.value,
      name: e.target.name.value,
      password: e.target.password.value,
      phoneNo: e.target.phoneNumber.value,
      department: e.target.department.value,
      role: "Student"
    };

    try {
      const response = await axios.post(`${baseurl}/user/RegisterUser`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("Response:", response);
      if (response.data.status === "Success") {
        Swal.fire("The user is successfully added");
      }
      else{
        Swal.fire(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
        Swal.fire("Error adding user", error.response.data.message || "Server error", "error");
      } else if (error.request) {
        console.error("No response received:", error.request);
        Swal.fire("Error adding user", "No response from server", "error");
      } else {
        console.error("Error:", error.message);
        Swal.fire("Error adding user", error.message, "error");
      }
    }
  };

  const handleDepartment = async () => {
    const { value: text } = await Swal.fire({
      input: "text",
      inputLabel: "Add Department",
      inputPlaceholder: "Enter Department...",
      inputAttributes: {
        "aria-label": "Enter Department"
      },
      confirmButtonText: "Add",
      showCancelButton: true,
    });

    if (text) {
      const newDepartment = {
        departmentId: departments.length + 1,
        departmentName: text
      };

      setDepartments(prevDepartments => [...prevDepartments, newDepartment]);
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className='col'><SidebarAdmin /></div>
        <div className="col-8 mt-5">
          {/* <button className="btn btn-danger mt-5" onClick={onClose}>X</button><br/> */}
          <div id='user-login-form' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit} className="w-75">
              <div className="mb-3">
                <input type="text" id="name" name="name" required
                  className="form-control" placeholder="Name"/>
              </div>
              <div className="mb-3">
                <input type="password" id="password" name="password" required
                  className="form-control" placeholder="Password" autoComplete="new-password"/>
              </div>
              <div className="mb-3">
                <input type="text" id="phoneNumber" name="phoneNumber" required
                  className="form-control" placeholder="Phone Number"/>
              </div>
              <div className="mb-3">
                <input type="text" id="regNo" name="regNo" required
                  className="form-control" placeholder="Registration No"/>
              </div>
              <div className="mb-3">
                <select id="department" name="department" className="form-control" required>
                  <option value="">Select Department</option>
                  {departments.map(department => (
                    <option key={department.departmentId} value={department.departmentName}>
                      {department.departmentName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <button type="button" className="btn btn-secondary custom-bg-cyan" style={{width:'100%'}} onClick={handleDepartment}>Add Department</button>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary custom-bg-cyan" style={{width:'100%'}}>Add User</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
