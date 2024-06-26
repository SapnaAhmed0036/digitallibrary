// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import './Allcourses.css';
// import { useNavigate } from "react-router-dom";
// import baseurl from "../../Constants";
// import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
// import Swal from "sweetalert2";
// import AddBoxIcon from '@mui/icons-material/AddBox';
// import Addcourse from "./Addcourse";
// import StickyNote2Icon from '@mui/icons-material/StickyNote2';
// import '../Department.css';
// import SidebarAdmin from "../SidebarAdmin";

// const Allcourses = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showPopup, setShowPopup] = useState(false);
//   const [teachers, setTeachers] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchCourses();
//     fetchTeachers();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const response = await axios.get(`${baseurl}/Course/getAll`);
//       setCourses(response.data.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching courses:", error);
//       setLoading(false);
//     }
//   };

//   const fetchTeachers = async () => {
//     try {
//       const response = await axios.get(`${baseurl}/Teacher/getAll`);
//       setTeachers(response.data);
//     } catch (error) {
//       console.error("Error fetching teachers:", error);
//     }
//   };

//   const showTeachersDropdown = async () => {
//     const inputOptions = teachers.reduce((options, teacher) => {
//       options[teacher.id] = teacher.name;
//       return options;
//     }, {});

//     try {
//       const { value: selectedTeacherId } = await Swal.fire({
//         title: "Select a Teacher",
//         input: "select",
//         inputOptions,
//         inputPlaceholder: "Select a teacher",
//         showCancelButton: true,
//         inputValidator: (value) => {
//           if (!value) {
//             return "You need to select a teacher.";
//           }
//         }
//       });

//       if (selectedTeacherId) {
//         const selectedTeacher = teachers.find(t => t.id === selectedTeacherId);
//         Swal.fire(`You selected: ${selectedTeacher.name}`);
//       }
//     } catch (error) {
//       console.error("Error displaying SweetAlert2:", error);
//     }
//   };

//   const deleteCourse = async (courseCode) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!"
//     });

//     if (result.isConfirmed) {
//       try {
//         await axios.delete(`${baseurl}/Course/deleteCourse`, { params: { courseCode } });
//         setCourses(prevCourses => prevCourses.filter(course => course.courseCode !== courseCode));
//         Swal.fire("Deleted!", "Your course has been deleted.", "success");
//       } catch (error) {
//         console.error("Error deleting course:", error);
//         Swal.fire("Error", "Failed to delete the course.", "error");
//       }
//     }
//   };

//   return (
//     <div className="container-fluid mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-2">
//           <SidebarAdmin />
//         </div>
//         <div className="col-md-11 table-container mt-5">
//           {loading ? (
//             <div className="loading">Loading...</div>
//           ) : (
//             <div className="check-2">
//               {courses.length === 0 ? (
//                 <p>No data found</p>
//               ) : (
//                 <table className="table table-hover table-bordered custom-table mt-5">
//                   <thead className="thead-dark">
//                     <tr>
//                       <th scope="col">Course Name</th>
//                       <th scope="col">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {courses.map((course) => (
//                       <tr key={course.courseCode}>
//                         <td>{course.courseName}</td>
//                         <td>
//                           <DeleteTwoToneIcon onClick={() => deleteCourse(course.courseCode)} />
//                           <StickyNote2Icon onClick={()= />
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               )}
//             </div>
//           )}
//           <div className="Add-course text-center">
//             <AddBoxIcon style={{ fontSize: 40 }} onClick={() => setShowPopup(true)} />
//             {showPopup && <Addcourse onClose={() => setShowPopup(false)} />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Allcourses;

import React, { useEffect, useState } from "react";
import axios from "axios";
import './Allcourses.css';
import { useNavigate } from "react-router-dom";
import baseurl from "../../Constants";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Swal from "sweetalert2";
import AddBoxIcon from '@mui/icons-material/AddBox';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import SchoolIcon from '@mui/icons-material/School';
import '../Department.css';
import SidebarAdmin from "../SidebarAdmin";

const Allcourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate();

  // Fetch all courses and teachers on component mount
  useEffect(() => {
    fetchCourses();
    fetchTeachers();
  }, []);

  // Fetch all courses
  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${baseurl}/Course/getAll`);
      setCourses(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching courses:", error);
      setLoading(false);
    }
  };

  // Fetch all teachers
  const fetchTeachers = async () => {
    try {
      const response = await axios.get(`${baseurl}/Teacher/getAll`);
      setTeachers(response.data.data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  // Function to show dropdown and assign course
  const showTeachersDropdown = async (courseCode) => {

    if (!Array.isArray(teachers) || teachers.length === 0) {
      console.error("Teachers array is not defined or empty");
      Swal.fire("Error", "Teachers data is not available", "error");
      return;
    }
    const inputOptions = teachers.reduce((options, teacher) => {
      options[teacher.teacherId] = teacher.teacherName;
      return options;
    }, {});


    

    try {
      const { value: selectedTeacherId } = await Swal.fire({
        title: "Select a Teacher",
        input: "select",
        inputOptions,
        inputPlaceholder: "Select a teacher",
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return "You need to select a teacher.";
          }
        }
      });

      if (selectedTeacherId) {
        // Find the selected teacher using the latest state of teachers
        const selectedTeacher = teachers.find(t => t.teacherId === parseInt(selectedTeacherId)); // Convert selectedTeacherId to integer if needed
        if (selectedTeacher) {
          await assignCourse(courseCode, selectedTeacher.teacherId);
          Swal.fire(`Course assigned to: ${selectedTeacher.teacherName}`);
        } else {
          console.error("Selected teacher not found in teachers array");
        }
      }
    } catch (error) {
      console.error("Error displaying SweetAlert2:", error);
    }
  };

  // Function to assign a course to a teacher
  const assignCourse = async (courseCode, teacherId) => {
    try {
      const response = await axios.post(`${baseurl}/Course/courseAssign`, {
        courseCode,
        teacherId
      });
      console.log(response);
      if (response.data.success) {
        Swal.fire("Success", "Course assigned successfully", "success");
      } else {
        Swal.fire("Error", "Failed to assign course", "error");
      }
    } catch (error) {
      console.error("Error assigning course:", error);
      Swal.fire("Error", "Failed to assign course", "error");
    }
  };

  // Function to delete a course
  const deleteCourse = async (courseCode) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${baseurl}/Course/deleteCourse`, { params: { courseCode } });
        setCourses(prevCourses => prevCourses.filter(course => course.courseCode !== courseCode));
        Swal.fire("Deleted!", "Your course has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting course:", error);
        Swal.fire("Error", "Failed to delete the course.", "error");
      }
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-2">
          <SidebarAdmin />
        </div>
        <div className="col-md-11 table-container mt-5">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <div className="check-2">
              {courses.length === 0 ? (
                <p>No data found</p>
              ) : (
                <table className="table table-hover table-bordered custom-table mt-5">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Course Name</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map((course) => (
                      <tr key={course.courseCode}>
                        <td>{course.courseName}</td>
                        <td>
                          <DeleteTwoToneIcon onClick={() => deleteCourse(course.courseCode)} />
                          <StickyNote2Icon onClick={() => showTeachersDropdown(course.courseCode)} />

                          <SchoolIcon onClick={()=>{
                            navigate('/enrollstd')
                          }}/>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
          <div className="Add-course text-center">
            <AddBoxIcon style={{ fontSize: 40 }} onClick={() => console.log("Add course popup logic here")} />
            {/* Remove or redefine the popup logic as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allcourses;
