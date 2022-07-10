const express = require("express");
const router = express.Router();
const Item= require("../models/Item")
const Patient = require("./../models/Patient");
const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
    );
    next();

});

router.get("/:id",async(req,res,next)=>{

  await Patient.findById({_id:req.params.id})
  .then((details)=>{
    console.log(details)
    res.setHeader("Content-Type", "Application/JSON");
    res.status(200).json({
      message:"successful fetch",
      details:details
    })
  })
  .catch((err)=>{
    console.log(err)
    res.status(400).json({
      message:"there was some error",
      error:err
    })
  })

})

router.get("/details/:id",async(req,res,next)=>{
  console.log(req.params.id)

 await Patient.findOne({id:req.params.id})
  
 .then((details)=>{
  
  console.log(details)
  res.setHeader("Content-Type", "Application/JSON");
  res.status(200).json({
    message:"successful fetch",
    details:details
  })

 })
 .catch((err)=>{
  console.log(err)
  res.status(400).json({
    message:"there was some error",
    error:err
  })
 })
})

router.post("/ration/:id",async(req,res,next)=>{
  console.log("here")
  console.log(req.params.id)
 
  //get products from req.body
  let products=req.body.products

  console.log(products[0])
  await Patient.findOneAndUpdate(req.params.id,{products:products},{set:true,new:true})

  .then((details)=>{
    console.log(details)
    res.setHeader("Content-Type", "Application/JSON");
    res.status(200).json({
      message:"successful fetch",
      details:details
    })
  }
  )
  // .then(async()=>{
     
    //  await Item.find({})
    //  .then((item)=>{
      
      
    //   console.log(item)
      //  var x=item;
      //  console.log(x)
      //  for(let i=0;i<x.length;i++){
      //   //  x[i].quantity-=products[i].quantity
      //   //subtracting the quantity from the database
      //  Item.findOneAndUpdate({id:x[i].id},{quantity:x[i].quantity-products[i].quantity, name : req.body.name},{set:true,new:true})
        
       
      //  .then((item)=>{
      //     console.log("here")
      //     console.log(item)


      //   }
      //   )
      //   .catch((err)=>{
      //     console.log(err)
      //   }
      //   )
      //  }
      //  x
      //  .save()
      //  .then((res)=>{
      //   console.log(res)
      //  })
  //      .catch((err)=>{
  //       console.log(err)
  //      })
  //    })
     

  // })
  .catch((err)=>{
    console.log(err)
  })

})


router.post("/add",async(req,res,next)=>{
  
  await new Patient(req.body)
  .save()
  .then((details)=>{
    console.log(details)
    res.setHeader("Content-Type", "Application/JSON");
    res.status(200).json({details:details,message:"successful patient added"})
    
  }) 
  .catch(err=>{
    console.log(err)
  })
})



module.exports = router
