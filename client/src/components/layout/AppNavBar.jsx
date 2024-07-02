import {Link, useNavigate} from "react-router-dom";
import logo from '../../assets/images/plainb-logo.svg'
import ProductStore from "../../store/ProductStore.js";
import userStore from "../../store/UserStore.js";
import SubmitButton from "../user/SubmitButton.jsx";
import CartStore from "../../store/CartStore.js";
import {useEffect} from "react";
import WishStore from "../../store/WishStore.js";


const AppNavBar = () => {
    const navigate = useNavigate();
    const {SetSearchProducts, SearchProducts} = ProductStore()
    const {IsLogin, UserLogoutRequest} = userStore()
    const {CartCount, ReadCartListRequest} = CartStore()
    const {WishCount, ReadWishListRequest} = WishStore()

    useEffect(() => {
        (async () => {
            if (IsLogin()) {
                await ReadCartListRequest()
                await ReadWishListRequest()
            }
        })()
    }, []);

    const HandleLogout = async () => {
        await UserLogoutRequest();
        sessionStorage.clear();
        localStorage.clear()
        navigate('/');
    }

    return (
        <>
            <div></div>
            <nav className="navbar sticky-top bg-white navbar-expand-lg navbar-light py-3 py-md-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img className="img-fluid" src={logo} alt="" width="96px"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav06"
                            aria-controls="nav06" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="nav06">
                        <ul className="navbar-nav mt-3 mt-lg-0 mb-3 mb-lg-0 ms-lg-3">
                            <span className="nav-item me-4 d-flex justify-content-center">
                                <Link className="btn ms-2 btn-light me-md-3" to="/">
                                    <i className="bi text-dark bi-house me-2"></i>Home</Link>
                                 <Link to="/cart" type="button"
                                       className="btn ms-2 me-md-3 btn-light position-relative">
                            <i className="bi text-dark bi-bag me-2"></i>Cart
                            <span
                                className='position-absolute top-0 end-0 translate-middle badge rounded-pill bg-success'>{CartCount}</span>
                        </Link>
                        <Link to="/wish" type="button" className="btn ms-2 me-md-3 btn-light position-relative">
                            <i className="bi text-dark bi-heart me-2"></i>Wish
                            <span
                                className='position-absolute top-0 end-0 translate-middle badge rounded-pill bg-warning'>{WishCount}</span>
                        </Link>
                         <Link className="btn ms-2 btn-light me-md-3" to="/orders">
                              <i className="bi text-dark bi-truck-front me-2"></i>Order
                         </Link>
                            </span>
                        </ul>


                        <ul className="navbar-nav ms-auto">
                            <div className=" d-lg-flex d-md-flex m-auto">
                                <div className="input-group my-2 my-md-0 my-lg-0">
                                    <input onChange={(e) => {
                                        SetSearchProducts(e.target.value)
                                    }} className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                                    <Link to={SearchProducts ? (`/ByKeyword/${SearchProducts}`) : ('/')}
                                          className="btn btn-outline-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor" style={{height: 24, width: 24}}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                            width: height:
                                            Slider Component
                                        </svg>
                                    </Link>
                                </div>

                                {
                                    IsLogin() ? (
                                        <div className=" d-flex mt-2 mt-md-0 mt-lg-0">
                                            <Link type="button" className="btn ms-lg-3 ms-md-3 btn-success d-flex"
                                                  to="/Profile">Profile</Link>
                                            <SubmitButton onClick={HandleLogout} text="Logout"
                                                          className="btn ms-lg-3 ms-md-3 ms-2 btn-success d-flex"/>
                                        </div>
                                    ) : (
                                        <Link type="button"
                                              className="btn ms-lg-3 ms-md-3 btn-success d-flex justify-content-center"
                                              to="/login">Login</Link>
                                    )
                                }
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    );
};

export default AppNavBar;

// <div className="container-fluid text-white p-2 bg-success">
//     <div className="container">
//         <div className="row justify-content-around">
//             <div className="col-md-6">
//                             <span>
//                             <span className="f-12">
//                             <i className="bi bi-envelope"></i> Support@PlanB.com </span>
//                             <span className="f-12 mx-2">
//                             <i className="bi bi-envelope"></i> 01774688159 </span>
//                             </span>
//             </div>
//             <div className="col-md-6">
//                             <span className="float-end">
//                             <span className="bodySmal mx-2">
//                             <i className="bi bi-whatsapp"></i>
//                             </span>
//                             <span className="bodySmal mx-2">
//                             <i className="bi bi-youtube"></i>
//                             </span>
//                             <span className="bodySmal">
//                             <i className="bi bi-facebook"></i>
//                             </span>
//                             </span>
//             </div>
//         </div>
//     </div>
// </div>