import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import SaidbarStudent from './SaidbarStudent'


function TeacherDashbord() {
    return (
        <div >
            <Nav />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <SaidbarStudent />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default TeacherDashbord

