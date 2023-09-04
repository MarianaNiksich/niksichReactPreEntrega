import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import CategoriaLiteratura from "../Pages/CategoriaLiteratura";
import CategoriaIdiomas from "../Pages/CategoriaIdiomas";
import NavBar from "../components/NavBar";



const MainRouter = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category-literatura" element={<CategoriaLiteratura />} />
                <Route path="/category-idiomas" elemnt={<CategoriaIdiomas />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter