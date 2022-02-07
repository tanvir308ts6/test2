import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import Footer from './Footer'
import Nav from './Nav'
import '../stylesheets/EditStudent.css'

function EditStudent() {
    const [data, setData] = useState([])
    const[StudentName,setStudentName]=useState("");
    const[student_id,setStudent_id]=useState("");
    const[email,setEmail]=useState("");
    const[fathername,setFathername]=useState("");
    const[mothername,setMothername]=useState("");
    const[birthday,setBirthday]=useState("");
    const[presentaddress,setPresentaddress]=useState("");
    const[parmanentaddress,setParmanentaddress]=useState("");
    const[gender,setGender]=useState("");
    const[batch,setBatch]=useState("");
    const[department,setDepartment]=useState("");
    const[faculty,setFaculty]=useState("");
    const[campus,setCampus]=useState("");

    useEffect(()=>{
        getStudent();
    },[])

    function getStudent(id)
    {
        fetch(`http://127.0.0.1:8000/api/student`).then((result) => {

            result.json().then((resp) => {
                // console.warn("result",resp)
                setData(resp)
                setStudentName(resp[0].StudentName)
                setStudent_id(resp[0].student_id)
                setEmail(resp[0].email)
                setFathername(resp[0].fathername)
                setMothername(resp[0].mothername)
                setBirthday(resp[0].birthday)
                setPresentaddress(resp[0].presentaddress)
                setParmanentaddress(resp[0].parmanentaddress)
                setGender(resp[0].gender)
                setBatch(resp[0].batch)
                setFaculty(resp[0].faculty)
                setDepartment(resp[0].department)
                setCampus(resp[0].campus)
            })
        })

    }

    console.warn(data);




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
                                                        <input type="text" value={StudentName} className="form-control" id="inputEmail4" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Student id</label>
                                                        <input type="text" value={student_id} className="form-control" id="inputEmail4" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Email</label>
                                                        <input type="email" value={email} className="form-control" id="inputEmail4" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Father Name</label>
                                                        <input type="text" value={fathername} className="form-control" id="inputEmail4" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Mother Name</label>
                                                        <input type="text" value={mothername} className="form-control" id="inputEmail4" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Birth Date</label>
                                                        <input type="text" value={birthday} className="form-control" id="inputEmail4" />
                                                    </div>
                                                    <div className="col-12">
                                                        <label for="inputAddress" className="form-label">Present Address</label>
                                                        <input type="text" value={presentaddress} className="form-control" id="inputAddress11" placeholder="1234 Main St" />
                                                    </div>
                                                    <div className="col-12">
                                                        <label for="inputAddress2" className="form-label">Parmanent Address</label>
                                                        <input type="text" value={parmanentaddress} className="form-control" id="inputAddress11" placeholder="Apartment, studio, or floor" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputCity" className="form-label">Gender</label>
                                                        <input type="text" value={gender} className="form-control" id="Gender" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputCity" className="form-label">Batch</label>
                                                        <input type="text" value={batch} className="form-control" id="Batch" />
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
