import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import Footer from './Footer'
import Nav from './Nav'
import '../stylesheets/StudentList.css'
import { Link } from 'react-router-dom'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import { Audio } from 'react-loader-spinner'


function StudentList() {
    const [data, setData] = useState([])
    // const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/student").then((result) => {

            result.json().then((resp) => {
                // console.warn("result",resp)
                setData(resp)
            })
        })
    }, [])

    console.warn(data)
    return (
        <div>
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-12">
                                <div class="card" id="Student_list_search_card">
                                    <div class="card-body">
                                        <div className="accordion accordion-flush" id="accordionFlushExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-headingOne">
                                                    <button className="accordion-button collapsed" id="Custom_Search_student" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                        <h5><i class="fas fa-search"></i> Custom Search Panel   </h5>
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <div className="row" id="studentListRow1">
                                                            <div className="col-md-4">
                                                                <div className="mb-3">
                                                                    <input type="number" className="form-control" placeholder="Student ID" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="mb-3">
                                                                    <input type="email" className="form-control" placeholder="Student email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option selected>Student Type</option>
                                                                    <option value="1">Regular</option>
                                                                    <option value="2">Irregular</option>
                                                                    <option value="3">Improvement</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="row" id="studentListRow2">
                                                            <div className="col-md-4">
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option selected>Select Faculty</option>
                                                                    <option value="1">FSIT</option>
                                                                    <option value="2">FBA</option>
                                                                    <option value="3">FHH</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option selected>Select Department</option>
                                                                    <option value="1">CIS</option>
                                                                    <option value="2">CSE</option>
                                                                    <option value="3">EEE</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option selected>Select Semester</option>
                                                                    <option value="1">1st Semester</option>
                                                                    <option value="2">2nd Semester</option>
                                                                    <option value="3">3rd Semester</option>
                                                                </select>

                                                            </div>
                                                        </div>

                                                        <div className="row" id="studentListRow3">
                                                            <div className="col-md-4">
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option selected>Select Campus</option>
                                                                    <option value="1">City</option>
                                                                    <option value="2">Parmanent</option>
                                                                </select>
                                                            </div>

                                                        </div>

                                                        <div className="row" id="studentListRow4">
                                                            <div className="col-md-10"></div>
                                                            <div className="col-md-2">
                                                                <button type="submit" className="btn btn-primary">Submit</button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" id="row3">
                            <div className="col-md-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Student List</h5>
                                        <table className="table table-striped table-hover">
                                            <thead className="table-header">
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Department</th>
                                                    <th scope="col">Faculty</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.map((item) =>
                                                        <tr>
                                                            <th scope="row">{item.student_id}</th>
                                                            <td id="student_data">{item.StudentName}</td>
                                                            <td id="student_data">{item.email}</td>
                                                            <td id="student_data">{item.department}</td>
                                                            <td id="student_data">{item.faculty}</td>
                                                            <td id="student_data"><p id="StudentTypeR">Regular</p> </td>
                                                            <td id="icon">
                                                                <i class="far fa-eye" id="bars"></i>
                                                                <Link type="btn btn-primary" to="/EditStudent" ><i className="fas fa-edit" id="edit"></i></Link>
                                                            </td>
                                                        </tr>
                                                    )


                                                }


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default StudentList
