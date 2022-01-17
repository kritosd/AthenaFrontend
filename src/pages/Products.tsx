import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import ProductView from '../components/ProductView';
import { Product } from '../models/IModels';

const Products: React.FC = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        return axios.get('http://localhost:8080/v1/products/getall');
    };

    useEffect(() => {
        getProducts().then((response) => setProducts(response.data.products))
        .catch((error) => console.log(error));
    }, []);

    return (
        <Container>
            <div className="products">
                <Row xs={12} sm={12} md={4}>
                {products.length > 0 && products.map((product: Product, id) => (
                    <ProductView
                        key={product.sku}
                        product={product}
                    />
                ))}
                </Row>
            </div>
        </Container>
    );
}

export default Products;