const FeatureModel = require("../models/FeatureModel");
const LegalModel=require('../models/LegalModel')

const FeaturesListService=async (req)=>{
    try{
        const data = await FeatureModel.find()
        return {status:'success',data:data}
    }catch (e) {
        return {status:'failed',msg:'Invoice not Created',err:e.toString()}
    }

}

const LegalDetailsService= async (req)=>{
    try{
        const {type}=req.params
        const data=await LegalModel.find({type:type})
        return {status:'success',data:data}
    }catch (e) {
        return {status:'failed',msg:'Legals Not found',err:e.toString()}
    }
}


module.exports={
    FeaturesListService,
    LegalDetailsService
}