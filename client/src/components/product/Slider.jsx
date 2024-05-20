import productStore from "../../store/ProductStore.js";
import SliderSkeleton from "../../skeleton/SliderSkeleton.jsx";


const Slider = () => {
    const {SliderList}=productStore()

    return (
        <div>
            {
                SliderList===null?(<SliderSkeleton/>):('')
            }
        </div>
    );
};

export default Slider;