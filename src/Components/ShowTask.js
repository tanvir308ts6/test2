import React from 'react'

function ShowTask(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <h6>{props.task}</h6>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-primary">X</button>
                </div>
            </div>
        </div>
    )
}

export default ShowTask
