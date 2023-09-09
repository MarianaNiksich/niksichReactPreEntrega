import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import NavBar from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemList";



const MainRouter = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/item/:itemId" elemnt={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter