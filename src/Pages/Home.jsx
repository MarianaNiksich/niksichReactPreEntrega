import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import { productsData } from "../JSON/AsyncMock"
const Home = () => {
    return (
        <ItemListContainer titulo="¡Bienvenidos a Book Storage!" parrafo="¡Descubre un mundo de conocimiento en nuestra librería online! Encuentra los mejores libros en todas las categorías imaginables y sumérgete en historias cautivadoras, aprendizaje fascinante y descubrimientos asombrosos." />
    )

}
export default Home
