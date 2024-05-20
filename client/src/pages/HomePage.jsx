import Layout from '../components/layout/Layout.jsx'
import Brands from "../components/product/Brands.jsx";
import Slider from "../components/product/Slider.jsx";
import Categories from "../components/product/Categories.jsx";
import Feature from "../components/features/Feature.jsx";
import Products from "../components/product/Products.jsx";
import productStore from "../store/ProductStore.js";
import featureStore from "../store/FeatureStore.js";
import {useEffect} from "react";


const HomePage = () => {
    const {BrandListRequest,CategoryListRequest,SliderListRequest,ProductListByRemarkRequest} =productStore()
    const {FeatureListRequest} =featureStore()
    useEffect(() => {
        (async ()=>{
            await BrandListRequest()
            await CategoryListRequest()
            await SliderListRequest()
            await ProductListByRemarkRequest('new')
            await FeatureListRequest()
        })()
    }, []);
    return (
        <Layout>
            <Slider/>
            <Feature/>
            <Brands/>
            <Categories/>
            <Products/>
        </Layout>
    );
};

export default HomePage;