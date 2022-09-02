import { Product } from "../products-model/product";


export interface Cart {
    customerId: string;
    products: Product[];
    qty: number;
    total?: number;
    subtotal?: number;

}
