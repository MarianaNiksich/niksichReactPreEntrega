import React from "react";
import { productsData } from "../JSON/AsyncMock";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";

const Category = () => {
    const { categoryId } = useParams
    const filter = productsData.filter((item) => item.genero === categoryId)
    return (
        <ItemListContainer productsData={filter} />
    )

}
export default Category