import { Product } from "../core/models/products";

export interface Orders {
    userId: string;
    orderedDate: Date;
    totalPrice: number;
    status: string;
    products: Product[]
}
