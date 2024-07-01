import Layout from "../components/layout/Layout.jsx";
import Carts from "../components/cart/Carts.jsx";
import CartStore from "../store/CartStore.js";
import {useEffect} from "react";

const CartPage = () => {
    const {CartList,ReadCartListRequest}=CartStore()
    useEffect(() => {
        (async ()=>{
            await ReadCartListRequest()
        })()
    }, []);
    console.log(CartList)
    return (
        <Layout>
            <Carts/>
        </Layout>
    );
};

export default CartPage;