import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductListByBrandPage from "./pages/ProductListByBrandPage.jsx";
import ProductListByCategoryPage from "./pages/ProductListByCategoryPage.jsx";
import ProductListByKeywordPage from "./pages/ProductListByKeywordPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/ByBrand/:id' element={<ProductListByBrandPage/>}/>
                <Route path='/ByCategory/:id' element={<ProductListByCategoryPage/>}/>
                <Route path='/ByKeyword/:keyword' element={<ProductListByKeywordPage/>}/>
                <Route path='/Details/:id' element={<ProductDetailsPage/>}/>
            </Routes>

        </BrowserRouter>
    );
};

export default App;