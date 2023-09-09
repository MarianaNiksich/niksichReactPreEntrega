import React from "react"

import { Link } from "react-router-dom";
import { getProducts, getProductsById, getProductsByCategory } from "../JSON/AsyncMock";
import { useState, useEffect } from "react";
import ItemList from "../components/ItemList"
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams


    useEffect(() => {
        const asynFunc = categoryId ? getProductsByCategory : getProducts
        asynFunc(categoryId)
            .then(response => { setProducts(response) })
            .catch(error => { console.error(error) })
    }, [categoryId])

    return (
        <>
            <h1 className="titulo-intro">{props.titulo}</h1>
            <p className="parrafo-intro">{props.parrafo}</p>
            <div className="card-container">
                <ItemList products={products} />
            </div>
        </>
    )
}

export default ItemListContainer