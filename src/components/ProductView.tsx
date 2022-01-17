import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Card, Button, Form, Col } from 'react-bootstrap';
import { Product } from '../models/IModels';

const ProductView: React.FC<{product: Product}> = ({product}) => {
    const [productToAdd, setProductToAdd] = useState({
        ID: '',
        product_name: "",
        price: 0.00,
        quantity: 0,
    });
    const [quantity, setQuantity] = useState(0);
    const quantityRef = React.useRef<HTMLInputElement>(null);

    const addQuantity = (event: any) => {
        setQuantity(event.target.value);
    };

    const addToCart = (sku: string) => {
        setProductToAdd({
            ID: sku,
            product_name: product.name,
            price: product.price,
            quantity: Number(quantity)
        });
    };

    useEffect(() => {
        var token = localStorage.getItem('token');

        var config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        console.log(productToAdd);
        if (productToAdd.product_name.length !== 0 && quantity !== 0) {
            axios.post('http://localhost:8080/v1/cart/add', productToAdd, config)
            .then(response => console.log(response.data));
        }
    }, [productToAdd]);

    return (
        <Col key={product.sku}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.imgurl} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    <p>Price: {product.price}</p>
                </Card.Text>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Control type="quantity" placeholder="Quantity"
                    ref={quantityRef} 
                    onChange={e => addQuantity(e)} />
                </Form.Group>
                <Button 
                onClick={() => addToCart(product.sku)}
                variant="primary">Add to cart</Button>
                </Form>
            </Card.Body>
            </Card>
        </Col>
    );
}

export default ProductView;