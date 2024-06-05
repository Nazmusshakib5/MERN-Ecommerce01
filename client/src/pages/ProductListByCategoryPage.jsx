import Layout from "../components/layout/Layout.jsx";
import ProductList from "../components/product/ProductList.jsx";
import productStore from "../store/ProductStore.js";
import {useParams} from "react-router-dom";
import {useEffect} from "react";


const ProductListByCategoryPage = () => {
    const {ProductListByCategoryRequest}=productStore()
    const {id}=useParams();

    useEffect(() => {
        (async ()=>{
            await ProductListByCategoryRequest(id);
        })()
    }, [id]);
    return (
        <Layout>
            <ProductList/>
        </Layout>
    );
};

export default ProductListByCategoryPage;