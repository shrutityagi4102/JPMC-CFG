import React from 'react'

function AddInvent() {
  return (
    <div class="main-wrapper">
        <div class="header">
            <div class="header-left">
                <a href="admindash.html" class="logo">
                    <img src="assets/img/logo.png" width="35" height="35" alt=""/> <span>St. Jude India</span>
                </a>
            </div>
            <a id="toggle_btn" href="javascript:void(0);"><i class="fa fa-bars"></i></a>
            <a id="mobile_btn" class="mobile_btn float-left" href="#sidebar"><i class="fa fa-bars"></i></a>
            <ul class="nav user-menu float-right">
                <li class="nav-item dropdown has-arrow">
                    <a href="#" class="dropdown-toggle nav-link user-link" data-toggle="dropdown">
                        <span class="user-img">
							<img class="rounded-circle" src="assets/img/user.jpg" width="24" alt="Admin"/>
							<span class="status online"></span>
                        </span>
                        <span>Staff</span>
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="">My Profile</a>
                        <a class="dropdown-item" href="">Logout</a>
                    </div>
                </li>
            </ul>
            <div class=" dropdown mobile-user-menu float-right ">
                <a href="# " class="dropdown-toggle " data-toggle="dropdown " aria-expanded="false "><i class="fa fa-ellipsis-v "></i></a>
                <div class="dropdown-menu dropdown-menu-right ">
                    <a class="dropdown-item " >My Profile</a>
                    <a class="dropdown-item ">Logout</a>
                </div>
            </div>
        </div>
        <div class="sidebar " id="sidebar ">
            <div class="sidebar-inner slimscroll ">
                <div id="sidebar-menu " class="sidebar-menu ">
                    <ul>
                        <li class="menu-title "> Main Menu</li>
                        <li class="active ">
                            <a href=" "><i class="fa fa-dashboard "></i> <span>Dashboard</span></a>
                        </li>
                        <li>
                            <a href=""><i class="fa fa-user-md "></i> <span>Patient Registration</span></a>
                        </li>
                        <li>
                            <a href="# "><i class="fa fa-archive "></i> <span>Inventory Management</span></a>
                        </li>
                        <li>
                            <a href="# "><i class="fa fa-cutlery"></i> <span>Ration Allocation</span></a>
                        </li>
                        <li>
                            <a href="# "><i class="fa fa-users"></i> <span>Families Associated</span></a>
                        </li>
                        <li>
                            <a href="s# "><i class="fa fa-bar-chart "></i> <span>Stastics & Visualisation</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default AddInvent;