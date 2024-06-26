import React from 'react'
import StdSidebar from './StdSidebar'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import './Std_Profile.css'
import { useState } from 'react';
const Std_Profile = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };
  return (
    <div  id='std-dashboard'>
    <div id='std-sidebar-show'><StdSidebar/></div>
    <div id="std-content">
    <h1>Profile screen</h1>
      <div id="logo_username">
        <div id="icon">
          <AccountCircleIcon style={{ fontSize: 100 }} />
        </div>
        <div id="name">
          <h4>Name</h4>
          <p>Admin</p>
        </div>
      </div>
     

      <br />
      <div id="info">
        <div id="icon2">
          <InfoTwoToneIcon style={{ fontSize: 100 }} />
        </div>
        <div className="username">
          <h4>UserName</h4>
          <p>StudentName</p>
        </div>
      </div>
      <br />

      <div id="paswordlabel">
        <h2>Password</h2>
       </div> 
      <div id="combine">
      <div id="password1">
        <input
          type={passwordVisible ? "text" : "password"}
          id="password"
          placeholder="Password"
          value={"sapnaahmad0036"}
        //   onChange={(e) => setPassword(e.target.value)}
        //   required
        />
        </div>

        <div id="toggle_1">
        <button type="button" onClick={togglePasswordVisibility}>
          {passwordVisible ? <VisibilityOffIcon style={{ fontSize: 40 }}/> : <VisibilityIcon  style={{ fontSize: 40 }}/>}
        </button>
      </div>
      </div>
      <div id="update">
        <button onClick={() => {}}>Update password</button>
      </div>
     </div>


    </div>
  )
}

export default Std_Profile
