import {create} from 'zustand'
import axios from 'axios'
import {GetEmail, SetEmail,UnAuthorized} from "../utility/Utility.js";
import Cookies from "js-cookie";

const UserStore=create((set)=>({
        isSubmitButton:false,
        LoginFormValue:{email:""},

        LoginFormOnChange: (name,value)=>{
            set((state)=>({
                LoginFormValue:{
                    ...state.LoginFormValue,
                    [name]:value
                }
            }))
        },

        OtpFormValue:{otp:""},

        OtpFormOnChange: (name,value)=>{
            set((state)=>({
                OtpFormValue:{
                    ...state.OtpFormValue,
                    [name]:value
                }
            }))
        },

        UserEmailRequest:async (email)=>{
            set({isSubmitButton:true})
            const res= await axios.post(`${window.location.origin}/api/v1/UserOtp/${email}`)
            SetEmail(email)
            set({isSubmitButton:false})
            return res.data['status']==='success';
        },

        UserOtpRequest:async (otp)=>{
            set({isSubmitButton:true})
            let email=GetEmail()
            const res= await axios.get(`${window.location.origin}/api/v1/VerifyLogin/${email}/${otp}`)
            set({isSubmitButton:false})
            return res.data['status']==='success';
        },
        IsLogin: ()=>{
            return  !!Cookies.get("token");
        },
        UserLogoutRequest:async ()=>{
            set({isSubmitButton:true})
            const res= await axios.get(`${window.location.origin}/api/v1/UserLogout`)
            set({isSubmitButton:false})
            return res.data['status']==='success';
        },
        ProfileData:{
            cus_city:"",
            cus_name:"",
            cus_phone:"",
            cus_fax:"",
            cus_country:"",
            cus_state:"",
            cus_postcode:"",
            cus_add:"",
            ship_name:"",
            ship_phone:"",
            ship_country:"",
            ship_city:"",
            ship_state:"",
            ship_postcode:"",
            ship_add:""
        },
        UserProfileRequest:async ()=>{
            try{
                const res=await axios.get(`${window.location.origin}/api/v1/ReadProfile`)
                set({ProfileData:res.data['data'][0] || {data:"a"}})
                return res.data['status']==='success';
            }catch (e) {
                UnAuthorized(e.response.status)
            }
        },
        ProfileDataOnChange:(name,value)=>{
            set((state)=>({
                ProfileData:{
                    ...state.ProfileData,
                    [name]:value
                }
            }))
        },
        ProfileDataOnSave:async (ProfileData)=>{
            try{
                set({isSubmitButton:true})
                const res=await axios.post(`${window.location.origin}/api/v1/CreateProfile`,ProfileData)
                set({isSubmitButton:false})
                return res.data['status']==='success';
            }catch (e) {
                UnAuthorized(e.response.status)
            }
        }
    }
))

export default UserStore
