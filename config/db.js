const mongoose=require('mongoose');
const env = require("dotenv").config();


const connectDB= async ()=>{
    try{
        await mongoose.connect(process.env.MONGOBD_URI);
        console.log("Db connected")

    } catch (error){
       console.log("DB connection error",error.message);
       process.exit(1);
    }
}


module.exports=connectDB;