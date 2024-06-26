import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import baseurl from '../../Constants';
const Teachercourses = () => {
    
  const userData = useSelector((state) => state.students.userData);

 
  const userId = userData ? userData.id : null;
  console.log(userId)

  
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (userId) {
      fetchCourses(userId);
    }
  }, [userId]);

  
  const fetchCourses = async (id) => {
    try {
      const response = await axios.get(`${baseurl}/Course/getCourses?userId=${id}`);
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>User ID: {userId}</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Teachercourses
