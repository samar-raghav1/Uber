const User=require("../model/User");
const userService=require("../services/userService")
const {validationResult}=require("express-validator")
const blacklistToken = require("../model/blacklistToken");

module.exports.registerUser=async (req,res,next)=> {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
 

    const {fullname,email,password}=req.body;

    const isUserAlreadyExist= await User.findOne({email});
    if(isUserAlreadyExist){
      return  res.status(400).json("User Already exist")
    }

    const hashedPassword =await User.hashPassword(password)

   const user=await userService.createUser({
    firstname:fullname.firstname,
    lastname:fullname.lastname,
    email,
    password:hashedPassword
   })
   const token=user.generateAuthToken();
   res.status(201).json({token,user})
}

module.exports.loginUser=async(req,res,next)=>{
    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }
    const {email,password}=req.body;
    if(!email ||!password){
        return res.status(400).json({error:"All fields are required"})
    }
    const user=await User.findOne({email}).select("+password");
    if(!user){
        return res.status(401).json({message:"Invalid email or password"})
    }
    const isMatch=await user.comparePassword(password)
    if(!isMatch){
        return res.status(401).json({message:"Invalid email or password"})
    }
    const token=user.generateAuthToken();
    res.cookie("token",token)
    res.status(200).json({token,user})
}



module.exports.getUserProfile=async(req,res,next)=>{
    res.status(200).json(req.user);
}


module.exports.logoutUser=async(req,res,next)=>{
    res.clearCookie("token");
    const token=req.cookies.token || req.headers.authorization.split(' ')[ 1 ];
    await blacklistToken.create({token})

    res.status(200).json({message:"Logged out successfully"})
}