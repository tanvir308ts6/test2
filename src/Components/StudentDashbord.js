import React from 'react'
import '../stylesheets/StudentDashbord.css'
import Nav from './Nav';
import SaidbarStudent from './SaidbarStudent'
import StudentContaint from './StudentContaint'
import Footer from './Footer';




function StudentDashbord() {
    return (
        <div ClassName="StudentDashbord" id="StudentDashbord">
            <Nav />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-2'>
                        <SaidbarStudent />
                    </div>
                    <div className='col-md-10'>
                        <StudentContaint />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default StudentDashbord
