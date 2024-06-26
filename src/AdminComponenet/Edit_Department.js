
// import React, { useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import baseurl from '../Constants';



// const Edit_Department = ({ departmentId, departmentName, onClose, onUpdate }) => {
// const [newDepartmentName, setNewDepartmentName] = useState(departmentName);

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`${baseurl}/department/updateDepartment`, {
//         departmentId: departmentId,
//         department:newDepartmentName,
//       });
//       console.log(response.data.status)
//       if (response.data.status === "Success") {
//         Swal.fire("Updated!", "The department name has been updated.", "success");
//         onUpdate();  // Update the department list in the parent component
//       } else {
//         Swal.fire("Error", "An error occurred while updating the department name.", "error");
//       }
//     } catch (error) {
//       console.error("Error updating department:", error);
//       Swal.fire("Error", "An error occurred while updating the department name.", "error");
//     }
//   };

//   return (
//     <div className="popup">
//       <div className="popup-inner">
//         <button className="close-btn" onClick={onClose}>X</button>
//         <h2>Edit Department</h2>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="departmentName">Department Name:</label>
//           <input
//             type="text"
//             id="departmentName"
//             name="departmentName"
//             value={newDepartmentName}
//             onChange={(e) => setNewDepartmentName(e.target.value)}
//             required
//           />
//           <button type="submit">Update</button>
//         </form>
//       </div>
//     </div>
//   );
// };



// export default Edit_Department

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import baseurl from '../Constants';

// const Edit_Department = ({ departmentId, departmentName, onClose, onUpdate }) => {
//   const [newDepartmentName, setNewDepartmentName] = useState(departmentName);

//   useEffect(() => {
//     if (!departmentId) {
//       Swal.fire("Error", "Department ID is required.", "error");
//       onClose();
//     }
//   }, [departmentId, onClose]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!departmentId) {
//       Swal.fire("Error", "Department ID is required.", "error");
//       return;
//     }

//     let headersList = {
//       "Accept": "*/*",
//       "User-Agent": "Thunder Client (https://www.thunderclient.com)",
//       "Content-Type": "application/json"
//     }

//     let bodyContent = JSON.stringify({
//       "id": departmentId,
//       "department": newDepartmentName
//     });

//     let reqOptions = {
//       url: `${baseurl}/department/updateDepartment`,
//       method: "PUT",
//       headers: headersList,
//       data: bodyContent,
//     };

//     try {
//       const response = await axios.request(reqOptions);
//       console.log("Response:", response);

//       if (response.data && response.data.status === "Success") {
//         Swal.fire("Updated!", "The department name has been updated.", "success");
//         onUpdate(); 
//         onClose();   
//       } else {
//         const errorMessage = response.data && response.data.message ? response.data.message : "An error occurred while updating the department name.";
//         Swal.fire("Error", errorMessage, "error");
//       }
//     } catch (error) {
//       console.error("Error updating department:", error);
//       if (error.response) {
        
//         Swal.fire("Error", `Server Error: ${error.response.data.message}`, "error");
//       } else if (error.request) {
        
//         Swal.fire("Error", "No response received from the server.", "error");
//       } else {
        
//         Swal.fire("Error", `Error: ${error.message}`, "error");
//       }
//     }
//   };

//   return (
//     <div className="popup">
//       <div className="popup-inner">
//         <button className="close-btn" onClick={onClose}>X</button>
//         <h2>Edit Department</h2>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="departmentName">Department Name:</label>
//           <input
//             type="text"
//             id="departmentName"
//             name="departmentName"
//             value={newDepartmentName}
//             onChange={(e) => setNewDepartmentName(e.target.value)}
//             required
//           />
//           <button type="submit">Update</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Edit_Department;
