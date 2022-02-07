import React from 'react'
import AdminSidebar from './AdminSidebar'
import Footer from './Footer'
import Nav from './Nav'
import '../stylesheets/UserRoalConfig.css'

function AdminSettings() {
    return (
        <div>
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-10">
                        <div className="row" id="cardRow1">
                            <div className="col-md-12">
                                <div className="card" id="User-config-card1">
                                    <div className="card-body">
                                        <h1>Select Role & Exam</h1>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>Student User Role</option>
                                                    <option value="1">Admin</option>
                                                    <option value="2">Student</option>
                                                    <option value="3">Teacher</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>Select Exam</option>
                                                    <option value="1">Regular</option>
                                                    <option value="2">Irregular</option>
                                                    <option value="3">Improvement</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" id="cardRow1">
                            <div className="col-md-12">
                                <div className="card" id="User-config-card1">
                                    <div className="card-body">
                                        <div className="accordion accordion-flush" id="accordionFlushExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-headingOne">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                        <p id="AdminExamStep"> 01 </p> <h6>Create Exam</h6>
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                       <h1>dfbwsdijkcbskdnc</h1>
                                                            
                                                            <button className="btn btn-primary" type="button">Submit</button>
                                                     
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-headingTwo">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                        <p id="AdminExamStep">02</p> <h6>Routine & Center Management</h6>
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <h1>hhhfhfhfhfhfhfh</h1>
                                                            </div>

                                                        </div>
                                                        <button className="btn btn-primary" type="button">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-headingThree">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                        <p id="AdminExamStep">03</p> <h6>Examiner & Invigilator Management</h6>
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <h1>hhhfhfhfhfhfhfh</h1>
                                                            </div>
                                                        </div>
                                                        <button className="btn btn-primary" type="button">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-headingFour">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                        <p id="AdminExamStep">04</p> <h6>Question & Blank-Script Management</h6>
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <h1>hhhfhfhfhfhfhfh</h1>
                                                            </div>
                                                        </div>
                                                        <button className="btn btn-primary" type="button">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-headingFive">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                        <p id="AdminExamStep"> 05 </p> <h6>Confirm Examinee List</h6>
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <h1>hhhfhfhfhfhfhfh</h1>
                                                            </div>
                                                        </div>
                                                        <button className="btn btn-primary" type="button">Submit</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-headingSix">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                                        <p id="AdminExamStep">06</p> <h6>Answer-Scripts Management</h6>
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <h1>hhhfhfhfhfhfhfh</h1>
                                                            </div>
                                                        </div>
                                                        <button className="btn btn-primary" type="button">Submit</button>
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
            </div>
            <Footer />
        </div>
    )
}

export default AdminSettings
