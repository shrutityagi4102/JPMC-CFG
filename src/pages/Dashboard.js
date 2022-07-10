import React from 'react'

import LineChart from '../pages/Chart.js';
//get data from inventory table



export default function Dashboard() {
  return (
    <div className="main-wrapper">
        <div className="header">
            <div className="header-left">
                <a href="index.html" className="logo">
                    <img src="/logo.png" width="35" height="35" alt="" /> <span>St. Jude India</span>
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
        <div className="sidebar " id="sidebar ">
            <div className="sidebar-inner slimscroll ">
                <div id="sidebar-menu " className="sidebar-menu ">
                    <ul>
                        <li className="menu-title "> Main Menu</li>
                        <li className="active ">
                            <a href="/"><i className="fa fa-dashboard "></i> <span>Dashboard</span></a>
                        </li>
                      
                        <li>
                            <a href="/qr-scan"><i className="fa fa-user-md "></i> <span>Scan QR</span></a>
                        </li>
                        <li>
                            <a href="/patient-register"><i className="fa fa-user-md "></i> <span>Patient Registration</span></a>
                        </li>
                        <li>
                            <a href="/invent"><i className="fa fa-archive "></i> <span>Inventory Management</span></a>
                        </li>
                        <li>
                            <a href="/"><i className="fa fa-cutlery"></i> <span>Ration Allocation</span></a>
                        </li>
                        <li>
                            <a href="/"><i className="fa fa-users"></i> <span>Families Associated</span></a>
                        </li>
                        <li>
                            <a href="/visual"><i className="fa fa-bar-chart "></i> <span>Stastics & Visualisation</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="page-wrapper ">
            <div className="content ">
                <div className="row ">
                    <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3 ">
                        <div className="dash-widget ">
                            <span className="dash-widget-bg1 "><i className="fa fa-users " ariaHiddenn="true "></i></span>
                            <div className="dash-widget-info text-right ">
                                <h3>1</h3>
                                <span className="widget-title1 ">Families <i className="fa fa-check " ariaHidden="true "></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3 ">
                        <div className="dash-widget ">
                            <span className="dash-widget-bg2 "><i className="fa fa-cutlery "></i></span>
                            <div className="dash-widget-info text-right ">
                                <h3>1</h3>
                                <span className="widget-title2 ">Kits <i className="fa fa-check " ariaHidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3 ">
                        <div className="dash-widget ">
                            <span className="dash-widget-bg3 "><i className="fa fa-apple " ariaHidden="true "></i></span>
                            <div className="dash-widget-info text-right ">
                                <h3>1</h3>
                                <span className="widget-title3 ">Rice <i className="fa fa-check " ariaHidden="true "></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3 ">
                        <div className="dash-widget ">
                            <span className="dash-widget-bg4 "><i className="fa fa-lemon-o " ariaHidden="true "></i></span>
                            <div className="dash-widget-info text-right ">
                                <h3>1</h3>
                                <span className="widget-title4 ">Oils <i className="fa fa-check " ariaHidden="true "></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-12 col-md-6 col-lg-8 col-xl-8 ">
                        <div className="card ">
                            <div className="card-header ">
                                <h4 className="card-title d-inline-block ">Chart</h4> <a href="/visual" className="btn btn-primary float-right ">View all</a>
                                <LineChart />

    
                            </div>
                            <div className="card-block ">
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-4 ">
                        <div className="card member-panel ">
                            <div className="card-header bg-white ">
                                <h4 className="card-title mb-0 ">Kits</h4>
                            </div>
                            <div className="card-body ">
                                <ul className="contact-list ">
                                    <li>
                                        <div className="contact-cont ">
                                            <div className="float-left user-img m-r-10 ">
                                                <a href="# " title="John Doe "><img src="assets/img/cardio.jpeg " alt=" " className="w-40 rounded-circle "/></a>
                                            </div>
                                            <div className="contact-info ">
                                                <span className="contact-name text-ellipsis ">Starter Kit</span>
                                                <span className="contact-date ">Introductory Kit having 16 items ranging from food to daily essentials</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-cont ">
                                            <div className="float-left user-img m-r-10 ">
                                                <a href="#l " title="Richard Miles "><img src="assets/img/gyna.jpeg " alt=" " className="w-40 rounded-circle "/></a>
                                            </div>
                                            <div className="contact-info ">
                                                <span className="contact-name ext-ellipsis ">Weekly Kit</span>
                                                <br/>
                                                <span className="contact-date ">Provided on a weekly basis with 3 rotating supplements</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-cont ">
                                            <div className="float-left user-img m-r-10 ">
                                                <a href="#" title="John Doe "><img src="assets/img/gs.webp " alt=" " className="w-40 rounded-circle "/></a>
                                            </div>
                                            <div className="contact-info ">
                                                <span className="contact-name text-ellipsis ">Booster Kit</span>
                                                <span className="contact-date ">Provided on a monthly basis with nutritous additions like Tea, Sugar</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-cont ">
                                            <div className="float-left user-img m-r-10 ">
                                                <a href="#" title="Richard Miles "><img src="assets/img/ent.jpeg " alt=" " className="w-40 rounded-circle "/></a>
                                            </div>
                                            <div className="contact-info ">
                                                <span className="contact-name text-ellipsis ">Exit Kit</span>
                                                <span className="contact-date ">Final Kit having items like Atta, Ghee, Rice and dryfruits</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  );

}
