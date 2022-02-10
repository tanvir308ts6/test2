import React from 'react';
import AdminSidebar from './AdminSidebar';
import ClassSchedule from './ClassSchedule';
import Footer from './Footer';
import Nav from './Nav';
import '../stylesheets/AdminClassAndRoom.css'

function AdminClassAndRoom() {
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
                                <div className="row" id="cardRow1">
                                    <div className="col-md-12">
                                        <div className="card" id="classSeduilManagerCard">
                                            <div className="card-body">
                                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                                    <div className="accordion-item" id="classSeduilManager">
                                                        <h2 className="accordion-header" id="flush-headingOne">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                <h6 id="class_management">Manage Class</h6>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                            <div className="accordion-body">
                                                                <form className="row g-3">
                                                                    <div className="col-md-6">
                                                                        <label for="inputState" className="form-label">Select Semester</label>
                                                                        <select id="inputState" className="form-select">
                                                                            <option selected>Choose...</option>
                                                                            <option>1st Semester</option>
                                                                            <option>2nd Semester</option>
                                                                            <option>3rd Semester</option>
                                                                            <option>4th Semester</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="inputEmail4" className="form-label">Teacher Name</label>
                                                                        <input type="email" className="form-control" id="inputEmail4" />
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="inputEmail4" className="form-label">Saturday</label>
                                                                        <input type="email" className="form-control" id="inputEmail4" />
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="inputEmail4" className="form-label">Sunday</label>
                                                                        <input type="email" className="form-control" id="inputEmail4" />
                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <label for="inputEmail4" className="form-label">Monday</label>
                                                                        <input type="email" className="form-control" id="inputEmail4" />
                                                                    </div>
                                                                    
                                                                    <div className="col-md-6">
                                                                        <label for="inputEmail4" className="form-label">Tuesday</label>
                                                                        <input type="email" className="form-control" id="inputEmail4" />
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="inputEmail4" className="form-label">Wednesday</label>
                                                                        <input type="email" className="form-control" id="inputEmail4" />
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="inputEmail4" className="form-label">Thursday</label>
                                                                        <input type="email" className="form-control" id="inputEmail4" />
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="inputEmail4" className="form-label">Friday</label>
                                                                        <input type="email" className="form-control" id="inputEmail4" />
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <button type="submit" className="btn btn-primary">Create Class</button>
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
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <ClassSchedule />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AdminClassAndRoom;
