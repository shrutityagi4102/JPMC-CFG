import React,{useEffect,useState} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import './profile.css'

function Patient() {
     
    const[name,setName] =useState("")
    const[fatherName,setFatherName]=useState("")
    const[motherName,setMotherName]=useState("")
    const[religion,setReligion]=useState("")
    const[products,setProducts]=useState([])
    const[rice,setRice]=useState(5)
    const[sugar,setSugar]=useState(5)
    const[pulses,setPulses]=useState(5)
    const[dal,setDal]=useState(5)
    const[soap,setSoap]=useState(5)
    const[wheat,setWheat]=useState(5)
    const[poha,setPoha]=useState(5)
    const[rajma,setRajma]=useState(5)


    const fetchPatient=async()=>{
        await axios.get(`http://localhost:8000/patient/${id}`)
        .then((res)=>{
         let res1={...res}
           console.log(res1)
            console.log(res)
          console.log(res1.data.details.products)
          setName(res1.data.details.name)
          setFatherName(res1.data.details.fatherName)
          setMotherName(res1.data.details.motherName)
          setReligion(res1.data.details.religion)
          setProducts(res1.data.details.products)
          
        })
        .catch((err)=>{
          console.log(err)
        })
       }

    let {id}=useParams();
    useEffect(()=>{
      
      // this function fetches the details of the patient
      

       fetchPatient()
    },[])

    
    //this will be the function passed to update the ration      
    const editRation=async(e)=>{
        e.preventDefault()
     
    // await axios.get('http://localhost:3000/send-sms')
    // .then((res)=>{
    //     console.log(res)
    // })

    //  .then(()=>{
        await axios.post(`http://localhost:8000/patient/ration/${id}`,{

            products:[{name:"Rice",quantity:rice},{name:"Dal",quantity:dal},{name:"Soap",quantity:soap},{name:"Sugar",quantity:sugar},{name:"Pulses",quantity:pulses}
           
           ,{name:"Wheat",quantity:wheat},{name:"Poha",quantity:poha},{name:"Rajma",quantity:rajma}]
      
          })
          .then((res)=>
          {
           
           console.log(res)
          
          })
          .then(()=>{
             fetchPatient()
          })
          .catch((err)=>{
           console.log(err)
          })
    //  })
    //  .catch((err)=>{
    //     console.log(err)
    //    })
    
    }


  return (
    <div><h2>Patient {id}</h2>
    <div style={{display:"flex",width:"1800px",marginTop:"30px",justifyContent:"spaceAround",marginLeft:"100px"}}>
        
        <div class="card">
            <div class="card-body" style={{width:"400px"}}>
                <i class="fa fa-pen fa-xs edit"></i>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>{name}</td>
                        </tr>
                        {/* <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>{imdezcode@gmail.com}</td>
                        </tr> */}
                        <tr>
                            <td>Mother Name</td>
                            <td>:</td>
                            <td>{motherName}</td>
                        </tr>
                        <tr>
                            <td>Father Name</td>
                            <td>:</td>
                            <td>{fatherName}</td>
                        </tr>
                        <tr>
                            <td>Religion</td>
                            <td>:</td>
                            <td>{religion}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>

        <div class="page-wrapper">
            <div class="content">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <h4 class="page-title">Add Item</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <form>
                            <div class="row">
                                <div class="container">

                                    <div class="row">

                                        <div class="four col-md-3">
                                            <div class="counter-box colored">
                                                <i class="fa fa-cutlery i"></i>
                                                <span class="counter">5</span>
                                                <p>WHEAT</p>
                                                <button class="btn"><i class="fa fa-plus"></i></button>
                                                <input value={wheat} style={{width:"20px"}}></input>
                                                <button class="btn"><i class="fa fa-minus"></i></button>
                                            </div>
                                        </div>

                                        <div class="four col-md-3">
                                            <div class="counter-box">
                                                <i class="fa fa-cutlery i"></i>
                                                <span class="counter">5</span>
                                                <p>RICE</p>
                                                <button class="btn"><i class="fa fa-plus"></i></button>
                                                <input value={rice}style={{width:"20px"}}></input>
                                                <button class="btn"><i class="fa fa-minus"></i></button>
                                            </div>
                                        </div>

                                        <div class="four col-md-3">
                                            <div class="counter-box">
                                                <i class="fa fa-cutlery i"></i>
                                                <span class="counter">5</span>
                                                <p>SUGAR</p>
                                                <button class="btn"><i class="fa fa-plus"></i></button>
                                                <input value={sugar}style={{width:"20px"}}></input>
                                                <button class="btn"><i class="fa fa-minus"></i></button>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <div class="four col-md-3">
                                            <div class="counter-box">
                                                <i class="fa fa-cutlery i"></i>
                                                <span class="counter">5</span>
                                                <p>DAL</p>
                                                <button class="btn"><i class="fa fa-plus"></i></button>
                                                <input value={dal}style={{width:"20px"}}></input>
                                                <button class="btn"><i class="fa fa-minus"></i></button>
                                            </div>
                                        </div>
                                        <div class="four col-md-3">
                                            <div class="counter-box">
                                                <i class="fa fa-cutlery i"></i>
                                                <span class="counter">5</span>
                                                <p>SOAP</p>
                                                <button class="btn"><i class="fa fa-plus"></i></button>
                                                <input value={soap} style={{width:"20px"}}></input>
                                                <button class="btn"><i class="fa fa-minus"></i></button>
                                            </div>
                                        </div>
                                        <div class="four col-md-3">
                                            <div class="counter-box">
                                                <i class="fa fa-cutlery i"></i>
                                                <span class="counter">5</span>
                                                <p>PULSES</p>
                                                <button class="btn"><i class="fa fa-plus"></i></button>
                                                <input value={pulses} style={{width:"20px"}}></input>
                                                <button class="btn"><i class="fa fa-minus"></i></button>
                                            </div>
                                        </div>
                                        <div class="four col-md-3">
                                            <div class="counter-box">
                                                <i class="fa fa-cutlery i"></i>
                                                <span class="counter">5</span>
                                                <p>POHA</p>
                                                <button class="btn"><i class="fa fa-plus"></i></button>
                                                <input value={poha} style={{width:"20px"}}></input>
                                                <button class="btn"><i class="fa fa-minus"></i></button>
                                            </div>
                                        </div>
                                        <div class="four col-md-3">
                                            <div class="counter-box">
                                                <i class="fa fa-cutlery i"></i>
                                                <span class="counter">5</span>
                                                <p>RAJMA</p>
                                                <button class="btn"><i class="fa fa-plus"></i></button>
                                                <input value={rajma} style={{width:"20px"}}></input>
                                                <button class="btn"><i class="fa fa-minus"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="m-t-20 text-center">
                                    <button onClick={(e)=>{editRation(e)}} class="btn btn-primary submit-btn">SAVE</button>
                                </div>
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        {
          products.map((product)=>{
            return(
                <div>
                
                <div>{product.name}</div>
                <div>{product.quantity}</div>
                </div>
              
            )
          })
        }
    </div>
    </div>
    
  );
}

export default Patient