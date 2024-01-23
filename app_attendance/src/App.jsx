import { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./home";
import Login from "./login";
import Attendance from "./attendance";
import Classroom  from "./class_attendance";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='home' element={<Home/>}></Route>
      <Route path='attendance' element={<Attendance/>}></Route>
      <Route path='class_attendance' element={<Classroom/>}></Route>
    </Routes>
    </BrowserRouter>
     
  )
}

export default App;
