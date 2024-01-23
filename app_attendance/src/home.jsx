import React from 'react'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'


function home() {
  return (
    <body>
    <div className='container-fluid'>
        <div className='row'>
            <div className='bg-dark col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column'>
                <div>
                    <a className='text-decoration-none text-white d-flex align-itemcenter ms-3 mt-2'>
                        <span className='ms-1 fs-4'>Hello User</span>
                    </a>
                    <hr className='text-secondary' />
                    <ul class="nav nav-pills flex-column">
                        <li class="nav-item text-white fs-4 my-2 mt-4">
                            <a href="#" class="nav-link active text-white fs-5" aria-current="page">
                                <i className='bi bi-book'>
                                </i>
                                <span className='ms-2'>Classroom</span>
                            </a>
                        </li>
                        <li class="nav-item text-white fs-4 my-2">
                            <a href="/attendance" class="nav-link text-white fs-5" aria-current="page">
                                <i className='bi bi-clipboard2-check-fill'>
                                </i>
                                <span className='ms-2'>Attendance</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                <a href="/"><button type="button" class="btn btn-outline-danger btn-lg ms-3 mb-4"> Logout</button></a>
                    </div>
                </div>
            </div>
        </div>

        <div className='position-absolute mx-auto mt-4 p-2 top-0 end-0'>
            <button type="button"className='btn btn-outline-success fs-5'>
                Add new Classroom
            </button>
        </div>


        <div className='position-absolute top-0 start-50'>
        <div class="card" style={{width:'14rem'}}>
        <div class="card-header">Subject</div>
                <div class='card-body'>
                    <ul>Dept:</ul>
                    <ul>Semester:</ul>
                    <ul>Students:</ul>  
                </div>
        </div>

        <div className='position-relative'>
        <div class="card" style={{width:'14rem'}}>
        <div class="card-header"><a href="">Subject</a></div>
                <div class='card-body'>
                    <ul>Dept:</ul>
                    <ul>Semester:</ul>
                    <ul>Students:</ul>  
                </div>
        </div>
        </div>
</div>


    </body>
  )
  
}
export default home;
