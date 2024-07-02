const {
    CreateInvoiceService,PaymentSuccessService,PaymentFailService,PaymentCancelService,
    PaymentIPNService,InvoiceListService,InvoiceProductListService
}=require('../services/InvoiceService')

exports.CreateInvoice=async (req,res)=>{
    const data=await CreateInvoiceService(req);
    return res.status(200).json(data);
}

exports.PaymentSuccess=async (req,res)=>{
    const data=await PaymentSuccessService(req);
    return res.redirect('/orders');
}

exports.PaymentFail=async (req,res)=>{
    const data=await PaymentFailService(req);
    return res.redirect('/orders');
}

exports.PaymentCancel=async (req,res)=>{
    const data=await PaymentCancelService(req);
    return res.redirect('/orders');
}

exports.PaymentIPN=async (req,res)=>{
    const data=await PaymentIPNService(req);
    return res.status(200).json(data);
}

exports.InvoiceList=async (req,res)=>{
    const data=await InvoiceListService(req);
    return res.status(200).json(data);
}

exports.InvoiceProductList=async (req,res)=>{
    const data=await InvoiceProductListService(req);
    return res.status(200).json(data);
}