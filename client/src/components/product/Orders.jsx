import CartStore from "../../store/CartStore.js";
import Nodata from "../layout/Nodata.jsx";
import ProductSkeleton from "../../skeleton/ProductSkeleton.jsx";
import {Link} from "react-router-dom";

const Orders = () => {

    const {InvoiceList}=CartStore()

    if(InvoiceList===null){
        return(
            <div>
                <ProductSkeleton/>
            </div>
        )
    }
    else if(InvoiceList.length===0){
        return(
            <div>
                <Nodata/>
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
                                        InvoiceList && InvoiceList.map((item, i) => {
                                            return (<div key={i} className="card mb-lg-3 mb-md-3 p-lg-3 p-md-3 p-3 mb-2">
                                                <li className="listgroup-item d-flex flex-column flex-md-row flex-lg-row
                                                 justify-content-md-between">
                                                    <div>
                                                        <p>Date : {Date(item['createdAt'])}</p>
                                                        <p>Invoice No :{item['tran_id']} </p>
                                                        <p>Customer : <span>{item['cus_details']}</span></p>
                                                        <p>Shipping : <span>{item['ship_details']}</span></p>
                                                        <p>Payment :  <span>{item['payment_status']}</span></p>
                                                        <p>Delivery : <span>{item['delivery_status']}</span></p>
                                                    </div>
                                                    <Link to={`/orderDetails/${item['_id']}`} className="btn ms-lg-3 ms-md-3 ms-2
                                                    btn-success my-auto" >Details</Link>
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

export default Orders;