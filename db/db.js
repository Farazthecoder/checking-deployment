const mongoose = require("mongoose");
const DB_NAME = "backend"


const Dbconnection = async()=>{
    try {
      const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       
      // console.log(connectionInstance.connection.host)
    } catch (error) {
        console.log(error)
    }
}


module.exports = Dbconnection;