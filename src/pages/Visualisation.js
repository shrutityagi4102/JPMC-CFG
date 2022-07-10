import React from 'react'
import { VictoryPie } from "victory-pie";
import LineChart from '../pages/Chart.js';

const myData = [
    { x: "oil", y: 500 },
    { x: "wheat", y: 400 },
    { x: "rice", y: 300 },
    
    
  ];
function Visualisation() {
  return (
    <div className="main-wrapper">
        <div className="header">
            <div className="header-left">
                <a href="index.html" className="logo">
                    <img src="logo.png" width="35" height="35" alt="" /> <span>St. Jude India</span>
                </a>
            </div>
            <a id="toggle_btn" href="index.html"><i className="fa fa-bars"></i></a>
            <a id="mobile_btn" className="mobile_btn float-left" href="index.html"><i className="fa fa-bars"></i></a>
            <ul className="nav user-menu float-right">
                <li className="nav-item dropdown has-arrow">
                    <a href="index.html" className="dropdown-toggle nav-link user-link" data-toggle="dropdown">
                        <span className="user-img">
							<img className="rounded-circle" src="assets/img/user.jpg" width="24" alt="Admin" />
							<span className="status online"></span>
                        </span>
                        <span>Staff</span>
                    </a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="index.html">My Profile</a>
                        <a className="dropdown-item" href="index.html">Logout</a>
                    </div>
                </li>
            </ul>
            <div className=" dropdown mobile-user-menu float-right ">
                <a href="index.html " className="dropdown-toggle " data-toggle="dropdown " ariaExpanded="false "><i className="fa fa-ellipsis-v "></i></a>
                <div className="dropdown-menu dropdown-menu-right ">
                    <a className="dropdown-item " href="index.html">My Profile</a>
                    <a className="dropdown-item " href="index.html">Logout</a>
                </div>
            </div>
        </div>
        <div>
        <LineChart/>
        <div style={{height : "1000px"}}>
            <VictoryPie
            data={myData}
            colorScale={["blue", "yellow", "red", "green", "orange", "purple", "brown", "grey"]}
            radius={100}
            />   
        </div> 

      </div>
        <div className="sidebar " id="sidebar ">
            <div className="sidebar-inner slimscroll ">
                <div id="sidebar-menu " className="sidebar-menu ">
                    <ul>
                        <li className="menu-title "> Main Menu</li>
                        <li >
                            <a href="/"><i className="fa fa-dashboard "></i> <span>Dashboard</span></a>
                        </li>
                        <li>
                            <a href="/patient-register"><i className="fa fa-user-md "></i> <span>Patient Registration</span></a>
                        </li>
                        <li>
                            <a href="index.html"><i className="fa fa-archive "></i> <span>Inventory Management</span></a>
                        </li>
                        <li>
                            <a href="index.html"><i className="fa fa-cutlery"></i> <span>Ration Allocation</span></a>
                        </li>
                        <li>
                            <a href="index.html"><i className="fa fa-users"></i> <span>Families Associated</span></a>
                        </li>
                        <li className="active ">
                            <a href="/visual"><i className="fa fa-bar-chart "></i> <span>Stastics & Visualisation</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     </div>
  );
}

export default Visualisation