import React from 'react'

export default function Profile() {
  return (
    <div class="main-wrapper">
        <div class="header">
            <div class="header-left">
                <a href="" class="logo">
                    <img src="assets/img/logo.png" width="35" height="35" alt=""/> <span>St. Jude India</span>
                </a>
            </div>
            <a id="toggle_btn" href=""><i class="fa fa-bars"></i></a>
            <a id="mobile_btn" class="mobile_btn float-left" href="#sidebar"><i class="fa fa-bars"></i></a>
            <ul class="nav user-menu float-right">
                <li class="nav-item dropdown has-arrow">
                    <a href="" class="dropdown-toggle nav-link user-link" data-toggle="dropdown">
                        <span class="user-img">
							<img class="rounded-circle" src="../../public/assets/img/user.jpg" width="24" alt="Admin"/>
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
                    <a class="dropdown-item " href="">My Profile</a>
                    <a class="dropdown-item " href="">Logout</a>
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
                            <a href="#"><i class="fa fa-bar-chart "></i> <span>Stastics & Visualisation</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="page-wrapper">
            <div class="content">
                <div class="row">
                    <div class="col-sm-7 col-6">
                        <h4 class="page-title">My Profile</h4>
                    </div>


                </div>
                <div class="card-box profile-header">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="profile-view">
                                <div class="profile-img-wrap">
                                    <div class="profile-img">
                                        <a href="#"><img class="avatar" src="../../public/assets/img/user.jpg" alt=""/></a>
                                    </div>
                                </div>
                                <div class="profile-basic">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="profile-info-left">
                                                <h3 class="user-name m-t-0 mb-0">Viren Keswani</h3>
                                                <div class="staff-id">Employee ID : 1</div>
                                                <div class="staff-msg"><a class="btn btn-primary">VOLUNTEER</a></div>
                                            </div>
                                        </div>
                                        <div class="col-md-7">
                                            <ul class="personal-info">
                                                <li>
                                                    <span class="title">Phone:</span>
                                                    <span class="text"><a href="#">1234567890</a></span>
                                                </li>
                                                <li>
                                                    <span class="title">Email:</span>
                                                    <span class="text"><a href="#">virenk@stjude.in</a></span>
                                                </li>

                                                <li>
                                                    <span class="title">Center : </span>
                                                    <span class="text">Cotton Green</span>
                                                </li>
                                                <li>
                                                    <span class="title">City : </span>
                                                    <span class="text">Mumbai</span>
                                                </li>
                                                <li>
                                                    <span class="title">Gender:</span>
                                                    <span class="text">M</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );

}