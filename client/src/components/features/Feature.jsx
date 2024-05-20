
import featureStore from "../../store/FeatureStore.js";
import FeatureSkeleton from "../../skeleton/FeatureSkeleton.jsx";


const Feature = () => {
    const {FeatureList}=featureStore()
    return (
        <div>
            {
                FeatureList===null?(<FeatureSkeleton/>):('')
            }
        </div>
    );
};

export default Feature;