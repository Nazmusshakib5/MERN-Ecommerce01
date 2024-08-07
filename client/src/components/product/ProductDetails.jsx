import ProductStore from "../../store/ProductStore.js";
import ProductImages from "./ProductImages.jsx";
import DetailsSkeleton from "../../skeleton/DetailsSkeleton.jsx";
import {useEffect, useState} from "react";
import parse from 'html-react-parser'
import ReviewList from "./ReviewList.jsx";
import CartButton from "../cart/CartButton.jsx";
import CartStore from "../../store/CartStore.js";
import toast from "react-hot-toast";
import WishButton from "../wish/WishButton.jsx";
import WishStore from "../../store/WishStore.js";
import NoProduct from "../../assets/images/no-results.png"


const ProductDetails = () => {
    const {details,CategoryListRequest}=ProductStore()
    const {CartItem,SaveCartItemRequest,CartItemOnChange,ReadCartListRequest}=CartStore()
    const {SaveWishItemRequest,ReadWishListRequest}=WishStore()
    const [quantity,setQuantity]=useState(1)
    useEffect(() => {
        (async ()=>{
            await CategoryListRequest()
        })()
    }, []);

    const QuantityPlus=()=>{
        setQuantity(quantity=>quantity+1)
    }
    const QuantityMinus=()=>{
        if(quantity>1){
            setQuantity(quantity=>quantity-1)
        }
    }

    const SaveCart=async (productId,quantity)=>{
        let res=await SaveCartItemRequest(CartItem,productId,quantity)
        if(res){
            toast.success('Added to Cart')
            await ReadCartListRequest()
        }
        else {

            toast.error('Select Color Size Quantity')
        }
    }
    const SaveWish=async (productId)=>{
        let res=await SaveWishItemRequest(productId)
        if(res){
            toast.success('Added to Wish')
            await ReadWishListRequest()
        }
        else {
            toast.error('Failed to adding wish')
        }
    }
    console.log(CartItem)
    return (
        <div>
            {details===null?(<DetailsSkeleton/>):(details.length>0?(<div>
                <div className="container mt-2">
                    <div className="row">
                        <div className="col-md-7 p-3">
                            <ProductImages/>
                        </div>
                        <div className="col-md-5 p-3">
                            <h4>{details[0]['title']}</h4>
                            <p className="text-muted bodySmal my-1">{details[0]['category']['categoryName']}</p>
                            <p className="text-muted bodySmal my-1">{details[0]['brand']['brandName']}</p>
                            <p className="bodySmal mb-2 mt-1">{details[0]['shortDes']}</p>
                            {
                                details[0]['discount']?(<span className='bodyLarge'>Price : <strike
                                    className="text-secondary">{details[0]['price']}
                                </strike>{details[0]['discountPrice']}</span>):(details[0]['price'])
                            }
                            <div className="row">
                                <div className="col-4 p-2">
                                    <label className="bodySmal">Size</label>
                                    <select onChange={(e) => CartItemOnChange('size', e.target.value)}
                                            className="form-control my-2 form-select">
                                        <option>Size</option>
                                        {details[0]['detail']['size'].split(',').map((item, i) => {
                                            return <option key={i} value={item}>{item}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="col-4 p-2">
                                    <label className="bodySmal">Color</label>
                                    <select onChange={(e) => CartItemOnChange('color', e.target.value)}
                                            className="form-control my-2 form-select">
                                        <option>Color</option>
                                        {details[0]['detail']['color'].split(',').map((item, i) => {
                                            return <option key={i} value={item}>{item}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="col-4 p-2">
                                    <label className="bodySmal">Quantity</label>
                                    <div className="input-group my-2">
                                        <button className="btn btn-outline-secondary"
                                                onClick={QuantityMinus}>-</button>
                                        <input value={quantity} onChange={(e)=>CartItemOnChange('qty',e.target.value)}
                                               type="text" className="form-control bg-light text-center" readOnly/>
                                        <button onClick={QuantityPlus} className="btn btn-outline-secondary">+</button>
                                    </div>
                                </div>
                                <div className="col-4 p-2">
                                    <CartButton onClick={(e)=>SaveCart(details[0]['_id'],quantity)} text="Add to Cart"
                                                className="btn w-100 btn-success"/>
                                </div>
                                <div className="col-4 p-2">
                                    <WishButton onClick={(e)=>SaveWish(details[0]['_id'])} text="Add to Wish"
                                                className="btn w-100 btn-success"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="Speci-tab" data-bs-toggle="tab"
                                        data-bs-target="#Speci-tab-pane"
                                        type="button" role="tab" aria-controls="Speci-tab-pane"
                                        aria-selected="true">Specifications
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="Review-tab" data-bs-toggle="tab"
                                        data-bs-target="#Review-tab-pane"
                                        type="button" role="tab" aria-controls="Review-tab-pane"
                                        aria-selected="false">Review
                                </button>
                            </li>

                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="Speci-tab-pane" role="tabpanel"
                                 aria-labelledby="Speci-tab"
                                 tabIndex="0">{parse(details[0]['detail']['des'])}</div>
                            <div className="tab-pane fade" id="Review-tab-pane" role="tabpanel"
                                 aria-labelledby="Review-tab"
                                 tabIndex="0">
                                <ReviewList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>):(<div className="row">
                <div className='col-12 d-flex justify-content-center'>
                        <img alt="No products available" className="product-img-md" src={NoProduct}/>
                </div>
            </div>))}

        </div>
    );
};

export default ProductDetails;