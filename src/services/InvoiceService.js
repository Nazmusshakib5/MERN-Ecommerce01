const mongoose=require('mongoose');
const CartModel=require('../models/CartModel')
const ProfileModel=require('../models/ProfileModel')
const InvoiceModel=require('../models/InvoiceModel')
const InvoiceProductModel=require('../models/InvoiceProductModel')
const PaymentSettingModel=require('../models/PaymentSettingModel')
const ObjectId=mongoose.Types.ObjectId;
const formData=require('form-data');
const axios=require('axios')


const CreateInvoiceService=async (req)=>{
    try{
        const userId=new ObjectId(req.headers.userId);
        const cus_email=req.headers.email;

        //step 1: Bring The Products In cart List,Number of cart Items
        let matchingStage={$match:{userID:userId}}
        let joinWithProduct={$lookup:{from:'products',localField:'productID',foreignField:'_id',as:'product'}}
        let unwindProduct={$unwind:'$product'}

        const CartProducts=await CartModel.aggregate([matchingStage,joinWithProduct,unwindProduct])

        //step 2: Calculate The Total ,Payable and Vat
        let total=0,payable=0,Vat=0;
        let price=0;
        CartProducts.forEach((element)=>{
            price=element['product']['discount']?parseFloat(element['product']['discountPrice']):
                parseFloat(element['product']['price']);
            total+=price*parseInt(element['qty'])
        })

        Vat=total * 0.05;
        payable=total+Vat;


        //transaction id and validation id
        let trans_id=Math.floor(100000000+Math.random()*900000000);
        let val_id=0;

        //customer and shipping details and status
        let profile=await ProfileModel.aggregate([matchingStage])
        let cus_details= `name:${profile[0]['cus_name']},country:${profile[0]['cus_country']},address:${profile[0]
            ['cus_add']},phone:${profile[0]['cus_phone']}`;
        let ship_details= `name:${profile[0]['ship_name']},country:${profile[0]['ship_country']},address:${profile[0]
            ['ship_add']},phone:${profile[0]['ship_phone']}`;
        let delivery_status='pending'
        let payment_status='pending'


        //Create Invoice
        let Invoice=await InvoiceModel.create({
            userID:userId,
            payable:payable,
            cus_details:cus_details,
            ship_details:ship_details,
            tran_id:trans_id,
            val_id:val_id,
            delivery_status:delivery_status,
            payment_status:payment_status,
            total:total,
            vat:Vat
        })

        //Create Invoice Product Model
        let InvoiceID=Invoice['_id']
        CartProducts.forEach(async (element)=>{
           await InvoiceProductModel.create({
               userID:userId,
               invoiceID:InvoiceID,
               productID:element['productID'],
               qty:element['qty'],
               price:element['product']['discount']?parseFloat(element['product']['discountPrice']):
                   parseFloat(element['product']['price']),
               color:element['color'],
               size:element['size']
           })
        })


        //Delete All the Cart Items
        await CartModel.deleteMany({userID:userId})

        return {status:'success',msg:'Invoice Created',data:Invoice}

    }catch (e) {
        return {status:'failed',msg:'Invoice not Created',err:e.toString()}
    }
}

const PaymentFailService=async (req)=>{

}

const PaymentCancelService=async (req)=>{

}

const PaymentIPNService=async (req)=>{

}

const InvoiceListService=async (req)=>{

}

const PaymentSuccessService=async (req)=>{

}

const InvoiceProductListService=async (req)=>{

}


module.exports={
    CreateInvoiceService,
    PaymentSuccessService,
    PaymentFailService,
    PaymentCancelService,
    PaymentIPNService,
    InvoiceListService,
    InvoiceProductListService
}