import productStore from "../../store/ProductStore.js";
import CategoriesSkeleton from "../../skeleton/CategoriesSkeleton.jsx";


const Categories = () => {
    const {CategoryList}=productStore()
    return (
        <div>
            {
                CategoryList===null?(<CategoriesSkeleton/>):('')
            }
        </div>
    );
};

export default Categories;