import React, { useEffect, useState } from 'react'
import { Bars } from 'react-loader-spinner';
import '../stylesheets/ClassSchedule.css';

function ClassSchedule() {
    const [id, setId] = useState(null);
    const [data, setData] = useState([]);
    const [time, setTime] = useState("");
    const [saturday, setSaturday] = useState("");
    const [sunday, setSunday] = useState("");
    const [monday, setMonday] = useState("");
    const [tuesday, setTuesday] = useState("");
    const [wednesday, setWednesday] = useState("");
    const [thursday, setThursday] = useState("");
    const [friday, setFriday] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getClass()
    }, [])
    function getClass() {
        fetch(`http://127.0.0.1:8000/api/classSchedule`).then((result) => {

            result.json().then((resp) => {
                // console.warn("result",resp)
                setData(resp)
                setId(resp[0].id)
                setTime(resp[0].time)
                setSaturday(resp[0].saturday)
                setSunday(resp[0].sunday)
                setMonday(resp[0].monday)
                setTuesday(resp[0].tuesday)
                setWednesday(resp[0].wednesday)
                setThursday(resp[0].thursday)
                setFriday(resp[0].friday)
                setLoading(true)

            })
        })

    }




    function selectTeacher(id) {
        console.warn(data[id - 1])
        let item = data[id - 1]
        setId(item.id)
        setTime(item.time)
        setSaturday(item.saturday)
        setSunday(item.sunday)
        setMonday(item.monday)
        setTuesday(item.tuesday)
        setWednesday(item.wednesday)
        setThursday(item.thursday)
        setFriday(item.friday)
    }

    return (
        <div class="card">
            <div class="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <h5 class="card-title" id="classSeduilHeading" >Class Schedule</h5>
                    </div>
                    <div className="col-md-6">
                        <select id="inputState" className="form-select">
                            <option selected>Choose Semester</option>
                            <option>1st Semester</option>
                            <option>2nd Semester</option>
                            <option>3rd Semester</option>
                            <option>4th Semester</option>
                        </select>
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
                                        <td className="align-middle">{item.time}</td>
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
                                            <div className="font-size13 text-light-gray">Ivana Wong</div>
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
                                            <div className="font-size13 text-light-gray">Ivana Wong</div>
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
                                            <div className="font-size13 text-light-gray">Ivana Wong</div>
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
                                            <div className="font-size13 text-light-gray">Ivana Wong</div>
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
                                            <div className="font-size13 text-light-gray">Ivana Wong</div>
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
                                            <div className="font-size13 text-light-gray">Ivana Wong</div>
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
                                            <div className="font-size13 text-light-gray">Ivana Wong</div>
                                        </td>

                                    </tr>
                                ) : <div className="bar_loder">
                                    <Bars margin="200px" color="#228B22" height={80} width={1000} />
                                </div>
                            }

                        </tbody>
                    </table>
                    {/* model class view */}
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
                                                            <th id="student_personal_info">Class Time:</th>
                                                            <th>{time}</th>
                                                        </tr>
                                                        <tr id="student_profile_table_row">
                                                            <th>Course Name </th>
                                                            <td>{sunday}</td>
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
    )
}

export default ClassSchedule
