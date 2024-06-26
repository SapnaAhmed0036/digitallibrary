// //......practise

//  import React, { useEffect, useState } from "react";
//  import axios from "axios";
//  import { useLocation } from "react-router-dom";
//  import baseurl from "../../Constants";
// import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
// import Swal from "sweetalert2";
// import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
// import PersonAddTwoToneIcon from '@mui/icons-material/PersonAddTwoTone';
// import AddTeacher from "./AddTeacher";

// const Teacher = () => {
//   const [teachers, setTeachers] = useState([]);
//   const [loading, setLoading] = useState(true); 
//   const location = useLocation();
//   const department = location.state ? location.state.id : null;

//   useEffect(() => {
//     if (department) {
//       axios.get(`${baseurl}/Teacher/getAllTeacher?departmentId=${department}`)
//         .then((response) => {
//           console.log(response.data.data);
//           setTeachers(response.data.data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching teachers:", error);
//           setLoading(false);
//           Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Failed to fetch teachers!',
//           });
//         });
//     }
//   }, [department]);

//   const handleDelete = (teacherId) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!"
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           await axios.delete(`${baseurl}/user/deleteUser`, {
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             data: {
//               id: teacherId,
//               role: "Teacher"
//             }
//           });
//           setTeachers(prevTeachers => prevTeachers.filter(teacher => teacher.teacherId !== teacherId));
//           Swal.fire({
//             icon: 'success',
//             title: 'Deleted!',
//             text: 'Teacher has been deleted successfully.',
//           });
//         } catch (error) {
//           console.error("Error deleting teacher:", error);
//           Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Failed to delete teacher!',
//           });
//         }
//       }
//     });
//   };
  

//   return (
//     <div className="all-teachers">
//       {loading ? (
//         <p>Loading...</p>
//       ) : !teachers || teachers.length === 0 ? (
//         <p>No teachers found</p>
//       ) : (
//         <ul>
//           {teachers.map((teacher) => (
//             <li key={teacher.teacherId}>
//               <span>{teacher.teacherName}</span>
//               <EditTwoToneIcon/>
//               <DeleteTwoToneIcon onClick={() => handleDelete(teacher.teacherId)} />

             
//             </li>
//           ))}
//         </ul>
//       )}
//       <PersonAddTwoToneIcon onClick={() => setShowPopup(true)} />
// {showPopup && <AddTeacher onClose={() => setShowPopup(false)} />}

//     </div>
//   );
// };

// export default Teacher;







//*********** */
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useLocation } from "react-router-dom";

// import baseurl from "../../Constants";
// import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
// import Swal from "sweetalert2";
// import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
// import PersonAddTwoToneIcon from '@mui/icons-material/PersonAddTwoTone';
// import AddTeacher from "./AddTeacher";
// import './Teacher.css';
// import { useNavigate } from "react-router-dom";
// import Sidebar from "../Sidebar";
// import LogoutIcon from '@mui/icons-material/Logout';
// const Teacher = () => {
//   const [teachers, setTeachers] = useState([]);
//   const [loading, setLoading] = useState(true); 
//   const [showPopup, setShowPopup] = useState(false);
//   const location = useLocation();
//   const department = location.state ? location.state.id : null;
   
//   const navigate=useNavigate();
//   useEffect(() => {
//     if (department) {
//       axios.get(`${baseurl}/Teacher/getAllTeacher?departmentId=${department}`)
//         .then((response) => {
//           console.log(response.data.data);
//           setTeachers(response.data.data || []);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching students:", error);
//           setLoading(false);
//         });
//     }
//   }, [department]);


//   //.....Update the student..
//   const handleUpdate = (teacherId) => {
//     navigate("/teacherupdate", { state: { id: teacherId } });
//   };


//   const handleDelete = async (teacherId) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!"
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           const response = await axios.delete(`${baseurl}/user/deleteUser`, {
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             data: {
//               id: teacherId,
//               role: "Teacher"
//             }
//           });
//           console.log(response.status);
//           if (response.data.status === "Success") {
//             setTeachers(prevTeachers => prevTeachers.filter(teacher => teacher.teacherId !== teacherId));
//             Swal.fire({
//               title: "Deleted!",
//               text: "Your file has been deleted.",
//               icon: "success"
//             });
//           }
//         } catch (error) {
//           console.error("Error deleting student:", error);
          
//         }
//       }
//     });
//   };

//   return (
//     <div className="all-teachers">
//     <div id="side-bar-container"><Sidebar/></div>

//     <div id="content">
//     <div className="teacher-heading"><h3>Department Teachers</h3>
//     <LogoutIcon className="logout-icon"/></div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="check">
//           {Array.isArray(teachers) && teachers.length === 0 ? (
//             <p>No data found</p>
//           ) : (
//             <ol>
//               {teachers.map((teacher) => (
//                 <li key={teacher.teacherId}>
//                  <div className="teacher-name"> {teacher.teacherName}</div>
//                 <div className="edit"> <EditTwoToneIcon  onClick={()=>handleUpdate(teacher.teacherId)}  style={{ fontSize: 40 }}/></div>

//                  <div className="delete"> <DeleteTwoToneIcon onClick={() => handleDelete(teacher.teacherId)}  style={{ fontSize: 40 }}/></div>
//                 </li>
//               ))}
//             </ol>
//           )}
//         </div>
//       )}

//     <div id="Add-icon">  <PersonAddTwoToneIcon style={{ fontSize: 40 }} onClick={() => setShowPopup(true)} />
// {showPopup && <AddTeacher onClose={() => setShowPopup(false)} />}
// </div>
// </div>
//     </div>
//   );
// };

// export default Teacher;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Swal from "sweetalert2";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import PersonAddTwoToneIcon from '@mui/icons-material/PersonAddTwoTone';
import LogoutIcon from '@mui/icons-material/Logout';
import './Teacher.css'
// import SidebarAdmin from '../AdminComponenet/SidebarAdmin'
import SidebarAdmin from '../SidebarAdmin.js'
import AddIcon from '@mui/icons-material/Add';
import baseurl from "../../Constants";
const Teacher = () => {
const [loading, setLoading] = useState(true);
  const [teachers, setTeachers] = useState([]);

//   const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const department = location.state ? location.state.id : null;
  const navigate = useNavigate();

  useEffect(() => {
        if (department) {
          axios.get(`${baseurl}/Teacher/getAllTeacher?departmentId=${department}`)
            .then((response) => {
              console.log(response.data.data);
              setTeachers(response.data.data || []);
              setLoading(false);
            })
            .catch((error) => {
              console.error("Error fetching students:", error);
              setLoading(false);
            });
        }
      }, [department]);
    
    
      //.....Update the student..
      const handleUpdate = (teacherId) => {
        navigate("/teacherupdate", { state: { id: teacherId } });
      };
    
    
      const handleDelete = async (teacherId) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              const response = await axios.delete(`${baseurl}/user/deleteUser`, {
                headers: {
                  'Content-Type': 'application/json'
                },
                data: {
                  id: teacherId,
                  role: "Teacher"
                }
              });
              console.log(response.status);
              if (response.data.status === "Success") {
                setTeachers(prevTeachers => prevTeachers.filter(teacher => teacher.teacherId !== teacherId));
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              }
            } catch (error) {
              console.error("Error deleting student:", error);
              
            }
          }
        });
      };
    

  return (
    <div className="container-fluid mt-4">
       <div className='col'><SidebarAdmin /></div>
      <div className="row mt-5">
        <div className="col table-container mt-5" id="teacher">
        <h3 id="teacher-heading">Teachers..</h3>
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            Array.isArray(teachers) && teachers.length === 0 ? (
              <p>No data found</p>
            ) : (
        
              <table className="table table-hover table-bordered">
              
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Teacher Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((teacher) => (
                    <tr key={teacher.teacherId}>
                      <td>{teacher.teacherName}</td>
                      <td>
                        <EditTwoToneIcon 
                          style={{ fontSize: 30 }} 
                          onClick={() => handleUpdate(teacher.teacherId)} 
                        />
                        <DeleteTwoToneIcon 
                          style={{ fontSize: 30 }} 
                          onClick={() => handleDelete(teacher.teacherId)} 
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )
          )}
        </div>
      </div>

      <button className="btn custom-bg-cyan" onClick={() => navigate("/addteacher&dep")}>
        <AddIcon />
      </button>

  


    </div>
  );
};

export default Teacher;