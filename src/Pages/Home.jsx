import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import { productsData } from "../JSON/AsyncMock"
const Home = () => {
    return (
        <ItemListContainer productsData={productsData} />
    )

}
export default Home
