const mongoose=require("mongoose")

//User model
const patientSchema = new mongoose.Schema({
  id : {
    type: String,
    required: true
  },
  base64 : {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  fatherName: {
    type: String,
    required: true
  },
  motherName:
  {
    type: String,
    required: true
  },
  religion:{
    type:String,
    required:false
  },
  isAdmin:{
    type:Boolean,
    default:false,
  },
  qrcode:{
    type:String,
    required:false
  },
  products:[
    {
      name:{
        type:String,
        required:true
      },
      quantity:{
        type:Number,
        required:true
      }
   }
  // ,
  //   {
  //     name:{
  //       type:String,
  //       default:"Rice",
  //       required:true
  //     },
  //     quantity:{
  //       type:Number,
  //       default:0,
  //       required:true
  //     }

  //   },
  //   {
  //   name:{
  //       type:Number,
  //       default:"Dal",
  //       required:true
  //     },
  // quantity:{
  //     type:Number,
  //     default:0,
  //     required:true
  //     }

  //   },
  //   {
  //     name:{
  //       type:String,
  //       default:"Soap",
  //       required:true
  //     },
  //      quantity:{
  //         type:Number,
  //         default:0,
  //         required:true
  //      }

  //   },
  //   {
  //     name:{
  //       type:String,
  //       default:"Pulses",
  //       required:true
  //     },
  //      quantity:{
  //         type:Number,
  //         default:0,
  //         required:true
  //      }

  //   },
  //   {
  //     name:{
  //       type:String,
  //       default:"Poha",
  //       required:true
  //     },
  //      quantity:{
  //         type:Number,
  //         default:0,
  //         required:true
  //      }

  //   },
  //   {
  //     name:{
  //       type:String,
  //       default:"Wheat",
  //       required:true
  //     },
  //      quantity:{
  //         type:Number,
  //         default:0,
  //         required:true
  //      }

  //   },
  //   {
  //     name:{
  //       type:String,
  //       default:"Rajma",
  //       required:true
  //     },
  //      quantity:{
  //         type:Number,
  //         default:0,
  //         required:true
  //      }

    // }

  ]
});

module.exports=mongoose.model("Patient",patientSchema)

