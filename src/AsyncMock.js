
const productos = [
    {
        "id": 1,
        "titulo": "Cuentos completos de Lorrie Moore",
        "autor": "Lorrie Moore",
        "genero": "literatura",
        "precio": 2500,
        "stock": 3,
        "img": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQXPuukZq2TyPkVgDCLeryOMjXVrAqlQtyd2YKTPo_CrDMqfBue-ZgqFIgLookph__EM5yS1jmtdAq_TJrZg71MUSL-G8gWeGMA56efSNc3UvNdwCQJ2JI5&usqp=CAc"
    },
    {
        "id": 2,
        "titulo": "Las palabras justas",
        "autor": "Milena Busquets",
        "genero": "literatura",
        "precio": 3000,
        "stock": 2,
        "img": "https://images.cdn2.buscalibre.com/fit-in/360x360/ec/21/ec212322c4d5525a2c171f96b81e34a1.jpg"
    },
    {
        "id": 3,
        "titulo": "La teoria de los archipiélagos",
        "autor": "Alice Keller",
        "genero": "literatura",
        "precio": 4000,
        "stock": 5,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFLsDF1kDUwR_eclKYnnjnoTqBebG_Qa4yig&usqp=CAU"
    },
    {
        "id": 4,
        "titulo": "Diccionario Holandés",
        "autor": "Libreía universitaria",
        "genero": "idiomas",
        "precio": 2000,
        "stock": 1,
        "img": "https://images.cdn3.buscalibre.com/fit-in/360x360/83/31/8331f9e126460e6d32b7fa4bcc599460.jpg"
    },
    {
        "id": 5,
        "titulo": "Ready for B2 first",
        "autor": "Macmillan education",
        "genero": "idiomas",
        "precio": 5500,
        "stock": 6,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlyK7U7HO3jec84RoDnHnbqWmn-igrWNvhhcBaM-xRuzE2KXpsXrQleUEVAW9uCqeO-I&usqp=CAU"
    },
    {
        "id": 6,
        "titulo": "Rayuela",
        "autor": "Julio Cortazar",
        "genero": "literatura",
        "precio": 3000,
        "stock": 7,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUvGJ2BsLuor-IJIoZIJ1Ku94m224nvj7j8A&usqp=CAU"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(productos) }, 2000)
    }
    )
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(productos.find(products => products.id === productId)))
    }, 2000)
}
