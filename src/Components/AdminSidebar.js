import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/AdminDashbord.css';
import '../stylesheets/AdminSidebar.css';


function AdminSidebar() {
    return (
        <div className="row">
            <div className="col-md-12" id="SaidbarStudentAdmin">
                <ul className="list-group">
                    <Link className="list-group-item" to="/AdminDashbord" ><i class="fas fa-home"></i>Dashboard</Link>
                    <div className="accordion-item" id="drop-item">
                        <h2 className="accordion-header" id="flush-headingDrop">
                            <button className="accordion-button collapsed" id="flush-heading" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseStudentDrop" aria-expanded="false" aria-controls="flush-collapseStudentDrop">
                                <i class="fas fa-user-graduate"></i> Student
                            </button>
                        </h2>
                        <div id="flush-collapseStudentDrop" className="collapse" aria-labelledby="flush-headingDrop" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <Link className="list-group-item" to="/StudentList"><i class="fas fa-list"></i>Student List</Link>
                                <Link className="list-group-item" to="/AddStudent" ><i class="fas fa-list"></i>Add Student</Link>
                            </div>
                        </div>
                    </div>

                    {/* <button className="list-group-item" href="/"><i class="fas fa-user-tie"></i>Teacher</button> */}
                    <div className="accordion-item" id="drop-item">
                        <h2 className="accordion-header" id="flush-headingDropteacher">
                            <button className="accordion-button collapsed" id="flush-headingteacher" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseteacherDrop" aria-expanded="false" aria-controls="flush-collapseteacherDrop">
                                <i class="fas fa-user-tie"></i>Teacher
                            </button>
                        </h2>
                        <div id="flush-collapseteacherDrop" className="collapse" aria-labelledby="flush-headingDropteacher" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <Link className="list-group-item" to="/teacherList"><i class="fas fa-list"></i>Teacher List</Link>
                                <Link className="list-group-item" to="/Addteacher" ><i class="fas fa-list"></i>Add Teacher</Link>
                            </div>
                        </div>
                    </div>
                    <Link className="list-group-item" to="/Courses"><i class="fas fa-book"></i>Courses</Link>
                    <Link className="list-group-item" to="/AdminClassAndRoom"><i class="fas fa-chalkboard"></i>Class & Rooms</Link>
                    <Link className="list-group-item" to="/AdminExam"><i class="far fa-edit"></i>Manage Exam</Link>
                    <button className="list-group-item" href="/"><i class="fas fa-file-word"></i>Assignments</button>
                    <button className="list-group-item" href="/"><i class="fas fa-poll"></i>Results</button>
                    <button className="list-group-item" href="/"><i class="fab fa-adn"></i>Applications</button>
                    <button className="list-group-item" href="/"><i class="far fa-id-badge"></i>Profile</button>
                    <div className="accordion-item" id="drop-item">
                        <h2 className="accordion-header" id="flush-headingDrop">
                            <button className="accordion-button collapsed" id="flush-heading" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseDrop" aria-expanded="false" aria-controls="flush-collapseDrop">
                                <i class="fas fa-cog"></i> Settings
                            </button>
                        </h2>
                        <div id="flush-collapseDrop" className="accordion-collapse collapse" aria-labelledby="flush-headingDrop" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <Link className="list-group-item" to="/" ><i class="fas fa-user-tag"></i>User Role</Link>
                                <Link className="list-group-item" to="/UserRoalConfig" ><i class="fas fa-user-tag"></i>Config Role</Link>
                                <Link className="list-group-item" to="/" ><i class="fas fa-user-tag"></i>All User</Link>
                            </div>
                        </div>
                    </div>
                    <Link className="list-group-item" to="/notice"><i class="fas fa-flag-checkered"></i>Notice Bord</Link>
                    <Link className="list-group-item" to="/AdminTaskList"><i class="fas fa-list-ol"></i>Task List</Link>
                </ul>
            </div>
        </div>
    )
}

export default AdminSidebar
