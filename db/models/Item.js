const mongoose=require("mongoose")

const itemSchema = new mongoose.Schema({

quantity:{
    type:Number,
    required:true
},

price:{
    type:Number,
    required:true
},

name:{
    type:String,
    required:true
}


});

module.exports=mongoose.model("Item",itemSchema)