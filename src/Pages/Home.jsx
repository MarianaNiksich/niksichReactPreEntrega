import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import { products } from "../JSON/AsyncMock"
const Home = () => {
    return (
        <ItemListContainer productos={products} />
    )

}
export default Home
