const express=require("express")
const authMiddleware=require("../middlewares/authMiddleware")
const mapsController=require("../controllers/mapsController")
const {query}=require("express-validation")
const router=express.Router()

router.get("/get-coordinates",query('address').isString().isLength({min:3})
    ,authMiddleware.authUser,mapsController.getCoordinates)



module.exports= router;