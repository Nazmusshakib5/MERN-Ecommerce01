const {
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
} = require('../services/ProductService')




// Retrieving List data

exports.ProductBrandList=async (req,res)=>{
    const data=await BrandListService()
    return  res.status(200).json(data);
}

exports.ProductCategoryList=async (req,res)=>{
    const data=await CategoryListService()
    return  res.status(200).json(data);
}

exports.ProductSliderList=async (req,res)=>{
    const data=await SliderListService()
    return  res.status(200).json(data);
}

//Filtering BY brand Category similar  keyword remark

exports.ProductListByBrand=async (req,res)=>{

}

exports.ProductListByCategory=async (req,res)=>{

}

exports.ProductListBySimilar=async (req,res)=>{

}

exports.ProductListByKeyword=async (req,res)=>{

}

exports.ProductListByRemark=async (req,res)=>{

}

//specific product details

exports.ProductDetails=async (req,res)=>{

}


//  fetching and creating Review

exports.ProductReviewList=async (req,res)=>{

}
