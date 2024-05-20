import productStore from "../../store/ProductStore.js";
import BrandsSkeleton from "../../skeleton/BrandsSkeleton.jsx";

const Brands = () => {
    const {BrandList}=productStore()
    return (
        <div>
            {
                BrandList===null?(<BrandsSkeleton/>):('')
            }
        </div>
    );
};

export default Brands;