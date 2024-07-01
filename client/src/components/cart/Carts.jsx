import CartStore from "../../store/CartStore.js";
import CartButton from "./CartButton.jsx";
import ProductSkeleton from "../../skeleton/ProductSkeleton.jsx";

const Carts = () => {
    const {CartList,ReadCartListRequest,RemoveCartListRequest}=CartStore()
    let total=0,Vat,Payable
    const CalculateTotalPayable=()=>{
        if(CartList!==null){
            CartList.map((item)=>{
                if(item['WishProduct']['discount']){
                    total+=parseInt(item['WishProduct']['discountPrice'])
                }
                else {
                    total+=parseInt(item['WishProduct']['price'])
                }
            })

        }
    }
    CalculateTotalPayable()
    Vat=total*0.05
    Payable=total+Vat
    const RemoveCartItem=async (productID)=>{
        await RemoveCartListRequest(productID)
        await ReadCartListRequest()
    }
    if(CartList===null){
        return (
            <div>
                <ProductSkeleton/>
            </div>
        );
    }
    else {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card p-4">
                            <ul className="list-group list-group-flush">
                                {
                                    CartList && CartList.map((item, i) => {
                                        return (<div key={i} className="card mb-lg-3 mb-md-3 p-lg-3 p-md-3 p-2 mb-2">
                                            <li className="listgroup-item d-flex justify-content-between align-items-start">
                                                <img alt="image" className="rounded-1" width="90" height="auto"
                                                     src={item['WishProduct']['image']}/>
                                                <div className="ms-2 me-auto">
                                                    <p className="fw-lighter m-0">{item['WishProduct']['title']}</p>
                                                    <p className="fw-lighter my-1">Unit Price:{item['WishProduct']['price']},
                                                        <b>Qty</b>: {item['qty']},
                                                        <b>Size</b>: {item['size']},
                                                        <b>Color</b>: {item['color']}</p>
                                                    <p className=" h6 fw-bold m-0 text-dark">Total <i
                                                        className="bi bi-currency-dollar"></i>
                                                        {parseInt(item['WishProduct']['price']) * (parseInt(item['qty']))}
                                                    </p>
                                                </div>
                                                <button onClick={(e) => RemoveCartItem(item['productID'])}
                                                        className="btn btn-sm btn-outline-danger">
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </li>
                                        </div>)
                                    })
                                }
                            </ul>
                            <div className="my-4">
                                <ul className="list-group bg-transparent list-group-flush">
                                    <li className="list-group-item bg-transparent h6 m-0 text-dark">
                                        <span className="float-end">Total: <i
                                            className="bi bi-currency-dollar"/> {total}</span>
                                    </li>
                                    <li className="list-group-item bg-transparent h6 m-0 text-dark">
                                <span className="float-end"> Vat(5%):
                                    <i className="bi bi-currency-dollar"/>{Vat}</span>
                                    </li>
                                    <li className="list-group-item bg-transparent h6 m-0 text-dark">
                                        <span className="float-end"> Payable: <i
                                            className="bi bi-currency-dollar"/>{Payable}</span>
                                    </li>
                                    <li className="list-group-item bg-transparent ">
                                        <span className="float-end">
                                        <CartButton text="Check Out " className="btn px-5 mt-2 btn-success"/></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Carts;


