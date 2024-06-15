import FeatureStore from "../../store/FeatureStore.js";
import LegalSkeleton from "../../skeleton/LegalSkeleton.jsx";
import parse from 'html-react-parser'
const LegalContents = () => {
    const {LegalList}=FeatureStore()
    return (
        <div>
            {
                LegalList===null?(<LegalSkeleton/>):(<div className='container mt-5'>
                    {parse(LegalList[0]['description'])}
                </div>)
            }

        </div>
    );
};

export default LegalContents;