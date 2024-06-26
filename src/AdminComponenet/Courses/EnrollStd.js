import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import baseurl from '../../Constants';

const EnrollStd = () => {
  const [students, setStudents] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [courses, setCourses] = useState([]); // State for courses
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedCourseCode, setSelectedCourseCode] = useState(''); // State for selected course code
  const [formData, setFormData] = useState({
    semesterNo: '',
    month: '',
    year: '',
    department: '',
  });
  const navigate = useNavigate();

  // Fetch departments on component mount
  useEffect(() => {
    axios.get(`${baseurl}/department/allDepartment`)
      .then(response => {
        if (response.data && response.data.status === 'Success' && Array.isArray(response.data.data)) {
          setDepartments(response.data.data);
        } else {
          console.error('Unexpected departments data format:', response.data);
        }
      })
      .catch(error => console.error('Error fetching departments:', error));
  }, []);

  // Fetch students when a department is selected
  const fetchStudents = (departmentId) => {
    axios.get(`${baseurl}/Student/getAllStudent?departmentid=${departmentId}`)
      .then(response => {
        if (response.data && response.data.status === 'Success' && Array.isArray(response.data.data)) {
          setStudents(response.data.data);
        } else {
          console.error('Unexpected students data format:', response.data);
        }
      })
      .catch(error => console.error('Error fetching students:', error));
  };

  // Fetch courses when a department is selected
  const fetchCourses = (departmentId) => {
    axios.get(`${baseurl}/course/getAllCourses?departmentid=${departmentId}`)
      .then(response => {
        if (response.data && response.data.status === 'Success' && Array.isArray(response.data.data)) {
          setCourses(response.data.data);
        } else {
          console.error('Unexpected courses data format:', response.data);
        }
      })
      .catch(error => console.error('Error fetching courses:', error));
  };

  // Fetch students and courses whenever selected department changes
  useEffect(() => {
    if (selectedDepartment) {
      fetchStudents(selectedDepartment);
      fetchCourses(selectedDepartment); // Fetch courses for the selected department
    }
  }, [selectedDepartment]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${baseurl}/enrollment/enroll`, {
      studentId: selectedStudentId,
      courseCode: selectedCourseCode, // Include selected course code
      ...formData,
    })
      .then(response => {
        if (response.data.status === 'Success') {
          console.log('Enrollment successful:', response.data);
          navigate('/success'); // Navigate to success page or any other page
        } else {
          console.error('Enrollment failed:', response.data.message);
          alert(`Enrollment failed: ${response.data.message}`); // Display an alert with the error message
        }
      })
      .catch(error => console.error('Error enrolling student:', error));
  };

  return (
    <div>
      <h1>Enroll Student</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Department:</label>
          <select
            name="department"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            required
          >
            <option value="">Select Department</option>
            {Array.isArray(departments) && departments.map(dept => (
              <option key={dept.departmentId} value={dept.departmentId}>{dept.departmentName}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Course:</label> {/* Course selection dropdown */}
          <select
            name="course"
            value={selectedCourseCode}
            onChange={(e) => setSelectedCourseCode(e.target.value)}
            required
          >
            <option value="">Select Course</option>
            {Array.isArray(courses) && courses.map(course => (
              <option key={course.courseCode} value={course.courseCode}>{course.courseName}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Student:</label>
          <select
            name="student"
            value={selectedStudentId}
            onChange={(e) => setSelectedStudentId(e.target.value)}
            required
          >
            <option value="">Select Student</option>
            {Array.isArray(students) && students.map(student => (
              <option key={student.studentId} value={student.studentId}>{student.studentName}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Semester Number:</label>
          <input
            type="text"
            name="semesterNo"
            value={formData.semesterNo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Month:</label>
          <input
            type="text"
            name="month"
            value={formData.month}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Year:</label>
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Enroll</button>
      </form>
    </div>
  );
};

export default EnrollStd;
