import {create} from 'zustand'
import axios from 'axios'

const ProductStore=create((set)=>({
    BrandList:null,
    BrandListRequest:async ()=>{
        const res= await axios.get(`/api/v1/ProductBrandList`)
        if(res.data['status']==='success'){
            set({BrandList:res.data['data']})
        }
    },

    CategoryList:null,
    CategoryListRequest:async ()=>{
        const res= await axios.get(`/api/v1/ProductCategoryList`)
        if(res.data['status']==='success'){
            set({CategoryList:res.data['data']})
        }
    },

    SliderList:null,
    SliderListRequest:async ()=>{
        const res= await axios.get(`/api/v1/ProductSliderList`)
        if(res.data['status']==='success'){
            set({SliderList:res.data['data']})
        }
    },

    ProductListByRemark:null,
    ProductListByRemarkRequest:async (Remark)=>{
        const res= await axios.get(`/api/v1/ProductListByRemark/${Remark}`)
        if(res.data['status']==='success'){
            set({ProductListByRemark:res.data['data']})
        }
    },

    ProductLists:null,
    ProductListByBrandRequest:async (BrandId)=>{
        const res= await axios.get(`/api/v1/ProductListByBrand/${BrandId}`)
        if(res.data['status']==='success'){
            set({ProductLists:res.data['data']})
        }
    },
    ProductListByCategoryRequest:async (CategoryId)=>{
        const res= await axios.get(`/api/v1/ProductListByCategory/${CategoryId}`)
        if(res.data['status']==='success'){
            set({ProductLists:res.data['data']})
        }
    },
    ProductListByKeywordRequest:async (Keyword)=>{
        const res= await axios.get(`/api/v1/ProductListByKeyword/${Keyword}`)
        if(res.data['status']==='success'){
            set({ProductLists:res.data['data']})
        }
    },
    SearchProducts:'',
    SetSearchProducts:async (keyword)=>{
        set({SearchProducts:keyword})
    }

}))


export default ProductStore