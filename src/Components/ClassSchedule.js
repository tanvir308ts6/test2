import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Bars } from 'react-loader-spinner';
import '../stylesheets/ClassSchedule.css';

function ClassSchedule() {
    const [data, setData] = useState([]);

    const [batch, setBatch] = useState("CIS 1");

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getClass()
    }, [])
    function getClass() {
        fetch(`http://127.0.0.1:8000/api/searchClass/CIS 1`).then((result) => {

            result.json().then((resp) => {
                console.warn("result", resp)
                setData(resp)
                setLoading(true)

            })
        })

    }

    const searchClass = () => {
        axios.get(`http://127.0.0.1:8000/api/searchClass/` + batch)
            .then((response) => {
                setData(response.data);

            });


    }

    return (
        <div class="card">
            <div class="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <h5 class="card-title" id="classSeduilHeading" >Class Schedule of {batch}</h5>
                    </div>
                    <div className="col-md-6">
                        <form className="d-flex"  id="inputState">
                            <input className="form-control me-2" value={batch} onChange={(event) => setBatch(event.target.value)}  id="inputStateSearch" type="search" placeholder="Search" />
                            <button className="btn btn-outline-success" onClick={searchClass} id="batchSearchBtn" type="button"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr className="bg-light-gray">
                                <th className="text-uppercase">Time</th>
                                <th className="text-uppercase">Saturday</th>
                                <th className="text-uppercase">Sunday</th>
                                <th className="text-uppercase">Monday</th>
                                <th className="text-uppercase">Tuesday</th>
                                <th className="text-uppercase">Wednesday</th>
                                <th className="text-uppercase">Thursday</th>
                                <th className="text-uppercase">Friday</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ? data.map((item) =>
                                    <tr>
                                        <th className="font-size18 text-dark">{item.time}</th>
                                        <td>
                                            <span
                                                className="
                                                padding-5px-tb padding-15px-lr
                                                border-radius-5
                                                margin-10px-bottom
                                                font-size16
                                                xs-font-size13
                                             "
                                                id="saturday"

                                            >
                                                {item.saturday}
                                            </span
                                            >
                                            <div className="font-size13 text-dark"></div>
                                        </td>
                                        <td>
                                            <span
                                                className="
                                                 padding-5px-tb padding-15px-lr
                                                 border-radius-5
                                                 margin-10px-bottom
                                                 font-size16
                                                 xs-font-size13
                                             "
                                                id="sunday"
                                            >{item.sunday}</span
                                            >
                                            <div className="font-size13 text-dark"></div>
                                        </td>
                                        <td>
                                            <span
                                                className="
                                                padding-5px-tb padding-15px-lr
                                                border-radius-5
                                                margin-10px-bottom
                                                font-size16
                                                xs-font-size13
                                             "
                                                id="monday"
                                            >{item.monday}</span
                                            >
                                            <div className="font-size13 text-dark"></div>
                                        </td>
                                        <td>
                                            <span
                                                className="
                                                padding-5px-tb padding-15px-lr
                                                border-radius-5
                                                margin-10px-bottom
                                                font-size16
                                                xs-font-size13
                                             "
                                                id="tuesday"

                                            >{item.tuesday}</span
                                            >
                                            <div className="font-size13 text-dark"></div>
                                        </td>
                                        <td>
                                            <span
                                                className="
                                                padding-5px-tb padding-15px-lr
                                                border-radius-5
                                                margin-10px-bottom
                                                font-size16
                                                xs-font-size13
                                             "
                                                id="wednesday"
                                            >{item.wednesday}</span
                                            >
                                            <div className="font-size13 text-dark"></div>
                                        </td>
                                        <td>
                                            <span
                                                className="
                                                padding-5px-tb padding-15px-lr
                                                border-radius-5
                                                margin-10px-bottom
                                                font-size16
                                                xs-font-size13
                                             "
                                                id="thursday"
                                            >{item.thursday}</span
                                            >
                                            <div className="font-size13 text-dark"></div>
                                        </td>
                                        <td>
                                            <span
                                                className="
                                                padding-5px-tb padding-15px-lr
                                                border-radius-5
                                                margin-10px-bottom
                                                font-size16
                                                xs-font-size13
                                             "
                                                id="friday"
                                            >{item.friday}</span
                                            >
                                            <div className="font-size13 text-dark"></div>
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
    )
}

export default ClassSchedule
