import OrderProductDetails from "../components/product/OrderProductDetails.jsx";
import Layout from "../components/layout/Layout.jsx";
import CartStore from "../store/CartStore.js";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

const OrderProductDetailsPage = () => {
    const {InvoiceProductListRequest}=CartStore()
    let {invoiceID}=useParams()
    useEffect(() => {
        (async ()=>{
            await InvoiceProductListRequest(invoiceID)
        })()
    }, []);
    return (
        <Layout>
            <OrderProductDetails/>
        </Layout>
    );
};

export default OrderProductDetailsPage;