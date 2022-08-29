import { Product } from "./product";

export interface Orders {
    customerId: string;
    orderedDate: Date;
    totalPrice: number;
    status: string;
    products: Product[]
}
