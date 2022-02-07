
import React, { useState, useEffect } from 'react'
import AdminSidebar from './AdminSidebar'
import Footer from './Footer'
import Nav from './Nav'

function Notice() {
    const [data, setData] = useState([])
    // const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/notice").then((result) => {

            result.json().then((resp) => {
                // console.warn("result",resp)
                setData(resp)
            })
        })
    }, [])

    console.warn(data)
    return (
        <div>
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-10">
                        <div className="row" id="row3">
                            <div className="col-md-12">
                                {data.map((item) =>
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">{item.head}</h5>
                                            <p>{item.notice}</p>
                                            <p>Date: {item.date} </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Notice
