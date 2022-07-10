const express = require("express");
const router = express.Router();
const Item = require("./../models/Item");
const Inventory=require("../models/Inventory.js")
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

  
router.get("/details",async(req,res,next)=>{
 
  await Inventory.findOne({})
  .populate('items')
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

router.post("/update",async(req,res,next)=>{
  let products=req.body.products
  
  await Item.find({})
     .then((item)=>{
       var x=item;
       for(let i=0;i<x.length;i++){
         x[i].quantity+=products[i].quantity
       }
       x.save()
       
       .then((res)=>{
        console.log(res)
       })
       .catch((err)=>{
        console.log(err)
  })


})

})

router.post("/new",async(req,res,next)=>{

  var x=[];
 await Item.find({}).then((res)=>{
  for(let i=0;i<res.length;i++){
    x.push(res[i]._id)
  }
  console.log(res)
 
 })
 .catch((err)=>{
  console.log(err)
 })

 console.log(x)
 await new Inventory({items:x})
  .save()
  .then((details)=>{
    console.log(details)
    res.setHeader("Content-Type", "Application/JSON");
    res.status(200).json({
      message:"successful addition",
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

module.exports = router