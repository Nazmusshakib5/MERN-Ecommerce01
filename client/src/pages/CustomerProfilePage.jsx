import ProfileForm from "../components/user/ProfileForm.jsx";
import userStore from "../store/UserStore.js";
import {useEffect} from "react";
import Layout from "../components/layout/Layout.jsx";

const CustomerProfilePage = () => {
    const {UserProfileRequest}=userStore()
    useEffect(() => {
        (async ()=>{
            await UserProfileRequest()
        })()
    }, []);
    return (
        <Layout>
            <ProfileForm/>
        </Layout>
    );
};

export default CustomerProfilePage;