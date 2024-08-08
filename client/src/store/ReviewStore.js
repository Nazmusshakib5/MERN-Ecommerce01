import {create} from 'zustand'
import axios from 'axios'
import {UnAuthorized} from "../utility/Utility.js";

const ReviewStore=create((set)=>({
    isReviewBtn:false,
    ReviewFormData:{des:'',rating:'5',productID:''},
    ReviewFormOnChange:( name,value)=>{
        set((state)=>({
            ReviewFormData:{
                ...state.ReviewFormData,
                [name]:value
            }
        }))
    },
    ReviewCreateRequest:async (bodyData)=>{
        try {
            set({isReviewBtn:true})
            let res=await axios.post(`${window.location.origin}/api/v1/CreateReview`,bodyData)
            set({isReviewBtn:false})
            return res.data['status']==='success';
        }catch (e) {
            UnAuthorized(e.response.status)
        }
    }
}))

export default ReviewStore