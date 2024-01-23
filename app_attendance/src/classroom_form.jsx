import React from 'react'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'


function form() {
 return(

<body>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Subject Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Subject"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Department</label>
  <select class='form-select'>
    <option selected>Choose Department</option>
    <option value="1">CSE</option>
    <option value="2">IT</option>
    <option value="3">ECE</option>
  </select>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Semester</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Total Students</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
</div>
</body>
 )
}
 export default form;