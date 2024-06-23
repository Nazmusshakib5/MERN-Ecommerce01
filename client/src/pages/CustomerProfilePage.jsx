import ProfileForm from "../components/user/ProfileForm.jsx";
import userStore from "../store/UserStore.js";
import {useEffect} from "react";

const CustomerProfilePage = () => {
    const {UserProfileRequest}=userStore()
    useEffect(() => {
        (async ()=>{
            await UserProfileRequest()
        })()
    }, []);
    return (
        <div>
            <ProfileForm/>
        </div>
    );
};

export default CustomerProfilePage;