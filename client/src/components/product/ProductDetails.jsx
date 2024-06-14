import ProductStore from "../../store/ProductStore.js";
import ProductImages from "./ProductImages.jsx";
import DetailsSkeleton from "../../skeleton/DetailsSkeleton.jsx";
import { useState} from "react";
import parse from 'html-react-parser'
import ReviewList from "./ReviewList.jsx";

const ProductDetails = () => {
    const {details}=ProductStore()
    const [quantity,setQuantity]=useState(1)
    const QuantityPlus=()=>{
        setQuantity(quantity=>quantity+1)
    }
    const QuantityMinus=()=>{
        if(quantity>1){
            setQuantity(quantity=>quantity-1)
        }
    }
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
                                details[0]['discount']?(<span className='bodyLarge'>Price : <strike className="text-secondary">{details[0]['price']}</strike>{details[0]['discountPrice']}</span>):(details[0]['price'])
                            }
                            <div className="row">
                                <div className="col-4 p-2">
                                    <label className="bodySmal">Size</label>
                                    <select className="form-control my-2 form-select">
                                        {details[0]['detail']['size'].split(',').map((item,i)=> {
                                            return <option key={i} value={item}>{item}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="col-4 p-2">
                                    <label className="bodySmal">Color</label>
                                    <select className="form-control my-2 form-select">
                                        {details[0]['detail']['color'].split(',').map((item,i)=> {
                                            return <option key={i} value={item}>{item}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="col-4 p-2">
                                    <label className="bodySmal">Quantity</label>
                                    <div className="input-group my-2">
                                        <button className="btn btn-outline-secondary"
                                                onClick={QuantityMinus}>-</button>
                                        <input value={quantity} type="text" className="form-control bg-light text-center" readOnly/>
                                        <button onClick={QuantityPlus} className="btn btn-outline-secondary">+</button>
                                    </div>
                                </div>
                                <div className="col-4 p-2">
                                    <button className="btn w-100 btn-success">Add to Cart</button>
                                </div>
                                <div className="col-4 p-2">
                                    <button className="btn w-100 btn-success">Add to Wish</button>
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
                <div className='col-12 text-center mt-5 bodyXLarge'>
                    No Details Available
                </div>
            </div>))}

        </div>
    );
};

export default ProductDetails;