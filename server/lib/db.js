const mongoose=require("mongoose");

const connectDB=()=>{
    try{
        mongoose.connect(process.env.MONGODB_URI)
        console.log("DataBase Connected!");
    }
    catch{
        console.log("Error in mongoDb Connection");
        
    }
}

module.exports = connectDB