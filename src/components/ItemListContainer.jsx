function ItemListContainer(props) {
    return (
        <>
            <h1 className="titulo-intro">{props.titulo}</h1>
            <p className="parrafo-intro">{props.parrafo}</p>
        </>
    )
}

export default ItemListContainer