// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useLocation } from "react-router-dom";
// import baseurl from "../Constants";
// import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
// import Swal from "sweetalert2";
// import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
// import PersonAddTwoToneIcon from '@mui/icons-material/PersonAddTwoTone';
// import AddStudent from "./AddStudent";
// import { useNavigate } from "react-router-dom";
// import './Student.css';
// import Sidebar from "./Sidebar";

// const Students = () => {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true); 
//   const [showPopup, setShowPopup] = useState(false);
//   const location = useLocation();
//   const department = location.state ? location.state.id : null;
   
//   const navigate=useNavigate();
//   useEffect(() => {
//     if (department) {
//       axios.get(`${baseurl}/Student/getAllStudent?departmentid=${department}`)
//         .then((response) => {
//           console.log(response.data.data);
//           setStudents(response.data.data || []); // Ensure that if response.data.data is falsy, set an empty array
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching students:", error);
//           setLoading(false);
//         });
//     }
//   }, [department]);


//   //.....Update the student..
//   const handleUpdate = (studentId) => {
//     navigate("/studentupdate", { state: { id: studentId } });
//   };


//   const handleDelete = async (studentId) => {
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
//               id: studentId,
//               role: "Student"
//             }
//           });
//           console.log(response.status);
//           if (response.data.status === "Success") {
//             setStudents(prevStudents => prevStudents.filter(student => student.studentId !== studentId));
//             Swal.fire({
//               title: "Deleted!",
//               text: " Successfully Deleted.",
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
//     <div className="all-students">
//     <div id="side-bar-container"><Sidebar/></div>
//     <div className="upper-design">
//     {/* <div className="only-for-design"></div> */}
//     <div className="std-heading"><h1>Department Students</h1></div>
//     {/* </div> */}
//     {/* <div className="dep-std"></div> */}
    
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="check-1">
//           {Array.isArray(students) && students.length === 0 ? (
//             <p>No data found</p>
//           ) : (
//             <ol>
//               {students.map((student) => (
//                 <li key={student.studentId}>
//                   {student.studentName}
//                 <div className="edit-1"><EditTwoToneIcon style={{ fontSize: 40 }} onClick={()=>handleUpdate(student.studentId)}/></div> 

//                  <div className="delete-1"> <DeleteTwoToneIcon style={{ fontSize: 40 }}onClick={() => handleDelete(student.studentId)} /></div>
//                 </li>
//               ))}
//             </ol>
//           )}
//         </div>
//       )}

//      <div className="Add-icon"> <PersonAddTwoToneIcon onClick={() => setShowPopup(true)} style={{ fontSize: 40 }} />
//      <div className="">
// {showPopup && <AddStudent onClose={() => setShowPopup(false)} />}
// </div>
// </div>
//     </div>
//     </div>
//   );
// };

// export default Students;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import baseurl from "../Constants";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Swal from "sweetalert2";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import AddIcon from '@mui/icons-material/Add';
import SidebarAdmin from '../AdminComponenet/SidebarAdmin';
import './Student.css';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const department = location.state ? location.state.id : null;
  const navigate = useNavigate();

  useEffect(() => {
    if (department) {
      axios.get(`${baseurl}/Student/getAllStudent?departmentid=${department}`)
        .then((response) => {
          console.log(response)
          setStudents(response.data.data || []);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching students:", error);
          setLoading(false);
          // Add user-friendly error message
          Swal.fire({
            title: "Error!",
            text: "Failed to fetch students. Please try again later.",
            icon: "error"
          });
        });
    }
  }, [department]);

  const handleUpdate = (studentId) => {
    navigate("/studentupdate", { state: { id: studentId } });
  };

  const handleDelete = async (studentId) => {
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
              id: studentId,
              role: "Student"
            }
          });
          if (response.data.status === "Success") {
            setStudents(prevStudents => prevStudents.filter(student => student.studentId !== studentId));
            Swal.fire({
              title: "Deleted!",
              text: "Successfully Deleted.",
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
        <h3 id="teacher-heading">Students..</h3>
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            Array.isArray(students) && students.length === 0 ? (
              <p>No data found</p>
            ) : (
            <table className="table table-hover table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Student Name</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.studentId}>
                    <td>{student.studentName}</td>
                    <td>
                      <EditTwoToneIcon 
                        style={{ fontSize: 30 }} 
                        onClick={() => handleUpdate(student.studentId)} 
                      />
                      <DeleteTwoToneIcon 
                        style={{ fontSize: 30 }} 
                        onClick={() => handleDelete(student.studentId)} 
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

      <button className="btn custom-bg-cyan" onClick={() => navigate("/addstudents&dep")}>
        <AddIcon />
      </button>

    </div>
  );
};

export default Students;

    // <div className="container-fluid mt-4">
    //   <div className='col'><SidebarAdmin /></div>
    //   <div className="row mt-5">
    //     <div className="col table-container mt-5">
    //       {loading ? (
    //         <div className="loading">Loading...</div>
    //       ) : (
    //         {Array.isArray(students) && students.length === 0 ? (
    //           <p>No data found</p>
    //         <table className="table table-hover  table-bordered">
    //           <thead className="thead-dark">
    //             <tr>
    //               <th scope="col">Student Name</th>
    //               <th scope="col">Actions</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {students.map((student) => (
    //               <tr key={student.studentId}>
    //                 <td
                     
    //                 >
    //                   {student.studentName}
    //                 </td>
    //                 <td>
    //                 <EditTwoToneIcon style={{ fontSize: 30 }} onClick={() => handleUpdate(student.studentId)} />
    //                 <DeleteTwoToneIcon style={{ fontSize: 30 }} onClick={() => handleDelete(student.studentId)} />
    //                 </td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       )}
    //     </div>
    //   </div>

      {/* <div className="upper-design">
        <div id="std-heading"> <h3>Department Students</h3>
         <LogoutIcon className="logout-icon"/>
        </div> */}
       
        {/* {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="check-1">
            {Array.isArray(students) && students.length === 0 ? (
              <p>No data found</p>
            ) : (
              <ol>
                {students.map((student) => (
                  <li key={student.studentId}>
                    {student.studentName}
                    <div className="edit-1"> */}
                      {/* <EditTwoToneIcon style={{ fontSize: 30 }} onClick={() => handleUpdate(student.studentId)} />
                    </div> */}
                    {/* <div className="delete-1">
                      <DeleteTwoToneIcon style={{ fontSize: 30 }} onClick={() => handleDelete(student.studentId)} />
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>
        )} */}
        {/* <div className="Add-icon">
          <PersonAddTwoToneIcon onClick={() => navigate("/addstudents&dep")} style={{ fontSize: 40 }} />
        </div> */}
        {/* <div className="foradd-dep">
          <button onClick={() => navigate("/addstudents&dep")}>Add Department</button>
        </div> */}
      
    // </div>
  



