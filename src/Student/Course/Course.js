import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Course.css';
import Sidebarbootstrap from './Sidebarbootstrap';
const Course = () => {
  const navigate = useNavigate();

  // Retrieve data from local storage
  const userDataFromLocalStorage = JSON.parse(localStorage.getItem('userData'));

  // Extract user ID from local storage
  const userIdFromLocalStorage = userDataFromLocalStorage ? userDataFromLocalStorage.id : null;

  // Get user data from Redux store (assuming state is structured properly)
  const userDataFromStore = useSelector(state => state.students.find(student => student.id === userIdFromLocalStorage));

  // Extract user ID from Redux store
  const userIdFromStore = userDataFromStore ? userDataFromStore.id : null;

  useEffect(() => {
    console.log("User ID from Local Storage:", userIdFromLocalStorage);
    console.log("User ID from Redux Store:", userIdFromStore);
  }, [userIdFromLocalStorage, userIdFromStore]);

  return (
    <div className="container-fluid mt-5">
    {/* <div className="row justify-content-center">
      <div className="col-md-2">
        <Sidebarbootstrap /> */}
    
        <h1>{userIdFromStore}</h1>
      </div> 
  );
};

export default Course;
