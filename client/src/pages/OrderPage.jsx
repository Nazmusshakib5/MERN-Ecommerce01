import Orders from "../components/product/Orders.jsx";
import Layout from "../components/layout/Layout.jsx";
import {useEffect} from "react";
import CartStore from "../store/CartStore.js";

const OrderPage = () => {
    const {InvoiceListRequest}=CartStore()
    useEffect(() => {
        (async ()=>{
            await InvoiceListRequest()
        })()
    }, []);
    return (
        <Layout>
            <Orders/>
        </Layout>
    );
};

export default OrderPage;