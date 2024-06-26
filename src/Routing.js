import React from 'react'
import "./Routing.css"
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Login';
import Sidebar from './AdminComponenet/Sidebar';
import Department from './AdminComponenet/Department';
import Profile from './AdminComponenet/Profile';
import Students from './AdminComponenet/Students';
import Teacher from './AdminComponenet/Teacher/Teacher';
import Studentupdate from './AdminComponenet/Studentupdate';
import TeacherUpdate from'./AdminComponenet/Teacher/TeacherUpdate';
import Allcourses from './AdminComponenet/Courses/Allcourses';
import AllBooks from './AdminComponenet/Books/AllBooks';

import Admin from './AdminComponenet/Admin';
import AddStudent from './AdminComponenet/AddStudent';
import StdDashboard from './Student/StdDashboard';
import TeacherDashboard from './TeacherDashboard/TeacherDashboard';
import Course from './Student/Course/Course';
import Course_Detail from './Student/Course/Course_Detail';
import Std_Books from './Student/Course/Std_Books';
import Std_Profile from './Student/Std_Profile';
import Teacher_Profile from './TeacherDashboard/Teacher_Profile';
import Std_logs from './TeacherDashboard/Student_Log/Std_logs';
import AddTeacher from './AdminComponenet/Teacher/AddTeacher';
import Individual_Sem_Std_logs from './TeacherDashboard/Student_Log/Individual_Sem_Std_logs';
import Individual_log from './TeacherDashboard/Student_Log/Individual_log';
import Log_Department from './TeacherDashboard/Student_Log/Log_Department';
import Libraryallbooks from './Student/LibraryBooks/libraryallbooks';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Student_Id } from './store/Slices/StudentSlice';
import Teachercourses from './TeacherDashboard/Courses/Teachercourses';
import BookUpload from './AdminComponenet/Books/BookUpload';
import Updatebook from './AdminComponenet/Books/Updatebook';
import AssignCourse from './AdminComponenet/Courses/AssignCourse';
import EnrollStd from './AdminComponenet/Courses/EnrollStd';
const Routing = () => {

  const dispatch = useDispatch();
  const students = useSelector(state => state.students);

  useEffect(() => {
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      const userData = JSON.parse(savedUserData);
      // Check if the data already exists in the store
      if (!students.find(student => student.id === userData.id)) {
        dispatch(Student_Id(userData));
      }
    }
  }, [dispatch, students]);
  
  return (
    <>
    <Router>
     
     <div className='container'>
     
    <div className='centered-content'>
   
     <Routes>
     <Route path='/' element={<Login/>}/>
     
     <Route path='/admin' element={<Admin/>}/>
    <Route path='/departments-students' element={<Department role={"Student"}/>}/>
    <Route path='/departments-teacher' element={<Department role={"Teacher"}/>}/>
    <Route path='/teachers' element={<Teacher/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/students' element={<Students/>}/>
     <Route path='/addstudents&dep' element={<AddStudent/>}/>
      <Route path='/addteacher&dep' element={<AddTeacher/>}/>  
     <Route path='/bookupload-form' element={<BookUpload/>}/>
     <Route path='/assigncourse' element={<AssignCourse/>}/>
     <Route path='/enrollstd' element={<EnrollStd/>}/>
     <Route path='/updatebook' element={<Updatebook/>}/>
    
    {/* <Route path="/addstudents&dep" element={<AddStudentWrapper />} /> */}

    <Route path='/studentupdate' element={<Studentupdate/>}/>
    {/* <Route path='/teacher' element={<Teacher/>}/> */}
    <Route path='/teacherupdate' element={<TeacherUpdate/>}/>
     <Route path='/allcouses' element={<Allcourses/>}/>
     <Route path='/allbooks' element={<AllBooks/>}/>
     <Route path='/courses' element={<Course/>}/>
     {/* Student Dashboard */}
      <Route path='/student-dashboard' element={<StdDashboard/>}/> 
    <Route path='/student-courses' element={<Course/>}/>
    <Route path='/course-content' element={<Course_Detail/>}/>
    <Route path='/libraryallbooks' element={<Libraryallbooks/>}/>
    <Route path='/std-books' element={<Std_Books/>}/>
    <Route path='/std_profile' element={<Std_Profile/>}/>
      {/* Teacher Dashboard */}
      <Route path='/teacher-dashboard' element={<TeacherDashboard/>}/>
      <Route path='/teachercourses' element={<Teachercourses/>}/>
      <Route path='/teacher-profile' element={<Teacher_Profile/>}/>
      <Route path='/logs-departments' element={<Log_Department/>}/>
      <Route path='/Student-logs' element={<Std_logs/>}/>
      <Route path='/check-logs' element={<Individual_Sem_Std_logs/>}/>

      <Route path='/student-individual-log' element={<Individual_log/>}/>
   </Routes> 
   
   </div>
 
    </div> 

</Router>
    </>
  )
}

const AddStudentWrapper = () => {
  const navigate = useNavigate();
  return <AddStudent onClose={() => navigate('/')} />;
};
export default Routing; 
  