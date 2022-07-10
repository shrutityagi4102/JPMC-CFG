import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Home from "./pages/Home.js";
import Landing from "./pages/Landing.js";
import Dashboard from './pages/Dashboard.js';
// import QRgen from './pages/QRgenerator'
import QRscan from './pages/QRscanner'
import Profile from './pages/Profile.js'
import RegisterPatient from "./pages/RegisterPatient"
import Invent from "./pages/Invent"
import Patient from "./pages/Patient"
// import AddItem from './pages/AddItem.js';
import Charttrial from './pages/Chart.js';
import Visualcharts from './pages/Visualisation.js';


export default function Routing() {
  return (
    <div>
        <BrowserRouter>
      <Routes>
        <Route  exact path="/home" element={<Home/>} />
        <Route  exact path="/login" element={<Login/>} />
        <Route  exact path="/sign-up" element={<Signup/>} />
        {/* {localStorage.getItem('token')!=undefined? */}        
        <Route exact path="/qr-scan" element={<QRscan/>}
        />
        {/* // :null} */}
        {localStorage.getItem('token')!=undefined?<Route exact path = "/" element = {<Dashboard/>} />:null}
        {localStorage.getItem('token')==undefined?<Route  exact path="/" element={<Landing/>} />:null}
        <Route exact path = "/profile" element = {<Profile/>}/>
        <Route exact path = "/patient-register" element = {<RegisterPatient/>}/>
        <Route exact path = "/invent" element={<Invent/>}/>
        <Route exact path = "/patient/:id" element={<Patient/>}/>
        <Route exact path = "/chart" element={<Charttrial/>}/>
        <Route exact path = "/visual" element={<Visualcharts/>}/>
        
      </Routes>
  </BrowserRouter>
  </div>
  )
}
