import React, { useEffect, useState } from 'react';
import { Bars } from 'react-loader-spinner';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';
import Nav from './Nav';
import '../stylesheets/StudentList.css';
import ProfilePic from '../images/profile.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function StudentList() {
    const [data, setData] = useState([]);
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
    const [CGPA, setCGPA] = useState("");
    const [id, setId] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getStudent();
    }, [])

    function getStudent(id) {
        fetch(`${id ? 'http://127.0.0.1:8000/api/student/?' + id : 'http://127.0.0.1:8000/api/student'}`).then((result) => {

            result.json().then((resp) => {
                //console.warn(resp)
                setData(resp)
                setLoading(true)
                setId(resp[0].id)
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
                setCGPA(resp[0].CGPA)
            })
        })

    }

    function selectStudent(id) {
        console.warn(data[id - 1])
        let item = data[id - 1]
        setId(item.id)
        setStudentName(item.StudentName)
        setStudent_id(item.student_id)
        setEmail(item.email)
        setFathername(item.fathername)
        setMothername(item.mothername)
        setBirthday(item.birthday)
        setPresentaddress(item.presentaddress)
        setParmanentaddress(item.parmanentaddress)
        setGender(item.gender)
        setBatch(item.batch)
        setFaculty(item.faculty)
        setDepartment(item.department)
        setCampus(item.campus)
        setCGPA(item.CGPA)

    }

    function updateStudent() {
        let updateItems = {
            id,
            StudentName,
            student_id,
            email,
            fathername,
            mothername,
            birthday,
            presentaddress,
            parmanentaddress,
            gender,
            batch,
            faculty,
            department,
            campus,
            CGPA
        }
        console.log(updateItems);
        fetch(`http://127.0.0.1:8000/api/editstudent/${id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItems)
        }).then((result) => {
            toast.success("Student's Information has been updated successfully!😃", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            result.json().then((resp) => {
                console.warn(resp)
                getStudent(updateItems);
            })
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

                                <div className="card ">
                                    <div className="card-body ">
                                        <h5 className="card-title">Student List</h5>
                                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                                            <div className="table-wrapper">
                                                <table className="table table-hover table-striped mb-0">
                                                    <thead className="table-header">
                                                        <tr>
                                                            <th scope="col">ID</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Email</th>
                                                            <th scope="col">Department</th>
                                                           
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            loading ? data.map((item) =>
                                                                <tr>
                                                                    <th className="first-col">{item.student_id}</th>
                                                                    <td id="student_data">{item.StudentName}</td>
                                                                    <td id="student_data">{item.email}</td>
                                                                   
                                                                    <td id="student_data">{item.department}</td>
                                                                    <td id="student_data"><p id="StudentTypeR">Regular</p> </td>
                                                                    <td id="icon">
                                                                        <button onClick={() => selectStudent(item.id)} type="button" data-bs-toggle="modal" data-bs-target="#studentView">
                                                                            <i class="far fa-eye" id="bars"></i>
                                                                        </button>

                                                                        <button onClick={() => selectStudent(item.id)} type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                                            <i className="fas fa-edit" id="edit"></i>
                                                                        </button>


                                                                    </td>
                                                                </tr>
                                                            ) : <div className="bar_loder">
                                                                <Bars margin="200px" color="#228B22" height={80} width={1000} />
                                                            </div>
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Model edit student */}
                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel">Edit Student Info</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form className="row g-3">
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Name</label>
                                                        <input type="text" value={StudentName} onChange={(event) => setStudentName(event.target.value)} className="form-control" id="inputEmail4" />
                                                        <div id="emailHelp" class="form-text">Edit student name here.</div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Student id</label>
                                                        <input type="text" value={student_id} onChange={(event) => setStudent_id(event.target.value)} className="form-control" id="inputEmail4" />
                                                        <div id="emailHelp" class="form-text">Edit student ID here.</div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Email</label>
                                                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" id="inputEmail4" />
                                                        <div id="emailHelp" class="form-text">Edit student email here.</div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Father Name</label>
                                                        <input type="text" value={fathername} onChange={(event) => setFathername(event.target.value)} className="form-control" id="inputEmail4" />
                                                        <div id="emailHelp" class="form-text">Edit student father's name here.</div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Mother Name</label>
                                                        <input type="text" value={mothername} onChange={(event) => setMothername(event.target.value)} className="form-control" id="inputEmail4" />
                                                        <div id="emailHelp" class="form-text">Edit student mother's name here.</div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputEmail4" className="form-label">Birth Date</label>
                                                        <input type="text" value={birthday} onChange={(event) => setBirthday(event.target.value)} className="form-control" id="inputEmail4" />
                                                        <div id="emailHelp" class="form-text">Edit student's birth date here.</div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label for="inputAddress" className="form-label">Present Address</label>
                                                        <input type="text" value={presentaddress} onChange={(event) => setPresentaddress(event.target.value)} className="form-control" id="inputAddress11" placeholder="1234 Main St" />
                                                        <div id="emailHelp" class="form-text">Edit student's present address here.</div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label for="inputAddress2" className="form-label">Parmanent Address</label>
                                                        <input type="text" value={parmanentaddress} onChange={(event) => setParmanentaddress(event.target.value)} className="form-control" id="inputAddress11" placeholder="Apartment, studio, or floor" />
                                                        <div id="emailHelp" class="form-text">Edit student's parmanent address here.</div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputCity" className="form-label">Gender</label>
                                                        <input type="text" value={gender} onChange={(event) => setGender(event.target.value)} className="form-control" id="Gender" />
                                                        <div id="emailHelp" class="form-text">Edit student's gender here.</div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputCity" className="form-label">Batch</label>
                                                        <input type="text" value={batch} onChange={(event) => setBatch(event.target.value)} className="form-control" id="Batch" />
                                                        <div id="emailHelp" class="form-text">Edit student's Batch here.</div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="inputState" className="form-label">Select Faculty</label>
                                                        <select className="form-select" value={faculty} onChange={(event) => setFaculty(event.target.value)}>
                                                            <option selected value="">Choose...</option>
                                                            <option value="Faculty of Science and Information Technology">Faculty of Science and Information Technology</option>
                                                            <option value="Faculty of Business & Entrepreneurship">Faculty of Business & Entrepreneurship</option>
                                                            <option value="Faculty of Engineering">Faculty of Engineering</option>
                                                            <option value="Faculty of Humanities & Social Science">Faculty of Humanities & Social Science</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="inputState" className="form-label">Select Faculty</label>
                                                        <select className="form-select" value={department} onChange={(event) => setDepartment(event.target.value)}>
                                                            <option selected value="">Choose...</option>
                                                            <option value="CSE">CSE</option>
                                                            <option value="CIS">CIS</option>
                                                            <option value="BBA">BBA</option>
                                                            <option value="EEE">EEE</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label for="inputState" className="form-label">Select Campus</label>
                                                        <select className="form-select" value={campus} onChange={(event) => setCampus(event.target.value)}>
                                                            <option selected>Choose...</option>
                                                            <option value="CITY">CITY</option>
                                                            <option value="PARMANENT">PARMANENT</option>
                                                        </select>
                                                    </div>
                                                    {/* <div className="col-md-4">
                                                        <label for="inputState" className="form-label">Faculty</label>
                                                        <input type="text" value={faculty} onChange={(event) => setFaculty(event.target.value)} className="form-control" id="Batch" />
                                                        <div id="emailHelp" class="form-text">Edit student's Faculty here.</div>
                                                    </div> */}
                                                    {/* <div className="col-md-4">
                                                        <label for="inputState" className="form-label">Department</label>
                                                        <input type="text" value={department} onChange={(event) => setDepartment(event.target.value)} className="form-control" id="Batch" />
                                                        <div id="emailHelp" class="form-text">Edit student's Department here.</div>
                                                    </div> */}
                                                    {/* <div className="col-md-4">
                                                        <label for="inputState" className="form-label">Campus</label>
                                                        <input type="text" value={campus} onChange={(event) => setCampus(event.target.value)} className="form-control" id="Batch" />
                                                        <div id="emailHelp" class="form-text">Edit student's Campus here.</div>
                                                    </div> */}
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button id="student_info_update_btn" type="button" data-bs-dismiss="modal" className="btn" onClick={updateStudent}>Update</button>
                                                <ToastContainer
                                                    position="top-right"
                                                    autoClose={5000}
                                                    hideProgressBar={false}
                                                    newestOnTop={false}
                                                    closeOnClick
                                                    rtl={false}
                                                    pauseOnFocusLoss
                                                    draggable
                                                    pauseOnHover
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Model view student */}
                                <div className="modal fade" id="studentView" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="studentViewLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="studentViewLabel">Student Info</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-8">
                                                            <table id="student_profile_table">
                                                                <tbody>
                                                                    <tr id="student_profile_table_row">
                                                                        <th id="student_personal_info">ID:</th>
                                                                        <th>{student_id}</th>
                                                                    </tr>
                                                                    <tr id="student_profile_table_row">
                                                                        <th>Name: </th>
                                                                        <td>{StudentName}</td>
                                                                    </tr>
                                                                    <tr id="student_profile_table_row">
                                                                        <th>Email: </th>
                                                                        <td>{email}</td>

                                                                    </tr>
                                                                    <tr id="student_profile_table_row">
                                                                        <th>Status: </th>
                                                                        <td id="student_profile_status">Regular</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="col-md-4" id="student_profile_pic">
                                                            <img id="student_img" src={ProfilePic} alt="profile" srcset="" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12" id="student_profile_info">
                                                            <h4>Personal info</h4>
                                                            <table id="student_profile_table">
                                                                <tbody>
                                                                    <tr id="student_profile_table_row2">
                                                                        <td id="student_personal_info1">Father's Name:</td>
                                                                        <td>{fathername}</td>
                                                                    </tr>
                                                                    <tr id="student_profile_table_row2">
                                                                        <td>Mother's Name: </td>
                                                                        <td> {mothername}</td>
                                                                    </tr>
                                                                    <tr id="student_profile_table_row2">
                                                                        <td>Birthday: </td>
                                                                        <td>{birthday}</td>

                                                                    </tr>
                                                                    <tr id="student_profile_table_row2">
                                                                        <td>Present Address: </td>
                                                                        <td>{presentaddress}</td>
                                                                    </tr>
                                                                    <tr id="student_profile_table_row2">
                                                                        <td>Parmanent Address: </td>
                                                                        <td>{parmanentaddress}</td>
                                                                    </tr>
                                                                    <tr id="student_profile_table_row2">
                                                                        <td>Gender: </td>
                                                                        <td>{gender}</td>
                                                                    </tr>
                                                                    <tr id="student_profile_table_row2">
                                                                        <td>Batch: </td>
                                                                        <td>{batch}</td>
                                                                    </tr>
                                                                    <tr id="student_profile_table_row2">
                                                                        <td>Faculty: </td>
                                                                        <td>{faculty}</td>
                                                                    </tr>
                                                                    <tr id="student_profile_table_row2">
                                                                        <td>Department: </td>
                                                                        <td>{department}</td>
                                                                    </tr>
                                                                    <tr id="student_profile_table_row2">
                                                                        <td>Campus: </td>
                                                                        <td>{campus}</td>
                                                                    </tr>
                                                                    <tr id="student_profile_table_row2">
                                                                        <td>CGPA: </td>
                                                                        <td>{CGPA}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
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
            </div >
            <Footer />
        </div >
    )
}

export default StudentList
