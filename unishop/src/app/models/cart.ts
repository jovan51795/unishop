import { Product } from "./product";

export interface Cart {
    customerId: string;
    products: Product[];
    qty: number;
    total?: number;
    subtotal?: number;

}
