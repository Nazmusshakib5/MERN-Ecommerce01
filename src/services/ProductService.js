

const BrandModel=require('../models/BrandModel')
const CategoryModel=require('../models/CategoryModel')
const ProductDetailModel=require('../models/ProductDetailModel')
const ProductModel=require('../models/ProductModel')
const ProductReviewModel=require('../models/ProductReviewModel')
const ProductSliderModel=require('../models/ProductSliderModel')


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

const ListByBrandService=async ()=>{

}

const ListByCategoryService=async ()=>{

}

const ListBySimilarService=async ()=>{

}

const ListByKeywordService=async ()=>{

}


const ListByRemarkService=async ()=>{

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
