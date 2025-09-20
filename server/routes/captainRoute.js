const express=require('express');
const { body } = require('express-validator');
const captainRoute=express.Router();
const captainController=require("../controllers/captainController")
const authMiddleware=require("../middlewares/authMiddleware")

captainRoute.post("/register",[
    body("email").isEmail().withMessage("Invalid email"),
    body('fullname.firstname').isLength({min:3}).withMessage("Firstname must be at least 3 Characters long"),
    body('fullname.lastname').isLength({min:3}).withMessage("lastname must be at least 3 Characters long"),
    body('password').isLength({min:"6"}).withMessage("password must be at least 6 characters"),
    body('vehicle.color').isLength({min:3}).withMessage('Vehicle Color must be at least 3 Characters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('vehicle plate must be at least 3 Characters long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Vehicle capacity must be at least 1 Characters long'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehicle type')

],captainController.registerCaptain)


captainRoute.post("/login",[
    body("email").isEmail().withMessage("Invalid email"),
    body('password').isLength({min:"6"}).withMessage("password must be at least 6 characters")
],captainController.loginCaptain)

captainRoute.get("/profile",authMiddleware.authCaptain,captainController.getCaptainProfile)
captainRoute.get("/logout",authMiddleware.authCaptain,captainController.logoutCaptain)


module.exports=captainRoute;