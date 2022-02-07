import React from 'react';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';
import Nav from './Nav';

function AddTeacher() {
  return (
    <div>
    <Nav />
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-2">
                <AdminSidebar/>
            </div>
            <div className="col-md-10">
                
            </div>
        </div>
    </div>
    <Footer/>
</div>
  )
}

export default AddTeacher;
