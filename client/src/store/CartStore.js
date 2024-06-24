import {create} from 'zustand'
import axios from 'axios'
import {UnAuthorized} from '../utility/Utility.js'
const CartStore=create((set)=>({
        isCartButton:false,
        CartItem:{
            productID:"",
            color:"",
            size:""
        },
        CartItemOnChange:(name,value)=>{
           set((state)=>({
               CartItem:{
                   ...state.CartItem,
                   [name]:value
               }
           }))
        },
        SaveCartItemRequest:async (Cart,productId,quantity)=>{
            try{
                set({isCartButton:true})
                Cart.productID=productId;
                Cart.qty=quantity;
                let res=await axios.post(`/api/v1/SaveCartList`,Cart)
                set({isCartButton:false})
                return res.data['status']==='success';
            }catch (e) {
                UnAuthorized(e.response.status)
            }
        },

        CartList:null,
        CartCount:0,
        ReadCartListRequest:async ()=>{
            try {
                let res=await axios.get(`/api/v1/ReadCartList`)
                set({CartList:res.data['data']})
                set({CartCount:res.data['data'].length})
                return res.data['status']==='success';
            }catch (e) {
                UnAuthorized(e.response.status)
            }
        }

    }
))

export default CartStore