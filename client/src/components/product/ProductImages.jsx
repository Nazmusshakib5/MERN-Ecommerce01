import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'
import ProductStore from "../../store/ProductStore.js";

const ProductImages = () => {
    const {details}=ProductStore()
    const images = [
        {original: details[0]['detail']['img1'],thumbnail: details[0]['detail']['img1']},
        {original: details[0]['detail']['img2'],thumbnail: details[0]['detail']['img2']},
        {original: details[0]['detail']['img3'],thumbnail: details[0]['detail']['img3']},
        {original: details[0]['detail']['img4'],thumbnail: details[0]['detail']['img4']},
        {original: details[0]['detail']['img5'],thumbnail: details[0]['detail']['img5']},
        {original: details[0]['detail']['img6'],thumbnail: details[0]['detail']['img6']},
        {original: details[0]['detail']['img7'],thumbnail: details[0]['detail']['img7']},
        {original: details[0]['detail']['img8'],thumbnail: details[0]['detail']['img8']},
    ];
    return (
        <div>
            <ImageGallery autoPlay={true} items={images} />;
        </div>
    );
};

export default ProductImages;