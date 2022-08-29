import { Product } from "./product";

export interface Cart{
    userId: string;
    product: Product[];
    qty: number;
    total: number;
    subtotal: number;
}