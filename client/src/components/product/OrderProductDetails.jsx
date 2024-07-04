import CartStore from "../../store/CartStore.js";
import ProductSkeleton from "../../skeleton/ProductSkeleton.jsx";
import {useParams} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from "react";
import ReviewStore from "../../store/ReviewStore.js";
import ReviewButton from "../Review/ReviewButton.jsx";
import Nodata from "../layout/Nodata.jsx";
import validationHelper from "../../utility/ValidationHelper.js";
import toast from "react-hot-toast";

const OrderProductDetails = () => {
    const {InvoiceProductList}=CartStore()
    const {ReviewFormData,ReviewFormOnChange,ReviewCreateRequest}=ReviewStore()
    const {invoiceID}=useParams()
    console.log(ReviewFormData)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setShow(true)
        ReviewFormOnChange('productID',id)
    };

    const CreateReviews=async ()=>{
        if(validationHelper.IsReviewEmpty(ReviewFormData.des)){
            toast.error('Write Something to Create Review')
        }
        else {
            setShow(true)
            let res=await ReviewCreateRequest(ReviewFormData)
            res?toast.success('Review Created'):toast.error('Something Went Wrong')
            setShow(false)
        }
    }
    if(InvoiceProductList===null){
        return(
            <div>
                <ProductSkeleton/>
            </div>
        )
    }
    else if(InvoiceProductList.length===0){
        return (
            <div>
                <Nodata/>
            </div>
        )
    }
    else {
        return (
            <div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card p-4">
                                <ul className="list-group list-group-flush">
                                    {
                                        InvoiceProductList && InvoiceProductList.map((item, i) => {
                                            return (<div key={i} className="card mb-lg-3 mb-md-3 p-lg-3 p-md-3 p-3 mb-2">
                                                <li className="listgroup-item d-flex flex-column flex-md-row flex-lg-row
                                                 justify-content-md-between">
                                                    <img alt="image" className="rounded-1" width="90" height="auto"
                                                         src={item['product']['image']}/>
                                                    <div className="ms-2 me-auto">
                                                        <p className="fw-lighter m-0">{item['product']['title']}</p>
                                                        <p className="fw-lighter my-1">
                                                            <b>Qty</b>: {item['qty']},
                                                            <b>Size</b>: {item['size']},
                                                            <b>Color</b>: {item['color']}</p>
                                                    </div>
                                                    <button onClick={(e)=>handleShow(item['productID'])}  className="btn ms-lg-3 ms-md-3 ms-2
                                                    btn-success my-auto" >Create Review</button>
                                                </li>
                                            </div>)
                                        })
                                    }
                                </ul>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Create Review</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12 p-2">
                                                    <label className="form-label">Rating</label>
                                                    <select className="form-select"
                                                            onChange={(e) => ReviewFormOnChange('rating', e.target.value)}>
                                                        <option value='1'>1 Star</option>
                                                        <option value='2'>2 Star</option>
                                                        <option value='3'>3 Star</option>
                                                        <option value='4'>4 Star</option>
                                                        <option value='5'>5 Star</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-12 p-2">
                                                    <label className="form-label">Review</label>
                                                    <textarea className="form-control" rows="4" placeholder="Write Your review Here!"
                                                            onChange={(e) => ReviewFormOnChange('des', e.target.value)}>
                                                    </textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <ReviewButton onClick={CreateReviews}
                                             className="btn ms-lg-3 ms-md-3 ms-2 btn-success d-flex" text="Submit"/>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default OrderProductDetails;