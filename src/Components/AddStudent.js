import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';
import Nav from './Nav';
import '../stylesheets/AddStudent.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddStudent() {
    const [StudentName, setStudentName] = useState("");
    const [student_id, setStudent_id] = useState("");
    const [email, setEmail] = useState("");
    const [fathername, setFathername] = useState("");
    const [mothername, setMothername] = useState("");
    const [birthday, setBirthday] = useState("");
    const [presentaddress, setPresentaddress] = useState("");
    const [parmanentaddress, setParmanentaddress] = useState("");
    const [gender, setGender] = useState("");
    const [batch, setBatch] = useState("");
    const [department, setDepartment] = useState("");
    const [faculty, setFaculty] = useState("");
    const [campus, setCampus] = useState("");
    const [CGPA, setCgpa] = useState("");

    function saveUser() {
        let data =
        {
            StudentName, student_id, email, fathername,
            mothername, birthday, presentaddress,
            parmanentaddress, gender, batch,
            department, faculty, campus, CGPA
        }
        fetch("http://127.0.0.1:8000/api/addstudent",
            {
                method: "POST",
                mode: 'cors',
                headers:
                {
                    'Accept': 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((result) => {
                // if (!('errors' in result)) 
                if ('statusText == Unprocessable Entity') 
                {toast.error('Faild to add student ☹️', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                    
                } else {
                    toast.success('Student has been added!😃', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                console.log("result", result);
            }).catch((result) => {
                console.warn(result)
            })

    }
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
                                                <h5 className="card-title">Add Student</h5>
                                            </div>
                                            <div className="col-md-2" id="edit_heading_btn">
                                                <button className="btn btn-primary"><i class="fas fa-chevron-left"></i> Back</button>
                                            </div>
                                        </div>

                                        <div className="row" id="edit_student_form">
                                            <div className="col-md-12">
                                                <form class="row g-3 needs-validation" novalidate>
                                                    <div className="col-md-6">
                                                        <label for="validationCustom01" className="form-label">Name</label>
                                                        <input value={StudentName} onChange={(event) => { setStudentName(event.target.value) }} name={StudentName} type="text" className="form-control" id="validationCustom01"  required="" />
                                                        <div id="emailHelp" class="form-text">student's name required.</div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Student id</label>
                                                        <input value={student_id} onChange={(event) => { setStudent_id(event.target.value) }} name="student_id" type="number" className="form-control" id="inputEmail4"  required=""/>
                                                        <div id="emailHelp" class="form-text">student's Student id required.</div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Email</label>
                                                        <input value={email} onChange={(event) => { setEmail(event.target.value) }} name="email" type="email" className="form-control" id="inputEmail4"  required=""/>
                                                        <div id="emailHelp" class="form-text">student's Email required.</div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Father Name</label>
                                                        <input value={fathername} onChange={(event) => { setFathername(event.target.value) }} name="fathername" type="text" className="form-control" id="inputEmail4" required="" />
                                                        <div id="emailHelp" class="form-text">student's Father Name required.</div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Mother Name</label>
                                                        <input value={mothername} onChange={(event) => { setMothername(event.target.value) }} name="mothername" type="text" className="form-control" id="inputEmail4" required="" />
                                                        <div id="emailHelp" class="form-text">student's Mother Name required.</div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Birth Date</label>
                                                        <input value={birthday} onChange={(event) => { setBirthday(event.target.value) }} name="birthday" type="date" className="form-control" id="inputEmail4"  required=""/>
                                                        <div id="emailHelp" class="form-text">student's Birth Date required.</div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label for="inputAddress" className="form-label">Present Address</label>
                                                        <input value={presentaddress} onChange={(event) => { setPresentaddress(event.target.value) }} name="presentaddress" type="address" className="form-control" id="inputAddress11" placeholder="1234 Main St"  required=""/>
                                                        <div id="emailHelp" class="form-text">student's Present Address required.</div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label for="inputAddress2" className="form-label">Parmanent Address</label>
                                                        <input value={parmanentaddress} onChange={(event) => { setParmanentaddress(event.target.value) }} name="parmanentaddress" type="address" className="form-control" id="inputAddress11" placeholder="Apartment, studio, or floor" required="" />
                                                        <div id="emailHelp" class="form-text">student's Parmanent Address required.</div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputCity" className="form-label">Gender</label>
                                                        <input value={gender} onChange={(event) => { setGender(event.target.value) }} name="gender" type="text" className="form-control" id="Gender"  required=""/>
                                                        <div id="emailHelp" class="form-text">student's Gender required.</div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputCity" className="form-label">Batch</label>
                                                        <input value={batch} onChange={(event) => { setBatch(event.target.value) }} name="batch" type="text" className="form-control" id="Batch"  required="" />
                                                        <div id="emailHelp" class="form-text">student's Batch required.</div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="inputState" className="form-label">Faculty</label>
                                                        <input value={faculty} onChange={(event) => { setFaculty(event.target.value) }} name="faculty" type="text" className="form-control" id="Batch"  required="" />
                                                        <div id="emailHelp" class="form-text">student's Faculty required.</div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="inputState" className="form-label">Department</label>
                                                        <input value={department} onChange={(event) => { setDepartment(event.target.value) }} name="department" type="text" className="form-control" id="Batch"  required="" />
                                                        <div id="emailHelp" class="form-text">student's Department required.</div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="inputState" className="form-label">Campus</label>
                                                        <input value={campus} onChange={(event) => { setCampus(event.target.value) }} name="campus" type="text" className="form-control" id="Batch"  required="" />
                                                        <div id="emailHelp" class="form-text">student's Campus required.</div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="inputState" className="form-label">CGPA</label>
                                                        <input value={CGPA} onChange={(event) => { setCgpa(event.target.value) }} name="CGPA" type="text" className="form-control" id="Batch"  required=""/>
                                                        <div id="emailHelp" class="form-text">student's CGPA required.</div>
                                                    </div>
                                                    <div className="col-12">
                                                        <button id="add_user_btn" type="button" onClick={saveUser} className="btn">Submit</button>
                                                        <ToastContainer />
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

export default AddStudent;
