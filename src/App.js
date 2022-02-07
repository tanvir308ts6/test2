import React from 'react';
import './App.css';
import StudentDashbord from './Components/StudentDashbord';
import TeacherDashbord from './Components/TeacherDashbord';
import AdminDashbord from './Components/AdminDashbord';
import EditStudent from './Components/EditStudent';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Class from './Components/Class'
import StudentList from './Components/StudentList';
import AdminExam from './Components/AdminExam';
import UserRoalConfig from './Components/UserRoalConfig';
import AdminTaskList from './Components/AdminTaskList';
import Notice from './Components/Notice';
import AddStudent from './Components/AddStudent';
import AddNotice from './Components/AddNotice';
import StudentNoticeBord from './Components/StudentNoticeBord';
import TeacherList from './Components/TeacherList';




function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/StudentDashbord" element={<StudentDashbord />} />
          <Route exact path="/TeacherDashbord" element={<TeacherDashbord />} />
          <Route exact path="/AdminDashbord" element={<AdminDashbord />} />
          <Route exact path="/Class" element={<Class/>} />
          <Route exact path="/StudentList" element={<StudentList/>} />
          <Route exact path="/AdminExam" element={<AdminExam/>} />
          <Route exact path="/UserRoalConfig" element={<UserRoalConfig/>} />
          <Route exact path="/EditStudent/:id" element={<EditStudent/>} />
          <Route exact path="/AdminTaskList" element={<AdminTaskList/>} />
          <Route exact path="/notice" element={<Notice/>} />
          <Route exact path="/AddStudent" element={<AddStudent/>} />
          <Route exact path="/AddNotice" element={<AddNotice/>} />
          <Route exact path="/StudentNoticeBord" element={<StudentNoticeBord/>}/>
          <Route exact path="/TeacherList" element={<TeacherList/>}/>
        </Routes>
      </Router>
    </div>


  );
}

export default App;
