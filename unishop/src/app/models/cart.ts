import { Product } from "./product";

export interface Cart {
    userId: string;
    products: Product[];
    qty: number;
    total: number;
    subtotal: number;

}
