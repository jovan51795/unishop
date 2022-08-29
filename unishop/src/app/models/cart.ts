import { Product } from "../core/models/products";

export interface Cart {
    userId: string;
    products: Product[];
    qty: number;
    total: number;
    subtotal: number;

}
