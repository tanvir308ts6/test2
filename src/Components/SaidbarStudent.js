import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/SaidbarStudent.css';

function SaidbarStudent() {
    return (
        <div className="row" id="Saidbar">
            <div className="col-md-12" id="SaidbarStudent">
                <ul className="list-group">
                    <Link className="list-group-item"  to="/StudentDashbord"><i class="fas fa-home"></i>Dashboard</Link>
                    <button className="list-group-item" href="/"><i class="fas fa-money-check-alt"></i>Payments</button>
                    <button className="list-group-item" href="/"><i class="fas fa-book"></i>Courses</button>
                    <button className="list-group-item" href="/"><i class="fas fa-chalkboard"></i>Class</button>
                    <button className="list-group-item" href="/"><i class="far fa-edit"></i>Exams</button>
                    <button className="list-group-item" href="/"><i class="fas fa-file-word"></i>Assignments</button>
                    <button className="list-group-item" href="/"><i class="fas fa-poll"></i>Results</button>
                    <button className="list-group-item" href="/"><i class="fab fa-adn"></i>Applications</button>
                    <button className="list-group-item" href="/"><i class="far fa-id-badge"></i>Profile</button>
                    <Link className="list-group-item" to="/StudentNoticeBord"><i class="fas fa-flag-checkered"></i>Notice Bord</Link>
                    <Link className="list-group-item" to="/"><i class="fas fa-list-ol"></i>Task List</Link>
                </ul>
            </div>
        </div>
    )
}

export default SaidbarStudent
