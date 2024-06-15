const {FeaturesListService,LegalDetailsService} = require("../services/FeatureService");

exports.FeaturesList=async (req,res)=>{
    const data=await FeaturesListService(req)
    return  res.status(200).json(data);
}
exports.LegalDetailsList=async (req,res)=>{
    const data=await LegalDetailsService(req)
    return  res.status(200).json(data);
}