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
        },

        Price:0,
        Vat:0,
        Payable:0,
        CalculateCartRequest:async ()=>{
            try {
                let res=await axios.get(`/api/v1/ReadCartList`)
                let total=0
                res.data['data'].forEach((item)=>{
                    if(item['WishProduct']['discount']){
                        total+=parseInt(item['WishProduct']['discountPrice'])*parseInt(item['qty'])
                    }
                    else {
                        total+=parseInt(item['WishProduct']['price'])*parseInt(item['qty'])
                    }
                })
                let Vat=0.05*total
                let Payable=total+Vat
                set({Price:total,Payable:Payable,Vat:Vat})
            }catch (e) {
                UnAuthorized(e.response.status)
            }
        },

        RemoveCartListRequest:async (productID)=>{
            try {
                let res=await axios.post(`/api/v1/RemoveCartList`,{productID:productID})
                return res.data['status']==='success';
            }catch (e) {
                UnAuthorized(e.response.status)
            }
        },

        CrateInvoiceRequest:async ()=>{
            try {
                set({isCartButton:true})
                let res=await axios.get(`/api/v1/CreateInvoice`)
                set({isCartButton:false})
                window.location.href=res.data['data']['GatewayPageURL']
            }catch (e) {
                UnAuthorized(e.response.status)
            }
        },


        InvoiceList:null,
        InvoiceListRequest:async ()=>{
            try {
                let res=await axios.get(`/api/v1/InvoiceList`)
                set({InvoiceList:res.data['data']})
            }catch (e) {
                UnAuthorized(e.response.status)
            }
        },


        InvoiceProductList:null,
        InvoiceProductListRequest:async (invoiceID)=>{
            try {
                let res=await axios.get(`/api/v1/InvoiceProductList/${invoiceID}`)
                set({InvoiceProductList:res.data['data']})
            }catch (e) {
                UnAuthorized(e.response.status)
            }
        },
    }
))

export default CartStore