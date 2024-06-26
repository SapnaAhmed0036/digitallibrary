
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Student_Id } from './store/Slices/StudentSlice';
import 'bootstrap/dist/css/bootstrap.css';
import baseurl from './Constants';
import './Login.css'

const Login = () => {
  const dispatch = useDispatch();
  const students = useSelector(state => state.students);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole === 'Admin') {
      navigate('/admin');
    } else if (userRole === 'Student') {
      navigate('/student-dashboard');
    } else if (userRole === 'Teacher') {
      navigate('/teacher-dashboard');
    }
  }, [userRole, navigate]);

  const handleData = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseurl}/user/loginuser`, {
        username,
        password,
      });

      if (response.status === 200 && response.data.status === 'Success') {
        const userData = response.data.data[0];
       
        if (!students.find(student => student.id === userData.id)) {
          dispatch(Student_Id(userData));
        }
         localStorage.setItem('userData', JSON.stringify(userData));
        setUserRole(userData.role);
      } else {
        alert(response.data.message || 'Something went wrong');
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className=".container mt-2">
      <div className=".row">
        <div className="d-flex">
          <img src="northernlogo.jpeg" alt="Northern logo" className="img-fluid" style={{ width: '6%' }} />
          <h4 className="mt-4" style={{ marginLeft: '15px' }}>
            Northern University Nowshera
          </h4>
        </div>
      </div>

      <div className=".row justify-content-center">
        <div className=".col-12 custom-bg-cyan text-light">
          <h4 className="border border-dark mt-2 p-3 text-center">
            Digital Library & Online Lesson Plan
          </h4>
        </div>
      </div>

      <div id="user-login-form" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <form onSubmit={handleData} className='login_form mt-5' >
          <div className="">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <h5 style={{ margin: 0 }}>Username:</h5>
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              style={{ width: '100%' }}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              className="custom-border form-control mb-5"
            />
          </div>

          <div className="">
            <label htmlFor="exampleInputPassword1" className="form-label">
              <h5 style={{ margin: 0 }}>Password:</h5>
            </label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="custom-border form-control"
              style={{ width: '100%' }}
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={togglePasswordVisibility} />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Show Password
            </label>
          </div>

          <button className="btn custom-bg-cyan text-light" type="submit" id="login-b" style={{ width: '100%' }}>
            <h5>Login</h5>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
