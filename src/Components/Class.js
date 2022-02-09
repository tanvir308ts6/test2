import React  from 'react'
import AdminSidebar from './AdminSidebar'
import ClassSchedule from './ClassSchedule'
import Footer from './Footer'
import Nav from './Nav'

function Class() {
   

    return (
        <div>
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-10">
                        <div className="row" id="ClassScheduleRow">
                            <div className="col-md-12">
                                <ClassSchedule />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Class
