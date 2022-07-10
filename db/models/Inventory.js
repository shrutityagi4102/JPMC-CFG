const mongoose=require("mongoose")
const inventorySchema = new mongoose.Schema({

shortage:{
    type:Boolean,
    default:false
},

items:[{type:mongoose.Schema.Types.ObjectId,required:true, ref:"Item" }]
  

});

module.exports=mongoose.model("inventory",inventorySchema)

