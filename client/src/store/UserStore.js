import {create} from 'zustand'
import axios from 'axios'
import {GetEmail, SetEmail} from "../utility/Utility.js";
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
            const res= await axios.get(`/api/v1/UserOtp/${email}`)
            SetEmail(email)
            set({isSubmitButton:false})
            return res.data['status']==='success';
        },

        UserOtpRequest:async (otp)=>{
            set({isSubmitButton:true})
            let email=GetEmail()
            const res= await axios.get(`/api/v1/VerifyLogin/${email}/${otp}`)
            set({isSubmitButton:false})
            return res.data['status']==='success';
        },
        IsLogin: ()=>{
            return  !!Cookies.get("token");
        },
        UserLogoutRequest:async ()=>{
            set({isSubmitButton:true})
            const res= await axios.get(`/api/v1/UserLogout`)
            set({isSubmitButton:false})
            return res.data['status']==='success';
        }

    }

))

export default UserStore
