const express=require("express")
const userController=require("../controllers/userController")
const authMiddleware=require("../middlewares/authMiddleware")
const userRouter=express.Router()
const {body}=require("express-validator")
userRouter.post("/register",[
    body("email").isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min:3}).withMessage("First name must be at least 3 characters long"),
    body('password').isLength({min:6}).withMessage("Password must be at least 6 digits ")
],userController.registerUser)


userRouter.post("/login",[
    body("email").isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:6}).withMessage("Password must be at least 6 digits ")
],userController.loginUser)

userRouter.get("/profile",authMiddleware.authUser,userController.getUserProfile)
userRouter.get("/logout",authMiddleware.authUser,userController.logoutUser)


module.exports=userRouter;