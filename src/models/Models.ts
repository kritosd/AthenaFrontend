/* Do not change, this code is generated from Golang structs */


export class CartItem {
    cart_id: number;
    product_id: number;
    name: string;
    quantity: number;
    total_price: number;

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.cart_id = source["cart_id"];
        this.product_id = source["product_id"];
        this.name = source["name"];
        this.quantity = source["quantity"];
        this.total_price = source["total_price"];
    }
}
export class Cart {
    products: CartItem[];
    cart_items: number;
    total_price: number;
    username: string;

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.products = this.convertValues(source["products"], CartItem);
        this.cart_items = source["cart_items"];
        this.total_price = source["total_price"];
        this.username = source["username"];
    }

	convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ("object" === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
	}
}
export class Payment {
    username: string;
    cart_id: string;
    amount: number;
    paid: boolean;

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.username = source["username"];
        this.cart_id = source["cart_id"];
        this.amount = source["amount"];
        this.paid = source["paid"];
    }
}
export class Category {
    name: string;
    empty: boolean;
    imgurl: string;

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.name = source["name"];
        this.empty = source["empty"];
        this.imgurl = source["imgurl"];
    }
}
export class Product {
    name: string;
    sku: string;
    price: number;
    empty: boolean;
    imgurl: string;

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.name = source["name"];
        this.sku = source["sku"];
        this.price = source["price"];
        this.empty = source["empty"];
        this.imgurl = source["imgurl"];
    }
}
export class PromoCode {
    name: string;
    product_cart_id: string;
    cart_id: string;
    pourcent: number;
    applied: boolean;

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.name = source["name"];
        this.product_cart_id = source["product_cart_id"];
        this.cart_id = source["cart_id"];
        this.pourcent = source["pourcent"];
        this.applied = source["applied"];
    }
}
export class User {
    username: string;
    email: string;
    password: string;
    is_admin: boolean;

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.username = source["username"];
        this.email = source["email"];
        this.password = source["password"];
        this.is_admin = source["is_admin"];
    }
}
export class Users {
    users: User[];

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.users = this.convertValues(source["users"], User);
    }

	convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ("object" === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
	}
}