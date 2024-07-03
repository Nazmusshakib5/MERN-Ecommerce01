import React, {useEffect} from 'react';
import CartStore from "../../store/CartStore.js";
import ProductSkeleton from "../../skeleton/ProductSkeleton.jsx";
import SubmitButton from "../user/SubmitButton.jsx";
import {Link} from "react-router-dom";

const OrderProductDetails = () => {
    const {InvoiceProductList}=CartStore()
    console.log(InvoiceProductList)

    if(InvoiceProductList===null){
        return(
            <div>
                <ProductSkeleton/>
            </div>
        )
    }
    else {
        return (
            <div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card p-4">
                                <ul className="list-group list-group-flush">
                                    {
                                        InvoiceProductList && InvoiceProductList.map((item, i) => {
                                            return (<div key={i} className="card mb-lg-3 mb-md-3 p-lg-3 p-md-3 p-3 mb-2">
                                                <li className="listgroup-item d-flex flex-column flex-md-row flex-lg-row
                                                 justify-content-md-between">
                                                    <img alt="image" className="rounded-1" width="90" height="auto"
                                                         src={item['product']['image']}/>
                                                    <div className="ms-2 me-auto">
                                                        <p className="fw-lighter m-0">{item['product']['title']}</p>
                                                        <p className="fw-lighter my-1">
                                                            <b>Qty</b>: {item['qty']},
                                                            <b>Size</b>: {item['size']},
                                                            <b>Color</b>: {item['color']}</p>
                                                    </div>
                                                    <Link to={`/orderDetails/${item['_id']}`} className="btn ms-lg-3 ms-md-3 ms-2
                                                    btn-success my-auto" >Review</Link>
                                                </li>
                                            </div>)
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default OrderProductDetails;