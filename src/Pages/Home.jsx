import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import { productos } from "../JSON/AsyncMock"
const Home = () => {
    return (
        <ItemListContainer productos={productos} />
    )

}
export default Home
