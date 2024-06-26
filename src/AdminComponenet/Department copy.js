// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import './Department.css'
// import { useNavigate } from "react-router-dom";
// import baseurl from "../Constants";
// import Logout from "./Teacher/Logout";
// import AddStudent from "./AddStudent";
// import Sidebar from "./Sidebar";
// import Swal from 'sweetalert2';

// import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
// import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
// import PersonAddTwoToneIcon from '@mui/icons-material/PersonAddTwoTone';

// const Department = ({role}) => {
//   const [state, setState] = useState([]);

//   const nav = useNavigate();
//   useEffect(() => {
//     axios.get(`${baseurl}/department/allDepartment`)
//       .then((response) => {
//         console.log(response.data)
//         setState(response.data.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching departments:", error);
//       });
//   }, []);

//   const handleDeleteDepartment = async (departmentId) => {
//     try {
//       const response = await axios.delete(`${baseurl}/department/deleteDepartment?id=${departmentId}`);
//       console.log(response)
//       if (response.data.status === "Success") {
//         Swal.fire("Deleted!", "The department has been deleted.", "success");
//          setState(prevDepartments => prevDepartments.filter(department => department.departmentId !== departmentId));

//       } else if (response.data.message === "Users exist in this department") {
//         Swal.fire("Cannot Delete", "Users exist in this department. Delete users first.", "error");
//       } else {
//         Swal.fire("Error", "An error occurred while deleting the department.", "error");
//       }
//     } catch (error) {
//       console.error("Error deleting department:", error);
//       Swal.fire("Error", "An error occurred while deleting the department.", "error");
//     }
//   };

//   return (
//     <div className="Department">
//     <div id="side-bar-container"><Sidebar/></div>
//     <div id="content">

//      <div className="all-department"><div className="def"><h2>All Departments</h2></div>

//       <div className="foradd-dep">
//        <button onClick={()=>{
//       nav("/addstudents&dep");
//      }} > Add Department</button>

//     </div>
//     <div id="for-logout"><Logout/></div>
//     </div>
//      <div id="check-1">
//     <ol>
//         {state.map((department) => (
//           <li key={department.departmentId}>
//             <button
//               onClick={() => {
//                 if(role==="Student"){
//                 nav("/students",{ state: { id: department.departmentId } })

//                 }
//                 else{
//                    nav("/teachers", { state: { id: department.departmentId } });

//                 }
//               }}
//             >
//             <div id="Department_name">{department.departmentName}</div>
//             </button>
//               <div id="edit-1">
//                       <EditTwoToneIcon style={{ fontSize: 40 }}  />
//                     </div>
//                     <div id="delete-1">
//                       <DeleteTwoToneIcon style={{ fontSize: 40 }}  onClick={()=>{
//              handleDeleteDepartment (department.departmentId)}
//                       } />
//                     </div>

//           </li>
//         ))}
//       </ol>
//       </div>
//       </div>
//       </div>

//   );
// };

// export default Department;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import baseurl from "../Constants";
// import Swal from 'sweetalert2';
// import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
// import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
// import Edit_Department from "./Edit_Department";
// import 'bootstrap/dist/css/bootstrap.css';
// import AddIcon from '@mui/icons-material/Add';
// const Department = ({ role }) => {
//   const [state, setState] = useState([]);
//   const [editingDepartment, setEditingDepartment] = useState(null);
//   const [showAssignCourseForm, setShowAssignCourseForm] = useState(false);

//   const nav = useNavigate();

//   useEffect(() => {
//     const fetchDepartments = async () => {
//       try {
//         const response = await axios.get(`${baseurl}/department/allDepartment`);
//         console.log(response.data);
//         setState(response.data.data);

//       } catch (error) {
//         console.error("Error fetching departments:", error);
//       }
//     };

//     fetchDepartments();
//   }, []);

//   const handleDeleteDepartment = async (departmentId) => {
//     try {
//       const response = await axios.delete(`${baseurl}/department/deleteDepartment`, {
//         params: { id: departmentId }
//       });
//       console.log(response);

//       if (response.data.status === "Success") {
//         Swal.fire("Deleted!", "The department has been deleted.", "success");
//         setDepartmentstate (prevDepartments => prevDepartments.filter(department => department.departmentId !== departmentId));
//       } else if (response.data.message === "Users exist in this department") {
//         Swal.fire("Cannot Delete", "Users exist in this department. Delete users first.", "error");
//       } else {
//         Swal.fire("Error", "An error occurred while deleting the department.", "error");
//       }
//     } catch (error) {
//       console.error("Error deleting department:", error);
//       Swal.fire("Error", "An error occurred while deleting the department.", "error");
//     }
//   };

//   const handleEditDepartment = (department) => {
//     setEditingDepartment(department);
//   };

//   const handleCloseEdit = () => {
//     setEditingDepartment(null);
//   };

//   const handleUpdate = async () => {
//     try {
//       const response = await axios.get(`${baseurl}/department/allDepartment`);
//       setState(response.data.data);
//     } catch (error) {
//       console.error("Error fetching departments:", error);
//     }
//     handleCloseEdit();
//   };

//   return (
//     <div className='container-fluid'>

//       <div className="col">
//         <div className="all-department">
//           <div className="row"><h2>All Departments</h2></div>
//           <div className="foradd-dep">
//             <button onClick={() => nav("/addstudents&dep")}>Add Department</button></div>
//             <AddIcon id="Add"/>

//         </div>
//         <div id="check-1">
//           <ol>
//             {state.map((department) => (
//               <li key={department.departmentId}>

//                 <div
//                   onClick={() => {
//                     if (role === "Student") {
//                       nav("/students", { state: { id: department.departmentId } });
//                     } else {
//                       nav("/teachers", { state: { id: department.departmentId } });
//                     }
//                   }}
//                 >
//                   <div id="Department_name">{department.departmentName}</div>
//                 </div>
//                 <div id="edit-1">
//                   <EditTwoToneIcon style={{ fontSize: 40 }}  onClick={() => handleEditDepartment(department)} className="edit-department"/>
//                 </div>
//                 <div id="delete-1">
//                   <DeleteTwoToneIcon
//                   className="DeleteTwoToneIcon Del"

//                     onClick={() => handleDeleteDepartment(department.departmentId)}
//                   />
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       </div>

// {editingDepartment && (
//   <Edit_Department
//     departmentId={editingDepartment.departmentId}
//     departmentName={editingDepartment.departmentName}
//     onClose={handleCloseEdit}
//     onUpdate={handleUpdate}
//   />
// )}

// </div>
// );
// };

// export default Department;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2';
// import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
// import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
// import Edit_Department from "./Edit_Department";
// import AddIcon from '@mui/icons-material/Add';
// import 'bootstrap/dist/css/bootstrap.css';
// import './Department.css';
// import SidebarAdmin from "./SidebarAdmin";
// import baseurl from "../Constants";
// const Department = ({ role }) => {
//   const [state, setState] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editingDepartment, setEditingDepartment] = useState(null);
//   const nav = useNavigate();

//   useEffect(() => {
//     const fetchDepartments = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(`${baseurl}/department/allDepartment`);
//         console.log(response)
//         setState(response.data.data);
//       } catch (error) {
//         console.error("Error fetching departments:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDepartments();
//   }, []);

//   const handleDeleteDepartment = async (departmentId) => {
//     try {
//       const response = await axios.delete(`${baseurl}/department/deleteDepartment/${departmentId}`);
//       console.log(response)
//       if (response.data.status === "Success") {
//         Swal.fire("Deleted!", "The department has been deleted.", "success");
//         setState(prevDepartments => prevDepartments.filter(department => department.departmentId !== departmentId));
//       } else if (response.data.message === "Users exist in this department") {
//         Swal.fire("Cannot Delete", "Users exist in this department. Delete users first.", "error");
//       } else {
//         Swal.fire("Error", "An error occurred while deleting the department.", "error");
//       }
//     } catch (error) {
//       if (error.response) {
//         console.error("Error deleting department:", error.response.data);
//         Swal.fire("Error", error.response.data.message || "An error occurred while deleting the department.", "error");
//       } else {
//         console.error("Error deleting department:", error.message);
//         Swal.fire("Error", "An error occurred while deleting the department.", "error");
//       }
//     }
//   };

// const handleEditDepartment = (department) => {
//   setEditingDepartment(department);
// };

// const handleCloseEdit = () => {
//   setEditingDepartment(null);
// };

// const handleUpdate = async () => {
//   setLoading(true);
//   try {
//     const response = await axios.get(`${baseurl}/department/allDepartment`);
//     setState(response.data.data);
//   } catch (error) {
//     console.error("Error fetching departments:", error);
//   } finally {
//     setLoading(false);
//   }
//   handleCloseEdit();
// };

// return (
//   <div className="container-fluid mt-4">

//     <div className='col'><SidebarAdmin/></div>

//     <div className="row mt-5">
//       <div className="col table-container mt-5">
//         {loading ? (
//           <div className="loading">Loading...</div>
//         ) : (
//           <table className="table table-hover  table-bordered">
//             <thead className="thead-dark">
//               <tr>
//                 <th scope="col">Department Name</th>
//                 <th scope="col">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {state.map((department) => (
//                 <tr key={department.departmentId}>
//                   <td
//                     onClick={() => {
//                       if (role === "Student") {
//                         nav("/students", { state: { id: department.departmentId } });
//                       } else {
//                         nav("/teachers", { state: { id: department.departmentId } });
//                       }
//                     }}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     {department.departmentName}
//                   </td>
//                   <td>
//   <EditTwoToneIcon
// className="text-warning me-4"
//   style={{ fontSize: 30, cursor: 'pointer' }}
//     onClick={() => handleEditDepartment(department)}
//   />
//     <DeleteTwoToneIcon
//       className="text-danger"
//                       style={{ fontSize: 30, cursor: 'pointer' }}
//                       onClick={() => handleDeleteDepartment(department.departmentId)}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
{
  /* {editingDepartment && (
            <Edit_Department
              departmentId={editingDepartment.departmentId}
              departmentName={editingDepartment.departmentName}
              onClose={handleCloseEdit}
              onUpdate={handleUpdate}
            />
          )} */
}
//         </div>

//       </div>

//       <button className="btn custom-bg-cyan" onClick={() => nav("/addstudents&dep")}>
//             <AddIcon />
//           </button>
//     </div>
//   );
// };

// export default Department;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import "bootstrap/dist/css/bootstrap.css";
import "./Department.css";
import SidebarAdmin from "./SidebarAdmin";
import baseurl from "../Constants";
import AddIcon from "@mui/icons-material/Add";
const Department = ({ role }) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingDepartment, setEditingDepartment] = useState(null);
  const [departmentName, setDepartmentName] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    const fetchDepartments = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseurl}/department/allDepartment`);
        setState(response.data.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  const handleDeleteDepartment = async (departmentId) => {
    try {
      const response = await axios.delete(
        `${baseurl}/department/deleteDepartment/${departmentId}`
      );
      if (response.data.status === "Success") {
        Swal.fire("Deleted!", "The department has been deleted.", "success");
        setState((prevDepartments) =>
          prevDepartments.filter(
            (department) => department.departmentId !== departmentId
          )
        );
      } else if (response.data.message === "Users exist in this department") {
        Swal.fire(
          "Cannot Delete",
          "Users exist in this department. Delete users first.",
          "error"
        );
      } else {
        Swal.fire(
          "Error",
          "An error occurred while deleting the department.",
          "error"
        );
      }
    } catch (error) {
      console.error("Error deleting department:", error.message);
      Swal.fire(
        "Error",
        "An error occurred while deleting the department.",
        "error"
      );
    }
  };

  const handleEditDepartment = (department) => {
    setEditingDepartment(department);
    setDepartmentName(department.departmentName);
  };

  const handleUpdateDepartment = async () => {
    try {
      const response = await axios.put(
        `${baseurl}/department/updateDepartment`,
        {
          id: editingDepartment.departmentId,
          department: departmentName,
        }
      );
      console.log(
        "Updating department with:",
        editingDepartment,
        departmentName
      );

      if (response.data.status === "Success") {
        Swal.fire("Updated!", "The department has been updated.", "success");
        setState((prevDepartments) =>
          prevDepartments.map((dept) =>
            dept.departmentId === editingDepartment.departmentId
              ? { ...dept, departmentName }
              : dept
          )
        );
        setEditingDepartment(null);
      } else {
        Swal.fire(
          "Error",
          response.data.message ||
            "An error occurred while updating the department.",
          "error"
        );
      }
    } catch (error) {
      console.error("Error updating department:", error.message);
      Swal.fire(
        "Error",
        "An error occurred while updating the department.",
        "error"
      );
    }
  };

  return (
    <div className="container-fluid mt-2">
      <div className="col">
        <SidebarAdmin />
      </div>
      <div className="row mt-3">
      <h5 id="teacher-heading">All departments are here..</h5>
        <div className="col table-container mt-3">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <table className="table table-hover  table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Department Name</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {state.map((department) => (
                  <tr key={department.departmentId}>
                    <td
                      onClick={() => {
                        if (role === "Student") {
                          nav("/students", {
                            state: { id: department.departmentId },
                          });
                        } else {
                          nav("/teachers", {
                            state: { id: department.departmentId },
                          });
                        }
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {department.departmentName}
                    </td>
                    <td>
                      <EditTwoToneIcon
                        className="text-warning me-4"
                        style={{ fontSize: 30, cursor: "pointer" }}
                        onClick={() => handleEditDepartment(department)}
                      />
                      <DeleteTwoToneIcon
                        className="text-danger"
                        style={{ fontSize: 30, cursor: "pointer" }}
                        onClick={() =>
                          handleDeleteDepartment(department.departmentId)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {editingDepartment && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Department</h5>
                {/* <button type="button" className="close ml-auto" aria-label="Close" onClick={() => setEditingDepartment(null)}>
                  <span aria-hidden="true">&times;</span>
                </button> */}
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label" >
                      Department Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={departmentName}
                      onChange={(e) => setDepartmentName(e.target.value)}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary custom-bg-cyan mt-2"
                  onClick={() => setEditingDepartment(null)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary custom-bg-cyan mt-2"
                  onClick={handleUpdateDepartment}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        className="btn custom-bg-cyan"
        onClick={() => nav("/addstudents&dep")}
      >
        <AddIcon />
      </button>
    </div>
  );
};

export default Department;
