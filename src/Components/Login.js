import React from 'react';
import '../stylesheets/Login.css';
function login() {
    return (
        <div>

            <div className="container-fluid">
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4' id='cardCol'>
                        <div className="card" id='loginCard'>
                            <div className="card-body" id='loginCardBody'>
                                <div className="card-title" id="card-title">
                                   <p>Login</p> 
                                </div>
                                <form className="from">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Remember me</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>

        </div>
    )
}

export default login
