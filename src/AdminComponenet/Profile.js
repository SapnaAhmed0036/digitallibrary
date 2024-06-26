// import React, { useState, useEffect } from "react";
// import "./Profile.css";
// import SidebarAdmin from "./SidebarAdmin";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import VisibilityIcon from "@mui/icons-material/Visibility";

// import { useNavigate } from "react-router-dom";
// const Profile = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const nav = useNavigate();
//   useEffect(() => {
//     const storedUsername = localStorage.getItem("username");
//     const storedPassword = localStorage.getItem("password");

//     if (storedUsername) {
//       setUsername(storedUsername);
//     }

//     if (storedPassword) {
//       setPassword(storedPassword);
//     }
//   }, []);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   return (
//     <div className="container-fluid mt-4">
//     <div className='col'><SidebarAdmin /></div>
//     <div className="row mt-5">
//       <h1>Profile screen</h1>
     
//       <div className="col-2 d-flex align-items-center justify-content-center">
//   <AccountCircleIcon style={{ fontSize: 100, marginRight: '10px' }} />
//   <div>
//     <h4 className="mb-0">Name</h4>
//     <p className="mb-0">Admin</p>
//   </div>
// </div>

// <div className="col-2 d-flex align-items-center">
//   <InfoTwoToneIcon  style={{ fontSize: 100, marginRight: '10px' }} />
//   <div>
//     <h4 className="mb-0">UserName</h4>
//     <p className="mb-0">{username}</p>
//   </div>
// </div>
      
     
//        <div className="row">
//         <h2>Password</h2>
//        </div> 
//       <div className="col-2">
//       <div className="row">
//         <input
//           type={passwordVisible ? "text" : "password"}
//           id="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         </div>
//        <div className="row">
//         <button type="button" onClick={togglePasswordVisibility}>
//           {passwordVisible ? <VisibilityOffIcon style={{ fontSize: 40 }}/> : <VisibilityIcon  style={{ fontSize: 40 }}/>}
//         </button>
//       </div>
//       </div>
//       <div className="row">
//         <button onClick={() => {}}>Update password</button>
//       </div>
//      </div>   
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from "react";
import "./Profile.css";
import SidebarAdmin from "./SidebarAdmin";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (storedUsername) {
      setUsername(storedUsername);
    }

    if (storedPassword) {
      setPassword(storedPassword);
    }
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="profile-container mt-5">
      <div className="profile-content mb-0">
        <SidebarAdmin />
        <div className="content">
          {/* Name Section */}
          <div className="section">
            <div className="icon-wrapper">
              <AccountCircleIcon className="icon" style={{fontSize:70}}/>
            </div>
            <div className="text-wrapper">
              <h4 className="mb-0">Name</h4>
              <p className="mb-0">Admin</p> 
            </div>
          </div>

          {/* Username Section */}
          <div className="section">
            <div className="icon-wrapper">
              <InfoTwoToneIcon className="icon"  style={{fontSize:70}}/>
            </div>
            <div className="text-wrapper">
              <h4 className="mb-0">Username</h4>
              <p className="mb-0">Admin@nun.com</p>
            </div>
          </div>

          {/* Password Section */}
          <div className="section">
            <h4>Password</h4>
            <div className="input-group mb-3">
              <input
                type={passwordVisible ? "text" : "password"}
                className="form-control password-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button 
                className="btn btn-outline-secondary password-visibility-btn" 
                type="button" 
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <VisibilityOffIcon className="visibility-icon" /> : <VisibilityIcon className="visibility-icon" />}
              </button>
            </div>
            <div className="button-wrapper">
              <button className="btn btn-block custom-bg-cyan text-light p-2" id="update_button">Update Password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
