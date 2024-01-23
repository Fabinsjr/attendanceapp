import React from 'react'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'

function class_attend(){
return(
        <div>
            <div class="bg-primary text-white" style={{height:"6rem"}}>
            <a href="./attendance">
            <img src={'./src/assets/back.svg'} alt="back"/></a>
            <h2 className='position-absolute mx-auto mt-4 p-2 top-0 start-50'>Subject</h2>
            </div>

            <div className='position-absolute start-20 bg-secondary' style={{height:"8rem",width:"100rem"}}>
                    <ul>Dept:</ul>
                    <ul>Semester:</ul>
                    <ul>Students:</ul>  
            </div>

            <div>
            <table class="table table-dark table-hover" className='position-relative mt-4 start-50'>
                <thead>
                <tr>
                    <th className='p-2'>Name</th>
                    <th className='p-2'>Roll No.</th>
                    <th className='p-2'>P</th>
                    <th className='p-2'>A</th>
                </tr>
                </thead>
                <tbody></tbody>
                
            </table>
            </div>
        </div>









)
}
export default class_attend;