const express=require("express")
const authMiddleware=require("../middlewares/authMiddleware")
const mapsController=require("../controllers/mapsController")
const {query}=require("express-validator")
const router=express.Router()

router.get("/get-coordinates",query('address').isString().isLength({min:3})
    ,authMiddleware.authUser,mapsController.getCoordinates)

router.get("/get-distance-time",
    query('origin').isString().isLength({min:3}),
    query('destination').isString().isLength({min:3}),
    authMiddleware.authUser,mapsController.getDistanceTime
    
)


router.get("/get-suggestions",
    authMiddleware.authUser,mapsController.getAutoSuggestion
)
module.exports= router;