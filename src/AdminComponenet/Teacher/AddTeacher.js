import React from "react";
import axios from "axios";
// import baseurl from "../Constants";
// import "./AddStudent.css"
import baseurl from "../../Constants";
import { useEffect } from "react";
import { useState } from "react";
import Swal from 'sweetalert2';
const AddTeacher = ({ onClose }) => {

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
    
    name: e.target.name.value,
    username: e.target.username.value,
    password: e.target.password.value,
    phoneNo: e.target.phoneNumber.value,
    department: e.target.department.value,
    role: "Teacher"
  };

  try {
    const response = await axios.post(`${baseurl}/user/RegisterUser`, formData);

    console.log(response);
} catch (error) {
    console.error("Error adding user:", error);
    // Handle error
    // You can display an error message or perform other actions here
  }
};


const handleDepartmnt = async () => {
  const { value: text } = await Swal.fire({
    input: "text",
    inputLabel: "Add Department",
    inputPlaceholder: "Enter Department...",
    inputAttributes: {
      "aria-label": "Enter Department"
    },
    confirmButtonText: "Add",
    showCancelButton: true,
    confirmButtonColor: "Green",
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
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Add User</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" name="phoneNumber" required />
          {/* <label htmlFor="regNo">Username here:</label>
          <input type="text" id="regNo" name="regNo" required /> */}
          <label htmlFor="department">Department:</label>
          <select id="department" name="department" required>
  <option value="">Select Department</option>
  {departments.map(department => (
          <option key={department.departmentId} value={department.departmentName}>
            {department.departmentName}
          </option>
        ))}
</select>
        <button onClick={handleDepartmnt}>AddDepartmnt</button>
          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddTeacher;

