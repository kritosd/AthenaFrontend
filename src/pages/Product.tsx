import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import ProductView from '../components/ProductView';
import { Product } from '../models/IModels';

const Products: React.FC = () => {
    const [product, setProducts] = useState<Product>();

    const getProducts = () => {
        return axios.get('http://localhost:8080/v1/products/get');
    };

    useEffect(() => {
        getProducts().then((response) => setProducts(response.data.product))
        .catch((error) => console.log(error));
    }, [product]);

    if (product) {
        return (
            <Container>
                <div className="products">
                    <Row xs={12} sm={12} md={4}>
                        <ProductView
                            key={product.sku}
                            product={product}
                        />
                    </Row>
                </div>
            </Container>
        );
    } else {
        return null;
    }
}

export default Products;