const CartModel=require('../models/CartModel')

const mongoose=require('mongoose')
const ObjectId=mongoose.Types.ObjectId;

const SaveCartListService=async (req)=>{
    try{
        let userId=req.headers.userId;
        let reqBody=req.body;
        reqBody.userID=userId;
        let data=await CartModel.create(reqBody);
        return {status:'success',msg:'cart List added Successfully',data:data}
    }catch (e) {
        return {status:'failed',msg:'cart List not added',err:e.toString()}
    }
}

const RemoveCartListService=async (req)=>{
    try{
        let userId=req.headers.userId;
        let reqBody=req.body;
        reqBody.userID=userId;
        await CartModel.deleteOne(reqBody);
        return {status:'success',msg:'cart List Removed Successfully'}
    }catch (e) {
        return {status:'failed',msg:'cart List not Removed',err:e.toString()}
    }
}

const UpdateCartListService=async (req)=>{

}

const ReadCartListService=async (req)=>{

}

module.exports={
    SaveCartListService,
    RemoveCartListService,
    UpdateCartListService,
    ReadCartListService
}