import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Card, Button, Form, Row, Col, Nav } from 'react-bootstrap';
import { Category } from '../models/IModels';
import './Static/Categories.css';


const Categories: React.FC = () => {
    
    const [categories, setCategories] = useState([]);

    const getcategories = () => {
        return axios.get('http://localhost:8080/v1/categories/getall');
    };

    useEffect(() => {
        getcategories().then((response) => setCategories(response.data.categories))
        .catch((error) => console.log(error));
    }, []);

    return (
        <div className="categories">
            <Row xs={1} sm={2} md={2} lg={4}>
            {categories.length > 0 && categories.map((category: Category, id) => (
                <Col key={id}>
                <Card>
                <Card.Img variant="top" src={"/" + category.imgurl} />
                <Card.Body style={{ marginTop: '-200px', color: 'white' }}>
                    <Card.Title>{category.name}</Card.Title>
                    <Form>
                    <Button 
                    variant="primary">
                    
                    <Nav.Link href="/products">Explore Products</Nav.Link></Button>
                    </Form>
                </Card.Body>
                </Card>
            </Col>
            ))}
            </Row>
        </div>
    );
}

export default Categories;