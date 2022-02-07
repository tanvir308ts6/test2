import React from 'react';
import Nav from './Nav';
import SaidbarStudent from './SaidbarStudent';
import AdminNotice from './AdminNotice';
import Footer from './Footer';
import '../stylesheets/StudentNoticeBord.css'

function StudentNoticeBord() {

    return (
        <div>
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <SaidbarStudent />
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 id="notice_list">Notice List</h1>
                            </div>
                        </div>
                        <AdminNotice />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default StudentNoticeBord;
