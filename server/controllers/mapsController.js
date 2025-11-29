const { validationResult } = require("express-validator");
const mapService=require("../services/mapsService")


module.exports.getCoordinates=async(req,res,next)=>{

    const error=validationResult(req)
    if(!error.isEmpty()){
        return res.status(401).json({error:error.array()});
    }
    
    
    const {address}=req.query;

    try {
        const coordinates=await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates)
        next()
    } catch (error) {
        console.error(error);
        res.status(404).json({message:"Invalid address found"})
    }
}


module.exports.getDistanceTime=async(req,res,next)=>{

    try {
        const error=validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({errors:error.array()})
        }
        const {origin,destination}=req.query;
        const distanceTime = await mapService.getDistanceTime(origin,destination)

        res.status(200).json(distanceTime);

        next();
    } catch (error) {
        console.log(error);
        
    }
}

module.exports.getAutoSuggestion=async(req,res)=>{
    try {
        const error=validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({error:error.array()})
        }

        const {input}=req.query;

        const suggestions = await mapService.getAutoSuggestions(input);

        res.status(200).json(suggestions);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Internal server error"})
    }
}