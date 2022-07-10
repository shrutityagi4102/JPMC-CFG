import React,{useState} from "react";
import {useForm} from 'react-hook-form'
import QRcode from 'qrcode.react'
import axios from 'axios'

function Registration(){
    const {formState:{errors}}=useForm()
    const [qr, setQr] = useState('');
    const [Qrdiv,setQrdiv]=useState(false)
    const [name,setName] =useState('')
    const [fatherName,setFatherName]=useState('')
    const [motherName,setMotherName]=useState('')
    const [religion,setReligion]=useState('')
    const downloadQR = () => {
        const canvas = document.getElementById("myqr");
        const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "myqr.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
    // const tobase = () =>{
    //     const canvas = document.getElementById("myqr");
    //     const pngUrl = canvas
    //       .toDataURL("image/png")
    //       console.log(pngUrl)
    // }
    //form submission
    const handleSubmit=async(e)=>{
        e.preventDefault()

        var x=Math.random().toString(36).substr(2,8);
        console.log(name,fatherName,motherName,religion,x)
        
        await axios.post("http://localhost:8000/patient/add",{
            name,
            motherName,
            religion,
            fatherName,
            id:x       
        })
        .then((res)=>{
            console.log(res)
            setQr(x)
            setQrdiv(true)
        })
      .catch((err)=>{
        console.log(err)
      })
    }
    return (
        <div className="row mt-3 ">
          <p className="display-3 text-center text-warning">Patient Registration</p>
            <div className="col-11 col-sm-8 col-md-6 mx-auto mt-3">
                <form >
                    <div className="mb-3">
                        <label htmlFor="un">Name</label>
                        <input value={name} onChange={(e)=>setName(e.target.value)}type="text" id="un" className='form-control' />

                   
                    </div>
                    <div className="mb-3">
                        <label htmlFor="un">Father Name</label>
                        <input value={fatherName} onChange={(e)=>{setFatherName(e.target.value)}} type="text" id="un" className='form-control'  />
                   
                    </div>
                    <div className="mb-3">
                        <label htmlFor="un">Mother Name</label>
                        <input value={motherName} onChange={(e)=>{setMotherName(e.target.value)}} type="text" id="un" className='form-control'  />
                     
                    </div>
                    <div className="mb-3">
                        <label htmlFor="un">Religion</label>
                        <input value={religion} onChange={(e)=>{setReligion(e.target.value)}}type="text" id="un" className='form-control'  />
                       
                    </div>

                    <button  onClick={(e)=>handleSubmit(e)}  className="btn btn-warning w-100" >Add User</button>
                </form>
                <div>
                {
                Qrdiv &&(
                <div>
                <QRcode 
                        id="myqr"
                        value={qr} 
                        size={320}
                        includeMargin={true}
                    /> 
                    <button onClick={()=>{downloadQR()}}  className="btn btn-warning w-100" >Download QR</button>        
                    </div>
                    )
                 }
            </div>
            </div>
        </div>
    )
}
export default Registration