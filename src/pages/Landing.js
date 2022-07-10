import React from 'react'
import {NavLink} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

function Landing() {
  return (
    
    <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand " href="#"></a>
                <ul className="navbar-nav ms-auto mb-1 mb-lg-0 pr-2">
                    <li className="nav-item">
                    <NavLink className="nav-link active"  to="">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active"  to="sign-up">Signup</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active"  to="login">Login</NavLink>
                    </li>

                    {/* <li className="nav-item">
                    <NavLink className='nav-link active' to='users'>Users</NavLink>
                    </li> */}
                    <li className='nav-item'>
                    <NavLink className='nav-link active' to='contactus'>ContactUs</NavLink>
                    </li>
                    {/* <li className="nav-item">
                    <NavLink className="nav-link active" to='technologies'>Technologies</NavLink>
                    </li> */}
                </ul>
            </div>
        </nav>
       


        {/* Corousel */}
        <Carousel className='container ' style={{width:"60%"}}>
            
            <Carousel.Item interval={2000}>
                <img
                className="d-block mx-auto w-70"
                src="https://assets.telegraphindia.com/telegraph/2022/May/1653555150_4.jpg"
                alt="First slide"/>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block mx-auto w-70"
                src="https://assets.telegraphindia.com/telegraph/2022/May/1653554826_6.jpg"
                alt="First slide"/>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block mx-auto w-70"
                src="https://assets.telegraphindia.com/telegraph/2022/May/1653554413_1.jpg"
                alt="Second slide"/>
                <Carousel.Caption>
                <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block mx-auto w-70"
                src="https://assets.telegraphindia.com/telegraph/2022/May/1653554730_5.jpg"
                alt="Third slide"/>
                <Carousel.Caption>
                <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


        {/* AboutUs */}

        <div className="container text-center mx-auto pt-5">
            <h1 id='first' >About Us</h1>

            {/* Grid layout */}
            <div className="row">
                <div className="col border">
                    <h3 className="text-success pt-3 ">Our Vision</h3>
                    <p className="lead">
                        Every needy family with a child coming for treatment and recovery from a serious illness will have a
                        clean, safe, comfortable, caring and cost-free place to stay, in addition to receiving the information,
                        encouragement and child engagement required to develop a positive spirit to fight and overcome the
                        disease.</p>
                </div>
                <div className="col border ">
                    <h3 className="text-success pt-3">Our Mission</h3>
                    <p className='lead'>
                    We aim to provide clean, safe and cost-free accommodation to children (and their accompanying
                    relatives) who are undergoing the treatment for chronic diseases in metro cities of India.</p>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Landing
