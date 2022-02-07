import React from 'react'
import AdminSidebar from './AdminSidebar'
import Footer from './Footer'
import Nav from './Nav'
import '../stylesheets/AdminExam.css'

function AdminExam() {
    return (
        <div>
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
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Exam Management</h5>
                                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="flush-headingOne">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                            <p id="AdminExamStep"> 01 </p> <h6>Create Exam</h6>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                        <div className="accordion-body">
                                                            <form id="create-exam">
                                                                <div className="row" id="create-exam-col">
                                                                    <div className="col-md-6">
                                                                        <div className="mb-3">
                                                                            <label for="exampleInputEmail1" className="form-label">Exam info</label>
                                                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                            {/* <div id="emailHelp" className="form-text">You can use Exam name or Exam ID</div> */}
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label for="exampleInputPassword1" className="form-label">Select Subject</label>
                                                                            <select className="form-select" aria-label="Default select example">
                                                                                <option selected>Select here</option>
                                                                                <option value="1">COW</option>
                                                                                <option value="2">FWD</option>
                                                                                <option value="3">DBMS</option>
                                                                                <option value="4">PME</option>
                                                                                <option value="5">OOP</option>
                                                                                <option value="6">Advance OOP</option>
                                                                                <option value="7">Web Engg</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label for="exampleInputPassword1" className="form-label">Exam year</label>
                                                                            <input type="number" className="form-control" id="exampleInputPassword1" />
                                                                        </div>

                                                                    </div>
                                                                    <div className="col-md-6">

                                                                        <div className="mb-3">
                                                                            <label for="exampleInputPassword1" className="form-label">Exam Type</label>
                                                                            <select className="form-select" aria-label="Default select example">
                                                                                <option selected>Select here</option>
                                                                                <option value="1">Quiz</option>
                                                                                <option value="2">Midterm</option>
                                                                                <option value="3">Lab-Fainal</option>
                                                                                <option value="4">Fainal</option>
                                                                                <option value="5">Pre-Defense</option>
                                                                                <option value="6">Defense</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label for="exampleInputPassword1" className="form-label">Exam start date</label>
                                                                            <input type="date" className="form-control" id="datepicker1" />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <div className="row">
                                                                                <div className="col-md-6">
                                                                                    <label for="exampleInputPassword1" className="form-label">Exam Start at</label>
                                                                                    <input type="time" className="form-control" id="datepicker2" />
                                                                                </div>
                                                                                <div className="col-md-6">
                                                                                    <label for="exampleInputPassword1" className="form-label">Exam End at</label>
                                                                                    <input type="time" className="form-control" id="datepicker2" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">Next</button>
                                                            </form>
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
                                                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Next</button>
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
                                                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">Next</button>
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
                                                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">Next</button>
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
                                                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">Next</button>
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
        </div>
    )
}


export default AdminExam
