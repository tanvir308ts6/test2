import React from 'react'
import ClassSchedule from './ClassSchedule'
import '../stylesheets/AdminDashbordContent.css'

function AdminDashbordContent() {
    return (
        <div id="admin-dashbord-Content">
            <div className="row" id="greetingsRow">
                <div className="col-md-12" id="greetingsCol">
                    <h1>Welcome to EIMS</h1>
                    <h5>Educational Institute Management System</h5>
                </div>
            </div>
            {/* 1st row  */}
            <div className="row" id="cardRow1">
                <div className="col-md-4">
                    <div className="card" id="card1">
                        <div className="card-body">
                            <i class="fas fa-user-graduate"></i>
                            <h5 className="card-title">Regular Students: 30,000</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" id="card2">
                        <div className="card-body">
                            <i class="fas fa-user-times"></i>
                            <h5 className="card-title">Irregular Students: 1,000</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" id="card3">
                        <div className="card-body">
                            <i class="fas fa-chalkboard-teacher"></i>
                            <h5 className="card-title">Total Teachers: 5,000</h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2nd row  */}
            <div className="row" id="cardRow2">
                <div className="col-md-3">
                    <div className="card" id="card4">
                        <div className="card-body">
                            <i class="fas fa-book-open"></i>
                            <h5 className="card-title">faculty: 06</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" id="card5">
                        <div className="card-body">
                            <i class="fas fa-chalkboard"></i>
                            <h5 className="card-title">Departments: 60</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" id="card6">
                        <div className="card-body">
                            <i class="fas fa-sticky-note"></i>
                            <h5 className="card-title">Running Exams: 12</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" id="card7">
                        <div className="card-body">
                            <i class="fas fa-box-open"></i>
                            <h5 className="card-title">Pending Requests: 10</h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3rd row  */}
            <div className="row" id="row3">
                <div className="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Active User's Roles</h5>
                            <table className="table table-striped table-hover">
                                <thead className="table-header">
                                    <tr>
                                        <th scope="col">SL</th>
                                        <th scope="col">Role Name</th>
                                        <th scope="col">Short Description</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Admin</td>
                                        <td>Admin</td>
                                        <td id="status_data"> <p id="status">Active</p> </td>
                                        <td id="icon">
                                            <i className="fas fa-eye" id="bars"></i>
                                            <i className="fas fa-edit" id="edit"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Sr. Lecturer</td>
                                        <td>Teacher</td>
                                        <td id="status_data"> <p id="status">Active</p> </td>
                                        <td id="icon">
                                            <i className="fas fa-eye" id="bars"></i>
                                            <i className="fas fa-edit" id="edit"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Student</td>
                                        <td>Student</td>
                                        <td id="status_data"> <p id="status">Active</p> </td>
                                        <td id="icon">
                                            <i className="fas fa-eye" id="bars"></i>
                                            <i className="fas fa-edit" id="edit"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Lecturer</td>
                                        <td>Teacher</td>
                                        <td id="status_data"> <p id="status">Active</p> </td>
                                        <td id="icon">
                                            <i className="fas fa-eye" id="bars"></i>
                                            <i className="fas fa-edit" id="edit"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Test</td>
                                        <td>Test</td>
                                        <td id="status_data"> <p id="status_inactive">Inactive</p> </td>
                                        <td id="icon">
                                            <i className="fas fa-eye" id="bars"></i>
                                            <i className="fas fa-edit" id="edit"></i>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4th row  */}
            <div className="row" id="ClassScheduleRow">
                <div className="col-md-12">
                    <ClassSchedule />
                </div>
            </div>
        </div>
    )
}

export default AdminDashbordContent
