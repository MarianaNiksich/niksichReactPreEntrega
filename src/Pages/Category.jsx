import React from "react";
import { products } from "../JSON/AsyncMock";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";

const Category = () => {

    return (
        <ItemListContainer productos={products} />
    )

}
export default Category