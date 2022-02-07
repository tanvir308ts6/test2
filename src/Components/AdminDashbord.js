import React from 'react'
import "../stylesheets/AdminDashbord.css"
import AdminSidebar from './AdminSidebar'
import Footer from './Footer'
import Nav from './Nav'
import AdminDashbordContent from './AdminDashbordContent'



function AdminDashbord() {
    return (
            <div>
                <Nav />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <AdminSidebar />
                        </div>
                        <div className="col-md-10">
                            <AdminDashbordContent />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

    )
}

export default AdminDashbord
