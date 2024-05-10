

const BrandModel=require('../models/BrandModel')
const CategoryModel=require('../models/CategoryModel')
const ProductDetailModel=require('../models/ProductDetailModel')
const ProductModel=require('../models/ProductModel')
const ProductReviewModel=require('../models/ProductReviewModel')
const ProductSliderModel=require('../models/ProductSliderModel')

const mongoose=require('mongoose')
const ObjectId=mongoose.Types.ObjectId;

const BrandListService=async ()=>{
    try{
        const data=await BrandModel.find()
        return {status:'success',data:data}
    }catch(e){
        return {status:'failed',data:e.toString()}
    }
}
const CategoryListService=async ()=>{
    try{
        const data=await CategoryModel.find()
        return {status:'success',data:data}
    }catch(e){
        return {status:'failed',data:e.toString()}
    }
}
const SliderListService=async ()=>{
    try{
        const data=await ProductSliderModel.find()
        return {status:'success',data:data}
    }catch(e){
        return {status:'failed',data:e.toString()}
    }
}

const ListByBrandService=async (req)=>{
    try{
        const BrandID=new ObjectId(req.params.BrandID);
        let matchingStage={$match:{brandID:BrandID}}
        let joinWithBrandStage={$lookup:{from:'brands',localField:'brandID',foreignField:'_id',as:'brand'}}
        let joinWithCategoryStage={$lookup:{from:'categories',localField:'categoryID',foreignField:'_id',as:'category'}}
        let unwindBrandStage={$unwind:'$brand'}
        let unwindCategoryStage={$unwind:'$category'}
        let projectionStage={$project:{'brandID':0,'categoryID':0,'brand._id':0,'category._id':0}}
        const data=await ProductModel.aggregate([
            matchingStage,
            joinWithBrandStage, joinWithCategoryStage,
            unwindBrandStage,unwindCategoryStage,
            projectionStage
        ])
        return {status:'success',data:data}

    }catch (e){
        return {status:'failed',data:e.toString()}
    }
}
const ListByCategoryService=async (req)=>{
    try{
        const CategoryID=new ObjectId(req.params.CategoryID);
        let matchingStage={$match:{categoryID:CategoryID}}
        let joinWithBrandStage={$lookup:{from:'brands',localField:'brandID',foreignField:'_id',as:'brand'}}
        let joinWithCategoryStage={$lookup:{from:'categories',localField:'categoryID',foreignField:'_id',as:'category'}}
        let unwindBrandStage={$unwind:'$brand'}
        let unwindCategoryStage={$unwind:'$category'}
        let projectionStage={$project:{'brandID':0,'categoryID':0,'brand._id':0,'category._id':0}}
        const data=await ProductModel.aggregate([
            matchingStage,
            joinWithBrandStage, joinWithCategoryStage,
            unwindBrandStage,unwindCategoryStage,
            projectionStage
        ])
        return {status:'success',data:data}

    }catch (e){
        return {status:'failed',data:e.toString()}
    }
}
const ListByRemarkService=async (req)=>{
    try{
        const Remark=req.params.Remark;
        let matchingStage={$match:{remark:Remark}}
        let joinWithBrandStage={$lookup:{from:'brands',localField:'brandID',foreignField:'_id',as:'brand'}}
        let joinWithCategoryStage={$lookup:{from:'categories',localField:'categoryID',foreignField:'_id',as:'category'}}
        let unwindBrandStage={$unwind:'$brand'}
        let unwindCategoryStage={$unwind:'$category'}
        let projectionStage={$project:{'brandID':0,'categoryID':0,'brand._id':0,'category._id':0}}
        const data=await ProductModel.aggregate([
            matchingStage,
            joinWithBrandStage, joinWithCategoryStage,
            unwindBrandStage,unwindCategoryStage,
            projectionStage
        ])
        return {status:'success',data:data}

    }catch (e){
        return {status:'failed',data:e.toString()}
    }
}

const ListBySimilarService=async (req)=>{
    try{
        const CategoryID=new ObjectId(req.params.CategoryID);
        let matchingStage={$match:{categoryID:CategoryID}}
        let limitStage={$limit:10}
        let joinWithBrandStage={$lookup:{from:'brands',localField:'brandID',foreignField:'_id',as:'brand'}}
        let joinWithCategoryStage={$lookup:{from:'categories',localField:'categoryID',foreignField:'_id',as:'category'}}
        let unwindBrandStage={$unwind:'$brand'}
        let unwindCategoryStage={$unwind:'$category'}
        let projectionStage={$project:{'brandID':0,'categoryID':0,'brand._id':0,'category._id':0}}
        const data=await ProductModel.aggregate([
            matchingStage,limitStage,
            joinWithBrandStage, joinWithCategoryStage,
            unwindBrandStage,unwindCategoryStage,
            projectionStage
        ])
        return {status:'success',data:data}

    }catch (e){
        return {status:'failed',data:e.toString()}
    }
}

const ListByKeywordService=async ()=>{

}


const ProductDetailService=async ()=>{

}

const ReviewListService=async ()=>{

}

module.exports={
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByBrandService,
    ListByCategoryService,
    ListBySimilarService,
    ListByKeywordService,
    ListByRemarkService,
    ProductDetailService,
    ReviewListService
}
