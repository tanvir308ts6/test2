import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import ClassSchedule from './ClassSchedule';
import Footer from './Footer';
import Nav from './Nav';
import '../stylesheets/AdminClassAndRoom.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminClassAndRoom() {
    const [time, setTime] = useState("");
    const [saturday, setSaturday] = useState("");
    const [sunday, setSunday] = useState("");
    const [monday, setMonday] = useState("");
    const [tuesday, setTuesday] = useState("");
    const [wednesday, setWednesday] = useState("");
    const [thursday, setThursday] = useState("");
    const [friday, setFriday] = useState("");
    const [batch, setBatch] = useState("");
    function saveClass() {
        let classe = {
            time,
            saturday,
            sunday,
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            batch
        }
        fetch("http://127.0.0.1:8000/api/AddClass",
            {
                method: "POST",
                mode: 'cors',
                headers:
                {
                    'Accept': 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classe)
            }).then((result) => {
                // if (!('errors' in result)) 
                toast.success('Notice has been added!😃', {
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
                                                                        <label for="inputState" className="form-label">Select Batch</label>
                                                                        <select id="inputState" className="form-select"  value={batch} onChange={(event) => setBatch(event.target.value)}>
                                                                            <option selected>Choose...</option>
                                                                            <option value="CIS 1">CIS 1</option>
                                                                            <option value="CIS 2">CIS 2</option>
                                                                            <option value="CIS 3">CIS 3</option>
                                                                            <option value="CIS 4">CIS 4</option>
                                                                            <option value="CIS 5">CIS 5</option>
                                                                            <option value="CIS 6">CIS 6</option>
                                                                            <option value="CIS 7">CIS 7</option>
                                                                            <option value="CIS 8">CIS 8</option>
                                                                            <option value="CIS 9">CIS 9</option>
                                                                            <option value="CIS 10">CIS 10</option>
                                                                            <option value="CIS 11">CIS 11</option>
                                                                            <option value="CIS 12">CIS 12</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="inputEmail4" className="form-label">Class Time</label>
                                                                        <input type="text" value={time} onChange={(event) => { setTime(event.target.value) }} name={time} className="form-control" id="inputEmail4" />
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="inputEmail4" className="form-label">Saturday</label>
                                                                        <input type="email"value={saturday} onChange={(event) => { setSaturday(event.target.value) }} name={saturday} className="form-control" id="inputEmail4" />
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="inputEmail4" className="form-label">Sunday</label>
                                                                        <input type="email"value={sunday} onChange={(event) => { setSunday(event.target.value) }} name={sunday} className="form-control" id="inputEmail4" />
                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <label for="inputEmail4" className="form-label">Monday</label>
                                                                        <input type="email"value={monday} onChange={(event) => { setMonday(event.target.value) }} name={monday} className="form-control" id="inputEmail4" />
                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <label for="inputEmail4" className="form-label">Tuesday</label>
                                                                        <input type="email"value={tuesday} onChange={(event) => { setTuesday(event.target.value) }} name={tuesday} className="form-control" id="inputEmail4" />
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="inputEmail4" className="form-label">Wednesday</label>
                                                                        <input type="email"value={wednesday} onChange={(event) => { setWednesday(event.target.value) }} name={wednesday} className="form-control" id="inputEmail4" />
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="inputEmail4" className="form-label">Thursday</label>
                                                                        <input type="email"value={thursday} onChange={(event) => { setThursday(event.target.value) }} name={thursday} className="form-control" id="inputEmail4" />
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="inputEmail4" className="form-label">Friday</label>
                                                                        <input type="email"value={friday} onChange={(event) => { setFriday(event.target.value) }} name={friday} className="form-control" id="inputEmail4" />
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <button type="button" className="btn btn-primary" onClick={saveClass}>Create Class</button>
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
