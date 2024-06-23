import UserStore from "../../store/UserStore.js";
import SubmitButton from "./SubmitButton.jsx";
import ProfileSkeleton from "../../skeleton/ProfileSkeleton.jsx";
import {useNavigate} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import toast from "react-hot-toast";
const ProfileForm = () => {
    const navigate=useNavigate()
    const {ProfileData,ProfileDataOnChange,ProfileDataOnSave}=UserStore()
    let isProfileEmpty=Object.values(ProfileData).every(val=>val==='')
    let ProfileDataUpdate= (name,value)=>{
        ProfileDataOnChange(name,value)
    }
    let ProfileDataSave=async ()=>{
        let res=await ProfileDataOnSave(ProfileData)
        if(res){
            toast.success("Profile Updated Successfully")
        }
    }
    if(isProfileEmpty){
        return <ProfileSkeleton/>
    }
    else {
        return (
        <div className="container mt-5">
            <Toaster position="bottom-center"/>
            <div className="card p-5 rounded-3">
                <div className="d-flex justify-content-between">
                    <h6>Customer Details</h6>
                    <i className="bi text-dark bodyXLarge bi-person-fill"></i>
                </div>
                <hr/>
                <div className="row mb-4">
                    <div className="col-md-3 p-2">
                    <label className="form-label">Customer Name </label>
                        <input value={ProfileData['cus_name']}
                               onChange={(e) => ProfileDataUpdate('cus_name', e.target.value)}
                               type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Customer Phone </label>
                        <input value={ProfileData['cus_phone']}
                               onChange={(e) => ProfileDataUpdate('cus_phone', e.target.value)}
                               type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Customer Fax </label>
                        <input value={ProfileData['cus_fax']}
                               onChange={(e) => ProfileDataUpdate('cus_fax', e.target.value)}
                               type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Customer Country </label>
                        <input value={ProfileData['cus_country']}
                               onChange={(e) => ProfileDataUpdate('cus_country', e.target.value)}
                               type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Customer City </label>
                        <input value={ProfileData['cus_city']}
                               onChange={(e) => ProfileDataUpdate('cus_city', e.target.value)}
                               type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Customer State </label>
                        <input value={ProfileData['cus_state']}
                               onChange={(e) => ProfileDataUpdate('cus_state', e.target.value)}
                               type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Customer Post Code </label>
                        <input value={ProfileData['cus_postcode']}
                               onChange={(e) => ProfileDataUpdate('cus_postcode', e.target.value)}
                               type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Customer Address</label>
                        <input value={ProfileData['cus_add']}
                               onChange={(e) => ProfileDataUpdate('cus_add', e.target.value)}
                               type="text" className="form-control "/>
                    </div>
                </div>
                <h6>Shipping Details</h6>
                <hr/>
                <div className="row">
                    <div className="col-md-3 p-2">
                        <label className="form-label">Shipping Name </label>
                        <input value={ProfileData['ship_name']}
                               onChange={(e) => ProfileDataUpdate('ship_name', e.target.value)}
                               type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Shipping Phone </label>
                        <input value={ProfileData['ship_phone']}
                               onChange={(e) => ProfileDataUpdate('ship_phone', e.target.value)}
                               type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Shipping Country </label>
                        <input value={ProfileData['ship_country']}
                               onChange={(e) => ProfileDataUpdate('ship_country', e.target.value)}
                               type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Shipping City </label>
                        <input value={ProfileData['ship_city']}
                               onChange={(e) => ProfileDataUpdate('ship_city', e.target.value)}
                               type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Shipping State </label>
                        <input value={ProfileData['ship_state']}
                               onChange={(e) => ProfileDataUpdate('ship_state', e.target.value)}
                               type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Shipping Post Code </label>
                        <input value={ProfileData['ship_postcode']}
                               onChange={(e) => ProfileDataUpdate('ship_postcode', e.target.value)}
                               type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Shipping Address</label>
                        <input value={ProfileData['ship_add']}
                               onChange={(e) => ProfileDataUpdate('ship_add', e.target.value)}
                               type="text" className="form-control "/>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-3 p-2">
                        <SubmitButton onClick={ProfileDataSave} text="Save" className="btn btn-success"/>
                    </div>
                </div>
            </div>
        </div>
    )}
};

export default ProfileForm;