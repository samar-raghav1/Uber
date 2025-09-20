const User=require("../model/User");
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs");
const blacklistToken = require("../model/blacklistToken");
const Captain = require("../model/Captain");


module.exports.authUser=async(req,res,next)=>{
    const token= req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    if(!token){
        return res.status(401).json({message:"Not authorized"})
    }
    const isBlacklisted=await blacklistToken.findOne({token:token});
    if(isBlacklisted){
        return res.status(401).json({message:"Unauthorized"})
    }
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const user=await User.findById(decoded._id);
        
        req.user=user;
        return next();
    } catch (error) {
        return res.status(401).json({message:"Unauthorized"})
    }
}

module.exports.authCaptain=async(req,res,next)=>{
    const token= req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
      if(!token){
        return res.status(401).json({message:"Not authorized"})
      }
      const isBlacklisted=await blacklistToken.findOne({token:token});
      if(isBlacklisted){
          return res.status(401).json({message:"Unauthorized"})
      }
      try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const captain=await Captain.findById(decoded._id);
        
        req.captain=captain
        return next();
    } catch (error) {
        return res.status(401).json({message:"Unauthorized"})
    }
}