import React from 'react'
import '../stylesheets/StudentContaint.css'
import ClassSchedule from './ClassSchedule'



function StudentContaint() {
    return (

        <div>
            <div className="row" id="StudentDashbordCard">
                <h1 id="StudentDashbordCardHeader">Payment Info:</h1>
                <div className="col-md-3">
                    <div className="card" id="StudentDashbordCard1">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <i className="fas fa-money-bill-alt"></i>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="card-title">Payable</h5>
                                    <h4 className="card-title">5100/=</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" id="StudentDashbordCard2">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <i class="fas fa-credit-card"></i>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="card-title">Total Paid</h5>
                                    <h4 className="card-title">3000/=</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" id="StudentDashbordCard3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <i class="fas fa-file-invoice"></i>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="card-title">Total DUE</h5>
                                    <h4 className="card-title">2100/=</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" id="StudentDashbordCard4">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <i class="fas fa-exclamation-circle"></i>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="card-title">Total Fines</h5>
                                    <h4 className="card-title">100/=</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" id="StudentDashbordRow2">
                <div className="col-md-8" id="StudentDashbordBarchartcall">
                    <h1 id="StudentDashbordCardHeader">Your Result</h1>
                    <div className="card" id="StudentDashbordBarchart">
                        <div className="card-body">
                            <table id="bar-graph">
                                <tbody>
                                    <tr id="section-1">
                                        <th scope="row">1st Semester</th>
                                        <td className="before bar"><p>3.75</p></td>
                                        <td className="after bar"><p>2.00</p></td>
                                    </tr>
                                    <tr id="section-2">
                                        <th scope="row">2nd Semester</th>
                                        <td className="before bar"><p>3.50</p></td>
                                        <td className="after bar"><p>2.25</p></td>
                                    </tr>
                                    <tr id="section-3">
                                        <th scope="row">3rd Semester</th>
                                        <td className="before bar"><p>3.85</p></td>
                                        <td className="after bar"><p>2.75</p></td>
                                    </tr>
                                    <tr id="section-4">
                                        <th scope="row">4th Semester</th>
                                        <td className="before bar"><p>3.75</p></td>
                                        <td className="after bar"><p>3.25</p></td>
                                    </tr>
                                    <tr id="section-5">
                                        <th scope="row">5th Semester</th>
                                        <td className="before bar"><p>4.00</p></td>
                                        <td className="after bar"><p>2.75</p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" id="NoticeBordColl">
                    <h1 id="StudentDashbordCardHeader">New Notice</h1>
                    <div className="card" id="NoticeBordContent">
                        <div className="card-body">
                            <div className="card" id="NoticeBordCard">
                                <div className="card-body" id="NoticeBordCardBody">
                                    <p id="NoticeBody"><b>Exam Date</b><br />paid meaning in bengali: দেওয়া | Learn detailed.. <a href='/'>read more</a></p>
                                </div>
                            </div>
                            <div className="card" id="NoticeBordCard">
                                <div className="card-body" id="NoticeBordCardBody">
                                    <p id="NoticeBody"><b>Exam Date</b><br />paid meaning in bengali: দেওয়া | Learn detailed.. <a href='/'>read more</a></p>
                                </div>
                            </div>
                            <div className="card" id="NoticeBordCard">
                                <div className="card-body" id="NoticeBordCardBody">
                                    <p id="NoticeBody"><b>Exam Date</b><br />paid meaning in bengali: দেওয়া | Learn detailed.. <a href='/'>read more</a></p>
                                </div>
                            </div>
                            <div className="card" id="NoticeBordCard">
                                <div className="card-body" id="NoticeBordCardBody">
                                    <p id="NoticeBody"><b>Exam Date</b><br />paid meaning in bengali: দেওয়া | Learn detailed.. <a href='/'>read more</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row" id="class_schedule_row">
                <div className="col-md-12">
                    <ClassSchedule />
                </div>
            </div>
        </div>

    )
}

export default StudentContaint
