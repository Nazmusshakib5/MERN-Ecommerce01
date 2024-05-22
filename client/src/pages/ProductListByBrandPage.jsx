import Layout from "../components/layout/Layout.jsx";
import ProductList from "../components/product/ProductList.jsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import productStore from "../store/ProductStore.js";


const ProductListByBrandPage = () => {
    const {ProductListByBrandRequest}=productStore()
    const {id}=useParams();

    useEffect(() => {
        (async ()=>{
            await ProductListByBrandRequest(id);
        })()
    }, []);
    return (
        <Layout>
            <ProductList/>
        </Layout>
    );
};

export default ProductListByBrandPage;