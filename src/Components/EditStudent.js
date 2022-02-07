import React from 'react'
import AdminSidebar from './AdminSidebar'
import Footer from './Footer'
import Nav from './Nav'
import '../stylesheets/EditStudent.css'

function EditStudent() {
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
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row" id="edit_student_heading">
                                            <div className="col-md-10">
                                                <h5 className="card-title">Edit Student</h5>
                                            </div>
                                            <div className="col-md-2" id="edit_heading_btn">
                                                <button className="btn btn-primary"><i class="fas fa-chevron-left"></i> Back</button>
                                            </div>
                                        </div>

                                        <div className="row" id="edit_student_form">   
                                            <div className="col-md-12">
                                                <form className="row g-3">
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Name</label>
                                                        <input type="text" className="form-control" id="inputEmail4" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Student id</label>
                                                        <input type="number" className="form-control" id="inputEmail4" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Email</label>
                                                        <input type="email" className="form-control" id="inputEmail4" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Father Name</label>
                                                        <input type="text" className="form-control" id="inputEmail4" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Mother Name</label>
                                                        <input type="text" className="form-control" id="inputEmail4" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Birth Date</label>
                                                        <input type="date" className="form-control" id="inputEmail4" />
                                                    </div>
                                                    <div className="col-12">
                                                        <label for="inputAddress" className="form-label">Present Address</label>
                                                        <input type="text" className="form-control" id="inputAddress11" placeholder="1234 Main St" />
                                                    </div>
                                                    <div className="col-12">
                                                        <label for="inputAddress2" className="form-label">Parmanent Address</label>
                                                        <input type="text" className="form-control" id="inputAddress11" placeholder="Apartment, studio, or floor" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputCity" className="form-label">Gender</label>
                                                        <input type="text" className="form-control" id="Gender" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputCity" className="form-label">Batch</label>
                                                        <input type="text" className="form-control" id="Batch" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="inputState" className="form-label">Faculty</label>
                                                        <select id="Gender" className="form-select">
                                                            <option selected>Choose...</option>
                                                            <option>CIS</option>
                                                            <option>CSE</option>
                                                            <option>EEE</option>
                                                            <option>BBA</option>
                                                            <option>MBA</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="inputState" className="form-label">Department</label>
                                                        <select id="Gender" className="form-select">
                                                            <option selected>Choose...</option>
                                                            <option>CIS</option>
                                                            <option>CSE</option>
                                                            <option>EEE</option>
                                                            <option>BBA</option>
                                                            <option>MBA</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="inputState" className="form-label">Campus</label>
                                                        <select id="Gender" className="form-select">
                                                            <option selected>Choose...</option>
                                                            <option>City</option>
                                                            <option>Parmanent</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12">
                                                        <button type="submit" className="btn btn-primary">Submit</button>
                                                    </div>
                                                </form>

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

export default EditStudent
