import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function ItemList({ products }) {

    return (
        <div>
            {products.map((item) => {
                return (

                    <div key={item.id} >
                        <Card style={{ width: '18rem' }} >
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.titulo}</Card.Title>
                                <Card.Text>
                                    {item.autor}
                                </Card.Text>
                                <Button variant="primary"></Button>
                            </Card.Body>
                        </Card>
                    </div>

                )
            })
            }
        </div>
    )
}
export default ItemList