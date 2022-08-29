import { Product } from "./product";


export interface Orders {
    userId: string;
    orderedDate: Date;
    totalPrice: number;
    status: string;
    products: Product[]
}
