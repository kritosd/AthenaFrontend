/* Do not change, this code is generated from Golang structs */


export interface CartItem {
    cart_id: number;
    product_id: number;
    name: string;
    quantity: number;
    total_price: number;
}
export interface Cart {
    products: CartItem[];
    cart_items: number;
    total_price: number;
    username: string;
}
export interface Payment {
    username: string;
    cart_id: string;
    amount: number;
    paid: boolean;
}
export interface Category {
    name: string;
    empty: boolean;
    imgurl: string;
}
export interface Product {
    name: string;
    sku: string;
    price: number;
    empty: boolean;
    imgurl: string;
}
export interface PromoCode {
    name: string;
    product_cart_id: string;
    cart_id: string;
    pourcent: number;
    applied: boolean;
}
export interface User {
    username: string;
    email: string;
    password: string;
    is_admin: boolean;
}
export interface Users {
    users: User[];
}