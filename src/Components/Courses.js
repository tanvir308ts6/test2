import React, { useEffect, useState } from 'react'
import { Bars } from 'react-loader-spinner';
import AdminSidebar from './AdminSidebar'
import Footer from './Footer'
import Nav from './Nav'
function Courses() {
    const [data, setData] = useState("");
    const [course_code, setCourse_code] = useState("");
    const [name, setName] = useState("");
    const [course_credit, setCourse_credit] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getcourse()
    }, [])
    function getcourse() {
        fetch(`http://127.0.0.1:8000/api/Course`).then((result) => {

            result.json().then((resp) => {
                console.warn("result", resp)
                setData(resp)
                setLoading(true)

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
                            <div className="row" id="cardRow1">
                                    <div className="col-md-12">
                                        <div className="card" id="classSeduilManagerCard">
                                            <div className="card-body">
                                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                                    <div className="accordion-item" id="classSeduilManager">
                                                        <h2 className="accordion-header" id="flush-headingOne">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                <h6 id="class_management">Manage Courses</h6>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                            <div className="accordion-body">
                                                                <form className="row g-3">
                                                                    <div className="col-md-6">
                                                                        <label for="inputEmail4" className="form-label">Course Code</label>
                                                                        <input type="text" className="form-control" id="inputEmail4" />
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="inputEmail4" className="form-label">Course Name</label>
                                                                        <input type="email" className="form-control" id="inputEmail4" />
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label for="inputEmail4" className="form-label">Course Credit</label>
                                                                        <input type="email" className="form-control" id="inputEmail4" />
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <button type="button" className="btn btn-primary">Create Class</button>
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
                                <div class="card">
                                    <div class="card-body">

                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Course Code</th>
                                                    <th scope="col">Course Name</th>
                                                    <th scope="col">Course Credit</th>
                                                    <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    loading ? data.map((item) =>
                                                        <tr>
                                                            <th scope="row">{item.course_code}</th>
                                                            <td>{item.name}</td>
                                                            <td>{item.course_credit}</td>
                                                            <td id="icon">
                                                                <button type="button" data-bs-toggle="modal" data-bs-target="#studentView">
                                                                    <i class="far fa-eye" id="bars"></i>
                                                                </button>

                                                                <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Courses