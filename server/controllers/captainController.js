const { validationResult } = require("express-validator");
const Captain=require("../model/Captain");

const captainService=require("../services/captainService");
const blacklistToken = require("../model/blacklistToken");


module.exports.registerCaptain=async(req,res,next)=>{
  const error=validationResult(req);
  if(!error.isEmpty()){
    return res.status(400).json({error:error.array()})
  }
  const {fullname,email,password,vehicle}=req.body;

  const isCaptainAlreadyExist= await Captain.findOne({email});

  if(isCaptainAlreadyExist){
   return res.status(400).json({message:"Captain already exist"})
  }
  const hashedpassword= await Captain.hashPassword(password);

  const captain=await captainService.createCaptain({
    firstname:fullname.firstname,
    lastname:fullname.lastname,
    email,
    password:hashedpassword,
    color:vehicle.color,
    plate:vehicle.plate,
    capacity:vehicle.capacity,
    vehicleType:vehicle.vehicleType
  });
  const token= captain.generateAuthToken();
  res.status(201).json({token,captain});
}

module.exports.loginCaptain=async(req,res,next)=>{
    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }

    const {email,password}=req.body;
    const captain=await Captain.findOne({email}).select("+password");
    if(!captain){
        return res.status(401).json("message:Invalid email or password")
    }

    const isMatch=await captain.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message:"Invalid email or password"})
    }

    const token=captain.generateAuthToken();
    res.cookie("token",token);
    res.status(200).json({token,captain})
}

module.exports.getCaptainProfile=async(req,res,next)=>{
    res.status(200).json(req.captain);
}

module.exports.logoutCaptain=async(req,res,next)=>{
    const token= req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    await blacklistToken.create({token:token})
    res.clearCookie("token");
    res.status(200).json({message:"Logged out successfully"})
}