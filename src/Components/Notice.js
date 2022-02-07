
import React, { useState, useEffect } from 'react'
import AdminSidebar from './AdminSidebar'
import Footer from './Footer'
import Nav from './Nav'
import '../stylesheets/Notice.css'
import { toast, ToastContainer } from 'react-toastify'
import AdminNotice from './AdminNotice'
// import { Link } from 'react-router-dom'

function Notice() {
    const [data, setData] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    const [head, setHead] = useState("");
    const [notice, setNotice] = useState("");
    const [date, setDate] = useState("");
    const [link, setLink] = useState("");
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/notice").then((result) => {

            result.json().then((resp) => {
                // console.warn("result",resp)
                setData(resp)
            })
        })
    }, []);

    console.warn(data)
    function saveNotice() {
        let data = { head, notice, date, link }
        fetch("http://127.0.0.1:8000/api/addnotice",
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
                        <div className="row" id="row3">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1 id="notice_list">Notice List</h1>
                                    </div>
                                    <div className="col-md-6" id="add_button_section">
                                        <button id="add_notice_btn" className="btn" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            <i class="fas fa-flag-checkered"></i> Add Notice
                                        </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <AdminNotice/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* add notice modal */}
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Add New Notice</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form className="row g-3">
                                        <div className="col-md-6">
                                            <label for="inputEmail4" className="form-label">Notice Heading</label>
                                            <input type="text" value={head} onChange={(event) => setHead(event.target.value)} className="form-control" id="inputEmail4" />
                                            <div id="emailHelp" class="form-text">Write notice headline here</div>
                                        </div>
                                        <div className="col-md-6">
                                            <label for="inputEmail4" className="form-label">Today's Date</label>
                                            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} className="form-control" id="inputEmail4" />
                                            <div id="emailHelp" class="form-text">Input date here.</div>
                                        </div>
                                        <div className="col-md-6">
                                            <label for="inputEmail4" className="form-label">Document Link</label>
                                            <input type="link" value={link} onChange={(event) => setLink(event.target.value)} className="form-control" id="inputEmail4" />
                                            <div id="emailHelp" class="form-text">Document link here.</div>
                                        </div>
                                        <div className="col-md-12">
                                            <label for="inputEmail4" className="form-label">Notice Short Description</label>
                                            <textarea class="form-control" value={notice} onChange={(event) => setNotice(event.target.value)} placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button id="student_info_update_btn" type="button" className="btn" onClick={saveNotice}>Update</button>
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Notice
