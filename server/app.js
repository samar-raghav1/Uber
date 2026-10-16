const express=require("express");
const userRoute=require("./routes/userRoute")
const captainRoute=require("./routes/captainRoute")
const dotenv= require("dotenv");
const cors=require("cors");
const { cookie } = require("express-validator");
const cookieParser = require("cookie-parser");
const mapsRoute=require("./routes/mapRoute")

const app=express();
dotenv.config()
const frontendOrigins = (process.env.FRONTEND_URL || "http://localhost:5173")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: frontendOrigins,
    credentials: true
}));
app.use(cookieParser())
app.use("/user",userRoute);
app.use("/captain",captainRoute);
app.use("/maps",mapsRoute);
app.get("/",(req,res)=>{
    res.send("Heyy!")
})















module.exports=app;