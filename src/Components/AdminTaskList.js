/* eslint-disable no-undef */
import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import ShowTask from './ShowTask'
import Footer from './Footer'
import Nav from './Nav'

function AdminTaskList() {
    const [task, setTask] = useState("Add Some Task")
    const [data, setData] = useState([])
    const onChangeHandler = (event) => {
        setTask(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const newData = task;
        setData([...data, newData]);
        setTask("")
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
                        {/* add new task  */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Add New Task</h5>
                                        <form onSubmit={submitHandler}>
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <div className="mb-3">
                                                        <input type="text" className="form-control" id="InputTask" aria-describedby="emailHelp" value={task} onChange={onChangeHandler} />
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="mb-3">
                                                        <button type="submit" className="btn btn-primary">Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Task list start  */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Task List</h5>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    {
                                                        data.forEach((value, index) => {
                                                            <ShowTask
                                                                key={index}
                                                                id={index}
                                                                task={value}
                                                            />
                                                        })
                                                    }
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
            <Footer />
        </div>
    )
}

export default AdminTaskList
