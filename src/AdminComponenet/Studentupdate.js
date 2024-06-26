// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import baseurl from "../Constants";

// const Studentupdate = () => {
//   const id = useLocation().state.id;
//   const [data, setData] = useState({
//     id: id,
//     name: '',
//     username: '',
//     password: '',
//     phoneNumber: ''
//   });



//   useEffect(()=>{
//     const student = axios.get(`${baseurl}/Student/getSingleStudent?studentId=${id}`).then(
//       student => console.log(student)
//     )
//   })

//   // useEffect(() => {
//   //   axios.put(`${baseurl}/user/UpdateUser/${id}`) // Assuming you need to pass the ID to fetch user data
//   //     .then(response => {
//   //       const userData = response.data; // Assuming the API response contains user data
//   //       setData(userData); // Update state with fetched user data
//   //     })
//   //     .catch(error => console.log(error));
//   // }, [id]); // Adding id to dependency array to re-fetch data when id changes

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.put(`${baseurl}/user/UpdateUser/${id}`, data)
//       .then(response => {
//         console.log('Update successful');
//         // Optionally, you can redirect or show a success message here
//       })
//       .catch(error => {
//         console.error('Error updating user:', error);
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
//         <button type="submit">Student Update</button>
//       </form>
//     </div>
//   );
// };

// export default Studentupdate;



// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import baseurl from "../Constants";

// const Studentupdate = () => {
//   const id = useLocation().state.id;
//   const [data, setData] = useState({
//     id: id,
//     name: '',
//     username: '',
//     password: '',
//     phoneNumber: ''
//   });

//   useEffect(() => {
//     axios.get(`${baseurl}/Student/getSingleStudent?studentId=${id}`)
//       .then(response => {
//         const studentData = response.data.data[0]; // Assuming you want to use the first student's data
//         setData({
//           id: studentData.studentId,
//           name: studentData.studentName,
//           username: studentData.username,
//           password: studentData.password,
//           phoneNumber: studentData.studentPhoneNo
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
//     axios.put(`${baseurl}/user/UpdateUser/${id}`, data)
//       .then(response => {
//         console.log('Update successful');
//         // Optionally, you can redirect or show a success message here
//       })
//       .catch(error => {
//         console.error('Error updating user:', error);
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
//         <button type="submit">Student Update</button>
//       </form>
//     </div>
//   );
// };

// export default Studentupdate;


import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import baseurl from "../Constants";
import './Studentupdate.css';
import Swal from 'sweetalert2';
const Studentupdate = () => {
  const id = useLocation().state.id;
  const [data, setData] = useState({
    id:"",
    password: "",
    role: "",
    department: "",
    name: "",
    phoneNo: "1111"
  });

  useEffect(() => {
    axios.get(`${baseurl}/Student/getSingleStudent?studentId=${id}`)
      .then(response => {
        const studentData = response.data.data[0];
        setData({

          
          department:studentData.departmentName,
          role :"Student",
          id: studentData.studentId,
          name: studentData.studentName,
          username: studentData.studentRegNo,
          password: studentData.password,
          phoneNo: studentData.studentPhoneNo,
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
    console.log(data);
    axios.put(`${baseurl}/user/UpdateUser`, data) // Adjust the URL according to your API endpoint
      .then(response => {
        console.log(response);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        // Optionally, you can redirect or show a success message here
      })
      .catch(error => {
        console.error('Error updating student:', error);
        // Handle error, show error message, etc.
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error updating teacher',
          text: 'Please try again later',
          showConfirmButton: true
        });
      });
  };

  const handleClose = () => {
    navigate('/student');
  };


  return (
    // <div className='UPdate'>
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="name">Name:</label>
    //     <input type="text" id="name" name="name" value={data.name} onChange={handleChange} />
    //     <label htmlFor="username">Username:</label>
    //     <input type="text" id="username" name="username" value={data.username} onChange={handleChange} />
    //     <label htmlFor="password">Password:</label>
    //     <input type="password" id="password" name="password" value={data.password} onChange={handleChange} />
    //     <label htmlFor="phoneNumber">Phone Number:</label>
    //     <input type="text" id="phoneNumber" name="phoneNumber" value={data.phoneNumber} onChange={handleChange} />
    //     <button type="submit">Student Update</button>
    //   </form>
    // </div>


    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-lg" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">Update Student</h2>
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
          <div className="form-group mb-3">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control" style={{height:"40px" , width:'100%' , marginLeft:'-2px'}}
              value={data.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="phoneno">Phone No:</label>
            <input
              type="text"
              id="password"
              name="password"
              className="form-control"
              value={data.phoneNo}
              onChange={handleChange}
              required
            />
          </div>
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
          
          <button type="submit" className="btn custom-bg-cyan text-light w-100">Update Student</button>
        </form>
      </div>
    </div>
  );
};

export default Studentupdate;
