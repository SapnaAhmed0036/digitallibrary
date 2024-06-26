import React from "react";
import axios from "axios";
import baseurl from "../../Constants";
import Swal from 'sweetalert2';

const AddCourse = ({ onClose }) => {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('courseCode', e.target.coursecode.value);
    formData.append('creditHours', e.target.credithrs.value);
    formData.append('courseName', e.target.name.value);
    formData.append('courseContent', e.target.coursecontent.files[0]);
  
    try {
      const response = await axios.post(`${baseurl}/Course/addCourse`, formData);
      console.log(response);
      // You can display a success message or perform other actions here
      Swal.fire({
        icon: 'success',
        title: 'Course Added',
        text: 'The course has been successfully added.',
      });
      onClose(); // Close the popup after successful submission
    } catch (error) {
      console.error("Error adding course:", error);
      // Handle error
      // You can display an error message or perform other actions here
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to add course. Please try again later.',
      });
    }
  };

  return (
    <div className="popup">
    {/* <div id="side-bar-container"><Sidebar/></div> */}
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Add Course</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Course Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="coursecode">Course Code:</label>
          <input type="text" id="coursecode" name="coursecode" required />
          <label htmlFor="credithrs">Credit Hours:</label>
          <input type="text" id="credithrs" name="credithrs" required />
          <label htmlFor="coursecontent">Course Content (PDF only):</label>
          <input type="file" id="coursecontent" name="coursecontent" accept=".pdf" required />
          <button type="submit">Add Course</button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
