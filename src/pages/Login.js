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


function Login() {

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const handleSubmit=async(e)=>{
     e.preventDefault()
     await axios.post('http://localhost:8000/login',{
       
     email,
     password 
       
})
     .then((res)=>{
      
        console.log(res)
        localStorage.setItem("token",res.data.token)
       
     })
   
     .then(()=>{
         window.location.href="/"
     })
     
     .catch((err)=>{
   
       console.log(err)
       
     })

    }
        //google auth

        const responseSuccessGoogle = async(response) => {
            console.log(response)
            await axios({
                method: 'post',
                url: 'http://localhost:8000/googleLogin',
                data: { tokenId: response.tokenId }
    
            }).then(response => {
                console.log("Google login success", response.googleId)
                localStorage.setItem("token","random")
                window.location.href="/"
          
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
                                    <h3 className="mb-4">Sign In</h3>
                                </div>
                                <div class="w-100">
                                    <p class="social-media d-flex justify-content-end">
                                        {/* <a href="../../public/index.html" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-google" ></span></a> */}
                                        <
                                            GoogleLogin clientId = "590317398193-cua2basbnnv7ni4il7vdcsm18qsg2ntk.apps.googleusercontent.com"
                                            buttonText = "Login"
                                            onSuccess = { responseSuccessGoogle }
                                            onFailure = { responseErrorGoogle }
                                            render={renderProps => (
                                                <span class="social-icon d-flex align-items-center justify-content-center">
                                                    <span  onClick={renderProps.onClick} disabled={renderProps.disabled} class="fa fa-google"></span>
                                                </span>
                                                )}
                                            cookiePolicy = { 'single_host_origin' }/> 
                                    </p>
                                </div>
                            </div>
                            <form action="#" className="signin-form">
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
                                    <button onClick={(e)=>{handleSubmit(e)}} type="submit" className="form-control btn btn-primary rounded submit px-3">Sign In</button>
                                </div>
                                <div className="form-group d-md-flex">
                                    <div className="w-50 text-left">
                                        <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
									  <input type="checkbox" checked />
									  <span className="checkmark"></span>
										</label>
                                    </div>
                                    <div className="w-50 text-md-right">
                                        <a href="../../public/index.html">Forgot Password</a>
                                    </div>
                                </div>
                            </form>
                            <p className="text-center">New Here ? <a href="/sign-up">Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     
    );
}

export default Login