import Layout from '../components/layout/Layout.jsx'
import SliderSkeleton from "../skeleton/SliderSkeleton.jsx";
import ProductSkeleton from "../skeleton/ProductSkeleton.jsx";
import FeatureSkeleton from "../skeleton/FeatureSkeleton.jsx";
import CategoriesSkeleton from "../skeleton/CategoriesSkeleton.jsx";
import BrandsSkeleton from "../skeleton/BrandsSkeleton.jsx";

const HomePage = () => {
    return (
        <Layout>
            <SliderSkeleton/>
            <FeatureSkeleton/>
            <CategoriesSkeleton/>
            <BrandsSkeleton/>
            <ProductSkeleton/>
        </Layout>
    );
};

export default HomePage;