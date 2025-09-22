const mapService=require("../services/mapsService")


module.exports.getCoordinates=async(req,res,next)=>{

    const error=validationResult(req)
    if(!error.isEmpty()){
        return res.status(401).json({error:error.array()});
    }
    const {address}=req.body;

    try {
        const coordinates=await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates)
    } catch (error) {
        console.error(error);
        res.status(404).json({message:"Invalid address"})
    }
}
resizeB