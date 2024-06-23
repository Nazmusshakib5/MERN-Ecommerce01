import productStore from "../../store/ProductStore.js";
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings.js";
import ProductSkeleton from "../../skeleton/ProductSkeleton.jsx";
import {useEffect, useState} from "react";


const ProductList = () => {
    const [filter,setFilter]=useState({brandID:'',categoryID:'',priceMax:'',priceMin:''})
    const {ProductLists,ProductListByFiltering,BrandList,BrandListRequest,CategoryList,CategoryListRequest} = productStore()

    const manageFilter= (name,value)=>{
        setFilter((data)=>({
            ...data,
            [name]:value
        }))
    }

    useEffect(() => {
        (async ()=>{
            BrandList===null && await BrandListRequest()
            CategoryList===null && await CategoryListRequest()
            let isFilterEmpty=Object.values(filter).every(val=>val==='')
            !isFilterEmpty && await ProductListByFiltering(filter)
        })()
    }, [filter]);
    return (
        <div className='container mt-2'>
            <div className='row'>
                <div className='col-md-3 p-2'>
                    <div className='card vh-100 p-3 shadow-sm'>
                        <label className='form-label mt-3'>Brands</label>
                        <select value={filter.brandID} onChange={(e)=>{manageFilter('brandID',e.target.value)}} className='form-control form-select'>
                            {BrandList && BrandList.map((item,i)=> {
                               return (<option key={i} value={item['_id']}>{item['brandName']}</option>)
                            })}
                        </select>
                        <label className='form-label mt-3'>Categories</label>
                        <select value={filter.categoryID} onChange={(e)=>{manageFilter('categoryID',e.target.value)}} className='form-control form-select'>
                            {CategoryList && CategoryList.map((item,i)=> {
                                return (<option key={i} value={item['_id']}>{item['categoryName']}</option>)
                            })}
                        </select>
                        <label className='form-label mt-3'>Maximum Price ${filter.priceMax}</label>
                        <input value={filter.priceMax} onChange={(e)=>{manageFilter('priceMax',e.target.value)}} type='range' className='form-range' min={0} max={100000} step={1000}/>
                        <label className='form-label mt-3'>Minimum Price ${filter.priceMin}</label>
                        <input value={filter.priceMin} onChange={(e)=>{manageFilter('priceMin',e.target.value)}} type='range' className='form-range' min={0} max={100000} step={1000}/>
                    </div>
                </div>
                <div className='col-md-9 p-2'>
                    {
                        ProductLists === null ? (<ProductSkeleton/>) : (
                            <div className="container">
                                <div className="row">
                                    {

                                        ProductLists.map((item, i) => {
                                            let price = <p className="bodyMedium text-secondary my-1">{item['price']}</p>
                                            if (item['discount']) {
                                                price = <p className="bodyMedium text-secondary my-1">
                                                    <del>{item['price']}</del>
                                                    <span style={{marginLeft: '10px'}}>{item['discountPrice']}</span></p>
                                            }
                                            return (<div key={i} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                                <Link to={`/Details/${item['_id']}`} className="card shadow-sm h-100 rounded-3 bg-white">
                                                    <img className="w-100 rounded-top-2" src={item['image']}/>
                                                    <div className="card-body">
                                                        <p className="bodySmal text-secondary my-1">{item['title']}</p>
                                                        <p className="bodyMedium text-dark my-1">{price} </p>
                                                        <StarRatings rating={parseFloat(item['star'])} starRatedColor="red"
                                                                     starDimension="15px"
                                                                     starSpacing="2px"/>
                                                    </div>
                                                </Link>
                                            </div>)
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }

                </div>

            </div>

        </div>
    )
        ;
};

export default ProductList;

