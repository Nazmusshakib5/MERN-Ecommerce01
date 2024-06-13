import Layout from "../components/layout/Layout.jsx";
import ProductDetails from "../components/product/ProductDetails.jsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import productStore from "../store/ProductStore.js";


const ProductDetailsPage = () => {
    const {ProductDetailsList,ProductReviewsList}=productStore()
    const {id}=useParams()

    useEffect(() => {
        (async ()=>{
        await ProductDetailsList(id)
        await ProductReviewsList(id)
        })()
    }, []);
    return (
        <Layout>
            <ProductDetails/>
        </Layout>
    );
};

export default ProductDetailsPage;