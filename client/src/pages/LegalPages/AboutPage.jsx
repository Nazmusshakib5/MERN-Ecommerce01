import Layout from "../../components/layout/Layout.jsx";
import LegalContents from "../../components/features/LegalContents.jsx";
import FeatureStore from "../../store/FeatureStore.js";
import {useEffect} from "react";


const AboutPage = () => {
    const {LegalListRequest}=FeatureStore()

    useEffect(() => {
        (async ()=>{
            await LegalListRequest('about')
        })()
    }, []);
    return (
        <Layout>
            <LegalContents/>
        </Layout>
    );
};

export default AboutPage;