import SubmitButton from "./SubmitButton.jsx";
import UserStore from "../../store/UserStore.js";
import {useNavigate} from "react-router-dom";
import ValidationHelper from "../../utility/ValidationHelper.js";
import toast from "react-hot-toast";

const VerifyForm = () => {
    let {OtpFormValue,OtpFormOnChange,UserOtpRequest}=UserStore()
    let navigate=useNavigate();
    const HandleOtp=async ()=>{
        if(ValidationHelper.IsOtp(OtpFormValue.otp)===false){
            toast.error("Valid Otp Required")
        }
        else {
            let responseData= await UserOtpRequest(OtpFormValue.otp)
            responseData?navigate('/'):toast.error('SomeThing Went Wrong')
        }
    }
    return (
        <div className="container section">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <div className="card p-5">
                        <h4>Enter Verification Code</h4>
                        <p>A verification code has been sent to the email address you provide</p>
                        <input value={OtpFormValue.otp} onChange={(e)=>OtpFormOnChange("otp",e.target.value)}
                               placeholder="Verification" type="text" className="form-control"/>
                        <SubmitButton onClick={HandleOtp} className="btn mt-3 btn-success" text="Submit"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyForm;