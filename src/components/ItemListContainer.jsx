import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { getProducts } from "../JSON/AsyncMock";
import { useState, useEffect } from "react";
import ItemList from "../components/ItemList"


function ItemListContasiner(props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => { setProducts(response) })
            .catch(error => { console.error(error) })
    })

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

export default ItemListContasiner