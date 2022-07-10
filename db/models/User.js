const mongoose=require("mongoose")

//User model
const userSchema = new mongoose.Schema({

  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileimg: {
    type: String,
    required: false,
  },
  isAdmin:{
    type:Boolean,
    default:false,
  },

});

module.exports=mongoose.model("User",userSchema)

