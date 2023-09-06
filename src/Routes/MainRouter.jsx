import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import NavBar from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer";



const MainRouter = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryId" element={<Category />} />
                <Route path="/item/:itemId" elemnt={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter