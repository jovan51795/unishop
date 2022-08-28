import { Product } from "./product";

export class Cart {
    id: number;
    productId: number;
    productName: string;
    qty: number;
    price: number;


    constructor(id: number, product: Product, qty = 1){
        this.id = id;
        this.productId = product.id;
        this.productName = product.productName;
        this.price = product.price;
        this.qty = qty;
    }

}