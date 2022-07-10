import React,{useEffect,useState} from 'react'
import axios from 'axios'



function Invent() {

    const[details,setDetails]=useState('')


   useEffect(()=>{

     const getInventory=async()=>{
       await axios.get("http://localhost:8000/inventory/details")
       .then((res)=>{
        setDetails(res.data.details.items)
        console.log(res.data.details.items)
       })
       .catch((err)=>{
        console.log(err)
       })
     }

     getInventory()


   },[])


  return (
    <div class="main-wrapper">
    <div class="header">
        <div class="header-left">
            <a href="admindash.html" class="logo">
                <img src="assets/img/logo.png" width="35" height="35" alt=""/> <span>St. Jude India</span>
            </a>
        </div>
        <a id="toggle_btn" href="#"><i class="fa fa-bars"></i></a>
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
                        <a href="s# "><i class="fa fa-bar-chart "></i> <span>Stastics & Visualisation</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="page-wrapper">
        <div class="content">
            <div class="row">
                <div class="col-sm-4 col-3">
                    <h4 class="page-title">Inventory</h4>
                </div>
                <div class="col-sm-8 col-9 text-right m-b-20">
                    <a href="add-patient.html" class="btn btn btn-primary btn-rounded float-right"><i class="fa fa-plus"></i> Add Items</a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="table-responsive">
                        <table class="table table-border table-striped custom-table datatable mb-0">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Last Restock Date</th>
                                    <th>Currently Available Stock</th>

                                </tr>
                            </thead>
                            <tbody>


                              {/* {details.map((detail)=>{
                                return (<div>hello</div>)
                              })} */}

                                <tr>
                                    <td><img width="28" height="28" src="assets/img/meal.webp" class="rounded-circle m-r-5" alt=""/> Rice</td>
                                    <td>20th June, 2022</td>
                                    <td>3500kg</td>

                                </tr>
                                <tr>
                                    <td><img width="28" height="28" src="assets/img/meal.webp" class="rounded-circle m-r-5" alt=""/> Sugar</td>
                                    <td>20th June, 2022</td>
                                    <td>3500kg</td>

                                </tr>
                                <tr>
                                    <td><img width="28" height="28" src="assets/img/meal.webp" class="rounded-circle m-r-5" alt=""/> Dal</td>
                                    <td>20th June, 2022</td>
                                    <td>3500kg</td>

                                </tr>
                                <tr>
                                    <td><img width="28" height="28" src="assets/img/meal.webp" class="rounded-circle m-r-5" alt=""/> Soap</td>
                                    <td>20th June, 2022</td>
                                    <td>3500kg</td>

                                </tr>
                                <tr>
                                    <td><img width="28" height="28" src="assets/img/meal.webp" class="rounded-circle m-r-5" alt=""/> Wheat</td>
                                    <td>20th June, 2022</td>
                                    <td>3500kg</td>

                                </tr>
                                <tr>
                                    <td><img width="28" height="28" src="assets/img/meal.webp" class="rounded-circle m-r-5" alt=""/> Pulses</td>
                                    <td>20th June, 2022</td>
                                    <td>3500kg</td>

                                </tr>
                                <tr>
                                    <td><img width="28" height="28" src="assets/img/meal.webp" class="rounded-circle m-r-5" alt=""/> Poha</td>
                                    <td>20th June, 2022</td>
                                    <td>3500kg</td>

                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
  );
}

export default Invent