const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
},{timestamps:true});



const UserInfo = mongoose.model("UserInfo",userSchema);

module.exports = UserInfo;

// module.exports = Dbconnection;