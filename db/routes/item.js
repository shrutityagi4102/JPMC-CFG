const express = require("express");
const router = express.Router();
const Item=require("../models/Item")
const bodyParser = require("body-parser");
router.use(bodyParser.json());


router.post("/add",async(req,res,next)=>{
  console.log(req.body)
  var item=new Item(req.body)
    await item
    .save()
    .then((details)=>{
      console.log(details)
      res.setHeader("Content-Type", "Application/JSON");
      res.status(200).json({details:details,message:"successful entry"})
    }) 
    .catch(err=>{
      console.log(err)
    })
  })

     





module.exports = router