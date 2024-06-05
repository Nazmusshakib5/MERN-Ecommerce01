import Layout from "../components/layout/Layout.jsx";
import ProductList from "../components/product/ProductList.jsx";
import productStore from "../store/ProductStore.js";
import {useParams} from "react-router-dom";
import {useEffect} from "react";


const ProductListByKeywordPage = () => {
    const {ProductListByKeywordRequest}=productStore()
    const {keyword}=useParams();

    useEffect(() => {
        (async ()=>{
            await ProductListByKeywordRequest(keyword);
        })()
    }, [keyword]);
    return (
        <Layout>
            <ProductList />
        </Layout>
    );
};

export default ProductListByKeywordPage;