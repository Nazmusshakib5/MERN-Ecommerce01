import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductListByBrandPage from "./pages/ProductListByBrandPage.jsx";
import ProductListByCategoryPage from "./pages/ProductListByCategoryPage.jsx";
import ProductListByKeywordPage from "./pages/ProductListByKeywordPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import AboutPage from "./pages/LegalPages/AboutPage.jsx";
import TermsPage from "./pages/LegalPages/TermsPage.jsx";
import RefundPage from "./pages/LegalPages/RefundPage.jsx";
import HowToBuyPage from "./pages/LegalPages/HowToBuyPage.jsx";
import ContactPage from "./pages/LegalPages/ContactPage.jsx";
import ComplainPage from "./pages/LegalPages/ComplainPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import VerifyPage from "./pages/VerifyPage.jsx";
import CustomerProfilePage from "./pages/CustomerProfilePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import WishPage from "./pages/WishPage.jsx";
import OrderPage from "./pages/OrderPage.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/ByBrand/:id' element={<ProductListByBrandPage/>}/>
                <Route path='/ByCategory/:id' element={<ProductListByCategoryPage/>}/>
                <Route path='/ByKeyword/:keyword' element={<ProductListByKeywordPage/>}/>
                <Route path='/Details/:id' element={<ProductDetailsPage/>}/>


                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/terms' element={<TermsPage/>}/>
                <Route path='/refund' element={<RefundPage/>}/>
                <Route path='/howtobuy' element={<HowToBuyPage/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
                <Route path='/complain' element={<ComplainPage/>}/>


                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/otp' element={<VerifyPage/>}/>
                <Route path='/Profile' element={<CustomerProfilePage/>}/>

                <Route path='/cart' element={<CartPage/>}/>
                <Route path='/wish' element={<WishPage/>}/>

                <Route path='/orders' element={<OrderPage/>}/>
            </Routes>

        </BrowserRouter>
    );
};

export default App;