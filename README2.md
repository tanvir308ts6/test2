<div className="accordion-item" id="drop-item">
  <h2 className="accordion-header" id="flush-headingDrop1">
      <button className="accordion-button collapsed" id="flush-heading" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseDrop1" aria-expanded="false" aria-controls="flush-collapseStudentDrop">
          <i class="fas fa-user-graduate"></i> Student
      </button>
  </h2>
  <div id="flush-collapseStudentDrop" className="accordion-collapse collapse" aria-labelledby="flush-headingDrop1" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
          <Link className="list-group-item" to="/StudentList"><i class="far fa-address-book"></i>Student List</Link>
          <Link className="list-group-item" to="/UserRoalConfig" ><i class="fas fa-user-plus"></i>Add Student</Link>
      </div>
  </div>
</div>
