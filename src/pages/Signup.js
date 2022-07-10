import React,{useState} from 'react'
import axios from 'axios';
import { gapi } from "gapi-script";
import GoogleLogin from 'react-google-login';


window.gapi.load("client:auth2", () => {
    gapi.client.init({
        clientId: "590317398193-cua2basbnnv7ni4il7vdcsm18qsg2ntk.apps.googleusercontent.com",
        plugin_name: "chat",
    });
});


function Signup() {
    //google auth
    const[email,setEmail]=useState('')
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault()
        
        await axios.post("http://localhost:8000/register",{
           username,
           email,
           password
        })
        .then((res)=>{
           console.log(res.data.token)
           localStorage.setItem("token",res.data.token)
          
          
        })
        .then(()=>{
            window.location.href="/"
        })
        .catch((err)=>{
          console.log(err)
        })
   
       }

    const responseSuccessGoogle = async(response) => {
        console.log(response)
        await axios({
            method: 'post',
            url: 'http://localhost:8000/googleLogin',
            data: { tokenId: response.tokenId }

        }).then(response => {
            console.log("Google login success", response)
        })
       


    }
    const responseErrorGoogle = (response) => {
        console.log(response)
    }



  return (
    <section className="ftco-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-5">
                    <div className="wrap">
                    {/* <img className='img' id='resize' src='../../public/images/bg-3.webp' alt='#'/> */}
                        <div className="login-wrap p-4 p-md-5">
                            <div className="d-flex">
                                <div className="w-100">
                                    <h3 className="mb-4">Sign Up</h3>
                                </div>
                                <div className="w-100">
                                    <p className="social-media d-flex justify-content-end">
                                        {/* <a href="../../public/index.html" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-google" ></span></a> */}
                                        <
                                            GoogleLogin clientId = "590317398193-cua2basbnnv7ni4il7vdcsm18qsg2ntk.apps.googleusercontent.com"
                                            buttonText = "Login"
                                            onSuccess = { responseSuccessGoogle }
                                            onFailure = { responseErrorGoogle }
                                            render={renderProps => (
                                                <span className="social-icon d-flex align-items-center justify-content-center">
                                                    <span onClick={renderProps.onClick} disabled={renderProps.disabled} className="fa fa-google"></span>
                                                </span>
                                                )}
                                            cookiePolicy = { 'single_host_origin' }/> 
                                    </p>
                                </div>
                            </div>
                            <form action="#" className="signin-form">
                                <div className="form-group mt-3">
                                    <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" className="form-control" required />
                                    <label className="form-control-placeholder" for="username">Name</label>
                                </div>
                                <div className="form-group mt-3">
                                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}}type="text" className="form-control" required />
                                    <label className="form-control-placeholder" for="username">E-mail</label>
                                </div>
                                <div className="form-group">
                                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} id="password-field" type="password" className="form-control" required />
                                    <label className="form-control-placeholder" for="password">Password</label>
                                    <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                                </div>
                                <div className="form-group">
                                    <button onClick={(e)=>{handleSubmit(e)}}type="submit" className="form-control btn btn-primary rounded submit px-3">Sign Up</button>
                                </div>
                            </form>
                            <p className="text-center">Been Here ? <a href="/login">Sign In</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Signup