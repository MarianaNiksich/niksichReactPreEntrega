import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


function ItemDetailContainer({ productsData }) {

    return (
        <div>
            {productsData.map((item) => {
                return (
                    <>

                        <Card style={{ width: '18rem' }} key={item.id}>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.titulo}</Card.Title>
                                <Card.Text>
                                    {item.autor}
                                </Card.Text>
                                <Button variant="primary"></Button>
                            </Card.Body>
                        </Card>
                    </>
                )
            })
            }
        </div>
    )
}

export default ItemDetailContainer