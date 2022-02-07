import React, { useState, useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import '../stylesheets/AdminNotice.css'

function AdminNotice() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/notice").then((result) => {

            result.json().then((resp) => {
                // console.warn("result",resp)
                setData(resp);
                setLoading(true);
            })
        })
    }, []);
    return (
        <div>
            <div className="row" id="row3">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th id="table_head" scope="col">Date</th>
                                        <th id="table_head" scope="col">Notice</th>
                                        <th scope="col">Notice Ditels</th>
                                        <th scope="col">PDF</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        loading ? data.map((item) =>
                                            <tr id="notice_table_row">
                                                <th scope="row" id="notice_table_col1">{item.date}</th>
                                                <td id="notice_table_col2"> <button className="btn">{item.head}</button></td>
                                                <td id="notice_table_col3">{item.notice}</td>
                                                <td id="notice_table_col4"><a href={item.link} target="_blank" rel="noopener noreferrer"><i class="fas fa-file-pdf"></i></a></td>
                                            </tr>
                                        ) : <div className="bar_loder">
                                                <Bars margin="200px" color="#228B22" height={80} width={1000}/>
                                            </div>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminNotice;
