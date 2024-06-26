// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// // import baseurl from ".../Constants";
// import baseurl from '../../Constants';
// const TeacherUpdate = () => {
//   const id = useLocation().state.id;
//   const [data, setData] = useState({
//     id:"",
//     password: "",
//     role: "",
//     department: "",
//     name: "",
//     phoneNo: ""
//   });

//   useEffect(() => {
//     axios.get(`${baseurl}/Teacher/getSingleTeacher?teacherId=${id}`)
//       .then(response => {
//         const teacherData = response.data.data[0];
//         setData({

          
//           department:teacherData.departmentName,
//           role :"Teacher",
//           id: teacherData.teacherId,
//           name: teacherData.teacherName,
//           username: teacherData.username,
//           password: teacherData.password,
//           phoneNo: teacherData.teacherPhone
//         });
//       })
//       .catch(error => console.log(error));
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(data);
//     axios.put(`${baseurl}/user/UpdateUser`, data) // Adjust the URL according to your API endpoint
//       .then(response => {
//         console.log(response);
//         // Optionally, you can redirect or show a success message here
//       })
//       .catch(error => {
//         console.error('Error updating student:', error);
//         // Handle error, show error message, etc.
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" name="name" value={data.name} onChange={handleChange} />
//         <label htmlFor="username">Username:</label>
//         <input type="text" id="username" name="username" value={data.username} onChange={handleChange} />
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" name="password" value={data.password} onChange={handleChange} />
//         <label htmlFor="phoneNumber">Phone Number:</label>
//         <input type="text" id="phoneNumber" name="phoneNumber" value={data.phoneNumber} onChange={handleChange} />
//         <button type="submit">Teacher Update</button>
//       </form>
//     </div>
//   );
// };

// export default TeacherUpdate;

// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import baseurl from '../../Constants';

// const TeacherUpdate = () => {
//   const id = useLocation().state.id;
//   const [data, setData] = useState({
//     id: "",
//     password: "",
//     role: "",
//     department: "",
//     name: "",
//     phoneNo: ""
//   });

//   useEffect(() => {
//     axios.get(`${baseurl}/Teacher/getSingleTeacher?teacherId=${id}`)
//       .then(response => {
//         const teacherData = response.data.data[0];
//         setData({
//           department: teacherData.departmentName,
//           role: "Teacher",
//           id: teacherData.teacherId,
//           name: teacherData.teacherName,
//           username: teacherData.username,
//           password: teacherData.password,
//           phoneNo: teacherData.teacherPhone
//         });
//       })
//       .catch(error => console.log(error));
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.put(`${baseurl}/user/UpdateUser`, data)
//       .then(response => {
//         console.log(response);
//         // Optionally, you can redirect or show a success message here
//       })
//       .catch(error => {
//         console.error('Error updating teacher:', error);
//         // Handle error, show error message, etc.
//       });
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Update Teacher Information</h2>
//       <form onSubmit={handleSubmit} className="needs-validation" noValidate>
//         <div className="form-group mb-3">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="form-control"
//             value={data.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group mb-3">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             className="form-control"
//             value={data.username}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group mb-3">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             className="form-control"
//             value={data.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group mb-3">
//           <label htmlFor="phoneNo">Phone Number:</label>
//           <input
//             type="text"
//             id="phoneNo"
//             name="phoneNo"
//             className="form-control"
//             value={data.phoneNo}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Update Teacher</button>
//       </form>
//     </div>
//   );
// };

// export default TeacherUpdate;


import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
 import 'bootstrap/dist/js/bootstrap.bundle.js';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import baseurl from '../../Constants';
import './TeacherUpdate.css';
import { Height } from '@mui/icons-material';

const TeacherUpdate = () => {
  const id = useLocation().state.id;
  const navigate = useNavigate();
  const [data, setData] = useState({
    id: "",
    password: "",
    role: "",
    department: "",
    name: "",
    phoneNo: ""
  });

  useEffect(() => {
    axios.get(`${baseurl}/Teacher/getSingleTeacher?teacherId=${id}`)
      .then(response => {
        const teacherData = response.data.data[0];
        setData({
          department: teacherData.departmentName,
          role: "Teacher",
          id: teacherData.teacherId,
          name: teacherData.teacherName,
          username: teacherData.username,
          password: teacherData.password,
          phoneNo: teacherData.teacherPhone
        });
      })
      .catch(error => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${baseurl}/user/UpdateUser`, data)
      .then(response => {
        console.log(response);

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        // .then(() => {
        //   navigate('/teachers');
        // });
      })
      .catch(error => {
        console.error('Error updating teacher:', error);

        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error updating teacher',
          text: 'Please try again later',
          showConfirmButton: true
        });
      });
  };

  // const handleClose = () => {
  //   navigate('/teachers');
  // };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-lg" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">Update Teacher</h2>
          {/* <button 
            type="button" 
            className="btn-close" 
            aria-label="Close" 
            onClick={handleClose}
          ></button> */}
        </div>
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <div className="form-group mb-3">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={data.name}
              onChange={handleChange}
              required
            />
          </div>
          {/* <div className="form-group mb-3">
            <label htmlFor="username" style={{marginTop:'-2px'}}>Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control" style={{height:"40px" , width:'100%' , marginLeft:'-2px'}}
              value={data.username}
              onChange={handleChange}
              required
            />
          </div> */}
          <div className="form-group mb-3">
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              id="password"
              name="password"
              className="form-control"
              value={data.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="phoneNo">Phone Number:</label>
            <input
              type="text"
              id="phoneNo"
              name="phoneNo"
              className="form-control"
              value={data.phoneNo}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn custom-bg-cyan text-light w-100">Update Teacher</button>
        </form>
      </div>
    </div>
  );
};

export default TeacherUpdate;
