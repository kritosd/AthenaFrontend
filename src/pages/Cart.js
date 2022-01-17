import { useEffect, useState } from 'react';

import axios from 'axios';
import { Container, Nav } from 'react-bootstrap';
//import { Cart } from '../models/IModels';

function Cart() {
    const [cart, setCart] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getCart = () => {
        var token = localStorage.getItem('token');

        var config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return axios.get('http://localhost:8080/v1/cart/list', config)
    };

    useEffect(() => {
        getCart()
        .then((response) => {
            if (response.status === 200) {
                setCart(response.data.cart);
                setIsLoading(false);
                if (cart.ID !== 0) {
                    localStorage.setItem('cart_id', cart.ID);
                }
                return;
            } else {
                return;
            }
        });
    }, [cart.ID])

    return (
        <Container>
            <div className="cart">
            <h1>{cart.username}</h1>
            <p>Total: {cart.total_price}</p>
            { 
                cart.products ? (            
                    isLoading !== true &&
                        <table style={{width: '100%'}}>
                            <thead style={{height: 50}}>
                                <tr style={{borderBottom: '1px solid black'}}>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            {
                                cart.products.map((product, id) => (
                                    <tbody style={{height: 100}}>
                                        <tr>
                                            <th>{product.name}</th>
                                            <th>{product.total_price}</th>
                                            <th>{product.quantity}</th>
                                            <th>{product.total_price}</th>
                                        </tr>
                                    </tbody>
                                ))
                            }
                        </table>
                ) :
                <h1>Cart is empty</h1>
            }
            <Nav.Link href="/payment" className="btn btn-primary">Pay</Nav.Link>
            </div>
        </Container>
    );
}

export default Cart;
