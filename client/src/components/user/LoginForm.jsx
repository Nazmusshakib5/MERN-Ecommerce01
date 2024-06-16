import SubmitButton from "./SubmitButton.jsx";
import UserStore from "../../store/UserStore.js";
import ValidationHelper from "../../utility/ValidationHelper.js";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm = () => {
    let {LoginFormValue,LoginFormOnChange,UserEmailRequest}=UserStore()
    let navigate=useNavigate();
    const HandleEmail=async ()=>{
        if(!ValidationHelper.IsEmail(LoginFormValue.email)){
          toast.error("Valid Email Address Required")
        }
        else {
            let responseData= await UserEmailRequest(LoginFormValue.email)
            responseData?navigate('/otp'):toast.error('SomeThing Went Wrong')
        }
    }
    return (
        <div className="container section">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <div className="card p-5">
                        <h4>Enter Your Email</h4>
                        <p>A verification code will be sent to the email address you provide</p>
                        <input value={LoginFormValue.email} placeholder="Email Address" type="email"
                               onChange={(e)=>LoginFormOnChange("email",e.target.value)} className="form-control"/>
                        <SubmitButton onClick={HandleEmail} className="btn mt-3 btn-success" text="Next"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;