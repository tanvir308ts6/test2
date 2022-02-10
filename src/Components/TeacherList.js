import React, { useEffect, useState } from 'react';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';
import Nav from './Nav';
import '../stylesheets/TeacherList.css';
import { Bars } from 'react-loader-spinner';
import teacher from '../images/teacher1.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TeacherList() {
    const [id, setId] = useState(null);
    const [data, setData] = useState([]);
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
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTeacher()
    }, [])
    function getTeacher(id) {
        fetch(`${id ? 'http://127.0.0.1:8000/api/teacher/?' + id : 'http://127.0.0.1:8000/api/teacher'}`).then((result) => {

            result.json().then((resp) => {
                // console.warn("result",resp)
                setData(resp)
                setId(resp[0].id)
                setName(resp[0].name)
                setTeacher_id(resp[0].teacher_id)
                setEmail(resp[0].email)
                setDepartment(resp[0].department)
                setDegree1(resp[0].degree1)
                setDegree2(resp[0].degree2)
                setDegree3(resp[0].degree3)
                setPhone(resp[0].phone)
                setPost(resp[0].post)
                setFaculty(resp[0].faculty)
                setLoading(true)
            })
        })

    }


    function selectTeacher(id) {
        console.warn(data[id - 1])
        let item = data[id - 1]
        setId(item.id)
        setName(item.name)
        setTeacher_id(item.teacher_id)
        setEmail(item.email)
        setPost(item.post)
        setDegree1(item.degree1)
        setDegree2(item.degree2)
        setDegree3(item.degree3)
        setDepartment(item.department)
        setFaculty(item.faculty)
        setPhone(item.phone)
    }



    function updateTeacher() {
        let updateItems = {
            name,
            teacher_id,
            email,
            post,
            degree1,
            degree2,
            degree3,
            department,
            faculty,
            phone
        }
        fetch(`http://127.0.0.1:8000/api/updateTeacher/${id}`, {
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
                getTeacher(updateItems);

            })
        })
    }
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
                            {/* teacher custom search panel */}
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
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <input type="number" className="form-control" placeholder="Teacher ID" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <input type="email" className="form-control" placeholder="Teacher email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row" id="studentListRow2">
                                                                <div className="col-md-6">
                                                                    <select className="form-select" aria-label="Default select example">
                                                                        <option selected>Select Faculty</option>
                                                                        <option value="1">FSIT</option>
                                                                        <option value="2">FBA</option>
                                                                        <option value="3">FHH</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <select className="form-select" aria-label="Default select example">
                                                                        <option selected>Select Department</option>
                                                                        <option value="1">CIS</option>
                                                                        <option value="2">CSE</option>
                                                                        <option value="3">EEE</option>
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
                            {/* teacher list teble */}
                            <div className="row" id="row3">
                                <div className="col-md-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Teacher List</h5>
                                            <table className="table table-striped table-hover">
                                                <thead className="table-header">
                                                    <tr>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">Teacher Name</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Designation</th>
                                                        <th scope="col">Department</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        loading ? data.map((item) =>

                                                            <tr>
                                                                <th scope="row">{item.teacher_id}</th>
                                                                <td id="student_data">{item.name}</td>
                                                                <td id="student_data">{item.email}</td>
                                                                <td id="student_data">{item.post}</td>
                                                                <td id="student_data">{item.department}</td>
                                                                <td id="icon">
                                                                    <button type="button" onClick={() => selectTeacher(item.id)} data-bs-toggle="modal" data-bs-target="#studentView">
                                                                        <i class="far fa-eye" id="bars"></i>
                                                                    </button>

                                                                    <button type="button" onClick={() => selectTeacher(item.id)} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
                            {/* Model view student */}
                            <div className="modal fade" id="studentView" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="studentViewLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="studentViewLabel">Profile of <u>{name}</u></h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-9">
                                                        <table id="student_profile_table">
                                                            <tbody>
                                                                <tr id="student_profile_table_row">
                                                                    <th id="teacher_personal_info">Teacher ID:</th>
                                                                    <th>{teacher_id}</th>
                                                                </tr>
                                                                <tr id="student_profile_table_row2">
                                                                    <td id="student_personal_info1">Designation:</td>
                                                                    <td>{post}</td>
                                                                </tr>
                                                                <tr id="student_profile_table_row2">
                                                                    <td>Department: </td>
                                                                    <td> {department}</td>
                                                                </tr>
                                                                <tr id="student_profile_table_faculty">
                                                                    <td>Faculty: </td>
                                                                    <td> {faculty}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="col-md-3" id="student_profile_pic">
                                                        <img id="student_img" src={teacher} alt="profile" srcset="" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12" id="student_profile_info">
                                                        <h4>Educational Qualifications:</h4>
                                                        <table id="student_profile_table">
                                                            <tbody>
                                                                <tr id="student_profile_table_row2">
                                                                    <div className="row">
                                                                        <div className="col-md-12" id="teacher_degree">
                                                                            <td><i class="fas fa-university"></i></td>
                                                                            <td>{degree1}</td>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-12" id="teacher_degree">
                                                                            <td><i class="fas fa-university"></i></td>
                                                                            <td>{degree2}</td>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-12" id="teacher_degree">
                                                                            <td><i class="fas fa-university"></i></td>
                                                                            <td>{degree3}</td>
                                                                        </div>
                                                                    </div>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <table id="student_profile_table">
                                                            <h4>Contact Details:</h4>
                                                            <tbody>
                                                                <tr id="teacher_profile_table_contuct_row">

                                                                    <td><i class="fas fa-envelope"></i>{email}</td>
                                                                </tr>
                                                                <tr id="teacher_profile_table_contuct_row">

                                                                    <td><i class="fas fa-phone"></i>{phone}</td>
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
                            {/* Model edit student */}
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="staticBackdropLabel">Edit Information of <u>{name}</u></h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form className="row g-3">
                                                <div className="col-md-6">
                                                    <label for="inputEmail4" className="form-label">Name</label>
                                                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} className="form-control" id="inputEmail4" />
                                                    <div id="emailHelp" class="form-text">Edit Teacher name here.</div>
                                                </div>
                                                <div className="col-md-6">
                                                    <label for="inputEmail4" className="form-label">Teacher's ID</label>
                                                    <input type="text" value={teacher_id} onChange={(event) => setTeacher_id(event.target.value)} className="form-control" id="inputEmail4" />
                                                    <div id="emailHelp" class="form-text">Edit Teacher ID here.</div>
                                                </div>
                                                <div className="col-md-6">
                                                    <label for="inputEmail4" className="form-label">Email</label>
                                                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" id="inputEmail4" />
                                                    <div id="emailHelp" class="form-text">Edit Teacher email here.</div>
                                                </div>
                                                <div className="col-md-6">
                                                    <label for="inputEmail4" className="form-label">Email</label>
                                                    <input type="email" value={phone} onChange={(event) => setPhone(event.target.value)} className="form-control" id="inputEmail4" />
                                                    <div id="emailHelp" class="form-text">Edit Teacher email here.</div>
                                                </div>
                                                <div className="col-md-6">
                                                        <label for="inputState" className="form-label">Select Faculty</label>
                                                        <select className="form-select" value={faculty}  onChange={(event) => setFaculty(event.target.value)}>
                                                            <option selected value="">Choose...</option>
                                                            <option value="Faculty of Science and Information Technology">Faculty of Science and Information Technology</option>
                                                            <option value="Faculty of Business & Entrepreneurship">Faculty of Business & Entrepreneurship</option>
                                                            <option value="Faculty of Engineering">Faculty of Engineering</option>
                                                            <option value="Faculty of Humanities & Social Science">Faculty of Humanities & Social Science</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="inputState" className="form-label">Select Department</label>
                                                        <select className="form-select" value={department}  onChange={(event) => setDepartment(event.target.value)}>
                                                            <option selected value="">Choose...</option>
                                                            <option value="CSE">CSE</option>
                                                            <option value="CIS">CIS</option>
                                                            <option value="BBA">BBA</option>
                                                            <option value="EEE">EEE</option>
                                                        </select>
                                                    </div>
                                                <div className="col-md-12">
                                                    <label for="inputState" className="form-label">Ph.D.</label>
                                                    <textarea type="text" value={degree1} onChange={(event) => setDegree1(event.target.value)} className="form-control" id="Batch" />
                                                    <div id="emailHelp" class="form-text">Edit Teacher's Department here.</div>
                                                </div>
                                                <div className="col-md-12">
                                                    <label for="inputState" className="form-label">M.Sc.</label>
                                                    <textarea type="text" value={degree2} onChange={(event) => setDegree2(event.target.value)} className="form-control" id="Batch" />
                                                    <div id="emailHelp" class="form-text">Edit Teacher's Department here.</div>
                                                </div>
                                                <div className="col-md-12">
                                                    <label for="inputState" className="form-label">B.Sc.</label>
                                                    <textarea type="text" value={degree3} onChange={(event) => setDegree3(event.target.value)} className="form-control" id="Batch" />
                                                    <div id="emailHelp" class="form-text">Edit Teacher's Department here.</div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button id="student_info_update_btn" type="button" className="btn" onClick={updateTeacher} data-bs-dismiss="modal" >Update</button>
                                        </div>
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
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default TeacherList;
