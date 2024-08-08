import {create} from 'zustand'
import axios from 'axios'
import {UnAuthorized} from "../utility/Utility.js";

const WishStore=create((set)=>({
        isWishButton:false,
        SaveWishItemRequest:async (productId)=>{
            try {
                set({isWishButton:true})
                let res= await axios.post(`${window.location.origin}/api/v1/SaveWishList`,{productID:productId})
                set({isWishButton:false})
                return res.data['status']==='success'

            }catch (e) {
                UnAuthorized(e.response.status)
            }
        },
        WishList:null,
        WishCount:0,
        ReadWishListRequest:async ()=>{
            try {
                set({WishList:null})
                let res=await axios.get(`${window.location.origin}/api/v1/ReadWishList`)
                set({WishList:res.data['data']})
                set({WishCount:res.data['data'].length})
                return res.data['status']==='success';
            }catch (e) {
                UnAuthorized(e.response.status)
            }
        },

        RemoveWishList:async (productID)=>{
            try {
                let res=await axios.post(`${window.location.origin}/api/v1/RemoveWishList`,{productID:productID})
                return res.data['status']==='success';
            }catch (e) {
                UnAuthorized(e.response.status)
            }
        }
    }
))

export default WishStore;