import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';
import Nav from './Nav';

function AddTeacher() {
    const [name, setName] = useState("");
    const [teacher_id, setTeacher_id] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [post, setPost] = useState("");
    const [faculty, setFaculty] = useState("");
    const [degree1, setDegree1] = useState("");
    const [degree2, setDegree2] = useState("");
    const [degree3, setDegree3] = useState("");
    const [phone, setPhone] = useState("");



    function saveUser() {
        let data =
        {
            name,
            teacher_id,
            email,
            department,
            post,
            faculty,
            degree1,
            degree2,
            degree3,
            phone
        }
        fetch("http://127.0.0.1:8000/api/addTeacher",
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
                
                toast.success('Student has been added!😃', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                
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
                                                <h5 className="card-title">Add Teacher</h5>
                                            </div>
                                            <div className="col-md-2" id="edit_heading_btn">
                                                <button className="btn btn-primary"><i class="fas fa-chevron-left"></i> Back</button>
                                            </div>
                                        </div>

                                        <div className="row" id="edit_student_form">
                                            <div className="col-md-12">
                                                <form class="row g-3 needs-validation" novalidate>
                                                    <div className="col-md-6">
                                                        <label for="validationCustom01" className="form-label">Teacher's Name</label>
                                                        <input value={name} onChange={(event) => { setName(event.target.value) }} name="name" type="text" className="form-control" id="validationCustom01" required="" />
                                                        <div id="emailHelp" class="form-text">Teacher's name required.</div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Teacher's id</label>
                                                        <input value={teacher_id} onChange={(event) => { setTeacher_id(event.target.value) }} name="student_id" type="number" className="form-control" id="inputEmail4" required="" />
                                                        <div id="emailHelp" class="form-text">student's Student id required.</div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Email</label>
                                                        <input value={email} onChange={(event) => { setEmail(event.target.value) }} name="email" type="email" className="form-control" id="inputEmail4" required="" />
                                                        <div id="emailHelp" class="form-text">Teacher's Email required.</div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Teacher's Faculty</label>
                                                        <input value={faculty} onChange={(event) => { setFaculty(event.target.value) }} name="faculty" type="text" className="form-control" id="inputEmail4" required="" />
                                                        <div id="emailHelp" class="form-text">Teacher's Faculty required.</div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Teacher's Department</label>
                                                        <input value={department} onChange={(event) => { setDepartment(event.target.value) }} name="department" type="text" className="form-control" id="inputEmail4" required="" />
                                                        <div id="emailHelp" class="form-text">Teacher's Department required.</div>
                                                    </div>
                                                    
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Designation</label>
                                                        <input value={post} onChange={(event) => { setPost(event.target.value) }} name="post" type="text" className="form-control" id="inputEmail4" required="" />
                                                        <div id="emailHelp" class="form-text">Teacher's Designation required.</div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label for="inputAddress" className="form-label">Ph.D.</label>
                                                        <textarea value={degree1} onChange={(event) => { setDegree1(event.target.value) }} name="presentaddress" type="address" className="form-control" id="inputAddress11" placeholder="1234 Main St" required="" />
                                                        <div id="emailHelp" class="form-text">If teacher's has Ph.D. degree.</div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label for="inputAddress2" className="form-label">Master's Degree</label>
                                                        <textarea value={degree2} onChange={(event) => { setDegree2(event.target.value) }} name="Degree2" type="address" className="form-control" id="inputAddress11" placeholder="Apartment, studio, or floor" required="" />
                                                        <div id="emailHelp" class="form-text">If teacher's has Master's Degree.</div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <label for="inputCity" className="form-label">Honours Degree</label>
                                                        <textarea value={degree3} onChange={(event) => { setDegree3(event.target.value) }} name="Degree3" type="text" className="form-control" id="Gender" required="" />
                                                        <div id="emailHelp" class="form-text">Teacher's Honours Degree is required.</div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputCity" className="form-label">Teacher's Phone Number</label>
                                                        <input value={phone} onChange={(event) => { setPhone(event.target.value) }} name="phone" type="text" className="form-control" id="Batch" required="" />
                                                        <div id="emailHelp" class="form-text">Teacher's Phone Number is required.</div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="formFile" class="form-label">Upload Teacher's image</label>
                                                        <input class="form-control" type="file" id="formFile" />
                                                        <div id="emailHelp" class="form-text">If Teacher's image is available</div>
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

export default AddTeacher;
